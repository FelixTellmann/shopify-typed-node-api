import {Method} from '@shopify/network';
import {Headers} from 'node-fetch';

export interface HeaderParams {
  [key: string]: string | number;
}

export enum DataType {
  JSON = 'application/json', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  GraphQL = 'application/graphql', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  URLEncoded = 'application/x-www-form-urlencoded', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
}

export type QueryParams =
  | string
  | number
  | string[]
  | number[]
  | {[key: string]: QueryParams};

export interface GetRequestParams<T = unknown> {
  path: (T extends {path: string} ? T['path'] : string) | string;
  type?: DataType;
  data?: T extends {body: any}
    ?
        | (T['body'] & {[key: string]: unknown})
        | string
        | {
            data:
              | string
              | {
                  query: string;
                  variables?: {[K: string]: any};
                  operationName?: string;
                };
          }
    :
        | {[key: string]: unknown}
        | string
        | {
            data:
              | string
              | {
                  query: string;
                  variables?: {[K: string]: any};
                  operationName?: string;
                };
          };
  query?: T extends {query: any}
    ? T['query'] & {[key: string]: QueryParams}
    : {[key: string]: QueryParams};
  extraHeaders?: HeaderParams;
  tries?: number;
}

export type PostRequestParams<T = unknown> = GetRequestParams<T> & {
  type: DataType;
  data: T extends {body: any}
    ?
        | (T['body'] & {[key: string]: unknown})
        | string
        | {
            data:
              | string
              | {
                  query: string;
                  variables?: {[K: string]: any};
                  operationName?: string;
                };
          }
    :
        | {[key: string]: unknown}
        | string
        | {
            data:
              | string
              | {
                  query: string;
                  variables?: {[K: string]: any};
                  operationName?: string;
                };
          };
};

export type PutRequestParams<T = unknown> = PostRequestParams<T>;

export type DeleteRequestParams<T = unknown> = GetRequestParams<T>;

export type RequestParams<T = unknown> = (
  | GetRequestParams<T>
  | PostRequestParams<T>
) & {
  method: Method;
};

export interface RequestReturn<T = unknown> {
  body: T extends {response: any} ? T['response'] : unknown;
  headers: Headers;
}
