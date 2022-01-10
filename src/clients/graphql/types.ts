import {PostRequestParams} from '../http_client/types';

export type GraphqlParams<T = unknown> = Omit<PostRequestParams<T>, 'path' | 'type' | 'data'> & {
  data: string | {
    query: string;
    variables?: { [K: string]: any; };
    operationName?: string;
  };
};

