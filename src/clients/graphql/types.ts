import {PostRequestParams} from '../http_client/types';

export type GraphqlParams<T = unknown> = Omit<
  PostRequestParams<T>,
  'path' | 'type' | 'data'
> & {
  data:
    | string
    | {
        query: string | string[];
        variables?: T extends {variables: any}
          ? T['variables']
          : {[K: string]: any} | string;
        operationName?: string;
      };
};
