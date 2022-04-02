import {InvalidMergedGraphqlQuery} from '../../error';

export const mergeQuery = (gql: string[]): string => {
  const requests: string[] = [];
  const vars: string[] = [];
  const isQuery = gql.every((query) => /^query/i.test(query.trim()));
  const isMutation = gql.every((query) => /^mutation/i.test(query.trim()));
  // eslint-disable-next-line no-nested-ternary
  const type = isQuery ? 'query' : isMutation ? 'mutation' : false;

  if (!type) {
    throw new InvalidMergedGraphqlQuery(
      'All merged requests need to be of the same type: `query` or `mutation`',
    );
  }

  gql.forEach((query) => {
    const queryArr = query.trim().split('\n');

    let countBrackets = 0;
    const cleanQueryArr = queryArr.filter((line) => Boolean(line.trim()));
    const cleanQuery = cleanQueryArr
      .map((line) => {
        if (/\s*query\s.*/i.test(line)) {
          if (/^[^(]*\((.*?)\)[^)]*$/i.test(line)) {
            const variables = line
              .replace(/^[^(]*\((.*?)\)[^)]*$/i, '$1')
              .split(',')
              .map((variable) => variable.trim());

            variables.forEach((val) => {
              vars.push(val);
            });
          }

          return '';
        }

        if (/{/.test(line)) {
          countBrackets += 1;
        }

        if (/}/.test(line)) {
          countBrackets -= 1;
        }

        if (countBrackets < 0 && /}/.test(line)) {
          return '';
        }
        return line;
      })
      .filter((line) => Boolean(line.trim()))
      .join('\n');

    requests.push(cleanQuery);
  });

  return `${type} ${
    vars.length ? `(${vars.join(', ')})` : ''
  } {\n  ${requests.join('\n')}\n}`;
};
