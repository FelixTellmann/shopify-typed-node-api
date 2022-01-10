import {Method} from '@shopify/network';
import {Headers} from 'node-fetch';

export type HeaderParams = Record<string, string | number>;

export enum DataType {
  JSON = 'application/json', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  GraphQL = 'application/graphql', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  URLEncoded = 'application/x-www-form-urlencoded', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
}


export interface GetRequestParams<T = unknown> {
  path: (T extends { path: string; } ? T['path'] : string) | string;
  type?: DataType;
  data?: T extends { body: any; } ? T['body'] & Record<string, unknown> | string : Record<string, unknown> | string;
  query?: T extends { query: any; } ? T['query'] & Record<string, string | number>: Record<string, string | number>;
  extraHeaders?: HeaderParams;
  tries?: number;
}

export type PostRequestParams<T = unknown> = GetRequestParams<T> & {
  type: DataType;
  data: T extends { body: any; } ? T['body'] & Record<string, unknown> | string : Record<string, unknown> | string;
};

export type PutRequestParams<T = unknown> = PostRequestParams<T>;

export type DeleteRequestParams<T = unknown> = GetRequestParams<T>;

export type RequestParams<T = unknown> = (GetRequestParams<T> | PostRequestParams<T>) & {
  method: Method;
};

export interface RequestReturn<T = unknown> {
  body: T extends { response: any; } ? T['response'] : unknown;
  headers: Headers;
}
