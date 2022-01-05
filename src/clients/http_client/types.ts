import {Method} from '@shopify/network';
import {Headers} from 'node-fetch';
import {GetPaths} from 'src/clients/http_client/types/getRequest';

export type HeaderParams = Record<string, string | number>;

export enum DataType {
  JSON = 'application/json', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  GraphQL = 'application/graphql', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  URLEncoded = 'application/x-www-form-urlencoded', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
}

export interface GetRequestParams<T = string, D = unknown> {
  path: T;
  type?: DataType;
  data?: D extends { body: any; } ? D['body'] : Record<string, string | number>;
  query?: D extends { query: any; } ? D['query'] : Record<string, string | number>;
  extraHeaders?: HeaderParams;
  tries?: number;
}

export type PostRequestParams<T = string, D = unknown> = GetRequestParams<T, D> & {
  type: DataType;
  data: D extends { body: any; } ? D['body'] : Record<string, unknown> | string;
};

export type PutRequestParams<T = string, D = unknown> = PostRequestParams<T, D>;

export type DeleteRequestParams<T = string, D = unknown> = GetRequestParams<T, D>;

export type RequestParams = (GetRequestParams | PostRequestParams) & {
  method: Method;
};

export interface RequestReturn<T = { response: unknown; }> {
  body: T extends { response: any; } ? T['response'] : unknown;
  headers: Headers;
}

type GetPathModel =
  | {
  path: 'product';
  query: { product?: 'asd'; };
  response: { product: string; };
}
  | {
  path: `product/${number}`;
  query: { product?: '123123'; };
  response: { special: number; };
};

type PostPathModel =
  | {
  path: 'product';
  query: { product: 'asd'; };
  response: { product: string; };
  body: { product: string; };
}
  | {
  path: 'product/count';
  response: { count: { number: number; }; };
}
  | {
  path: `product/${number}`;
  response: { special: number; };
};
type PutPathModel =
  | {
  path: 'product';
  query: { product: 'asd'; };
  response: { product: string; };
  body: { product: string; };
}
  | {
  path: 'product/count';
  response: { count: { number: number; }; };
}
  | {
  path: `product/${number}`;
  response: { special: number; };
};
type DeletePathModel =
  | {
  path: 'product';
  query: { product: 'asd'; };
  response: { product: string; };
  body: { product: string; };
}
  | {
  path: 'product/count';
  response: { count: { number: number; }; };
}
  | {
  path: `product/${number}`;
  response: { special: number; };
};
//
// type GetPathType = GetPathModel['path'];
// type GetPathType2 = GetPaths['path'];
type PostPathType = PostPathModel['path'];
type PutPathType = PutPathModel['path'];
type DeletePathType = DeletePathModel['path'];

export type GetRequest = <T extends GetPaths['path']>(
  params: GetRequestParams<T, ExtractPath<GetPaths, T>>
) => Promise<RequestReturn<ExtractPath<GetPaths, T>>>;

export type PostRequest = <T extends PostPathType>(
  params: PostRequestParams<T, ExtractPath<PostPathModel, T>>
) => Promise<RequestReturn< ExtractPath<PostPathModel, T>>>;

export type PutRequest = <T extends PutPathType>(
  params: PutRequestParams<T, ExtractPath<PutPathModel, T>>
) => Promise<RequestReturn< ExtractPath<PutPathModel, T>>>;

export type DeleteRequest = <T extends DeletePathType>(
  params: DeleteRequestParams<T, ExtractPath<DeletePathModel, T>>
) => Promise<RequestReturn< ExtractPath<DeletePathModel, T>>>;

type ExtractPath<A, T> = A extends { path: T; } ? A : never;

