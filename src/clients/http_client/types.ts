import {Method} from '@shopify/network';
import {Headers} from 'node-fetch';
import {DeletePaths} from 'src/clients/http_client/types/deleteRequest';
import {GetPaths} from 'src/clients/http_client/types/getRequest';
import {PostPaths} from 'src/clients/http_client/types/postRequest';
import {PutPaths} from 'src/clients/http_client/types/putRequest';

export type HeaderParams = Record<string, string | number>;

export enum DataType {
  JSON = 'application/json', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  GraphQL = 'application/graphql', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
  URLEncoded = 'application/x-www-form-urlencoded', // eslint-disable-line @shopify/typescript/prefer-pascal-case-enums
}

export interface GetRequestParams<T = string, D = unknown> {
  path: T;
  type?: DataType;
  data?: D extends { body: any; } ? D['body'] : Record<string, unknown> | string;
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

export interface RequestReturn<T = unknown> {
  body: T extends { response: any; } ? T['response'] : unknown;
  headers: Headers;
}

type GetPathModel =
  | {
  path: 'product';
  query: { product: 'asd'; };
  response: { product: string; };
}
  | {
  path: 'product/count';
  response: { count: { number: number; }; };
}
  | {
  path: `product/${number}`;
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
  path: `product/${number}.json`;
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

type GetPathType = PostPathModel['path'];
type PostPathType = PostPathModel['path'];
type PutPathType = PutPathModel['path'];
type DeletePathType = DeletePathModel['path'];


export type GetRequest = <T extends GetPathType>(
  params: GetRequestParams<T, ExtractPath<GetPathModel, T>>
) => Promise<RequestReturn<ExtractPath<GetPathModel, T>>>;

export type PostRequest = <T extends PostPathType>(
  params: PostRequestParams<T, ExtractPath<PostPathModel, T>>
) => Promise<RequestReturn<ExtractPath<PostPathModel, T>>>;

export type PutRequest = <T extends PutPathType>(
  params: PutRequestParams<T, ExtractPath<PutPathModel, T>>
) => Promise<RequestReturn<ExtractPath<PutPathModel, T>>>;

export type DeleteRequest = <T extends DeletePathType>(
  params: DeleteRequestParams<T, ExtractPath<DeletePathModel, T>>
) => Promise<RequestReturn<ExtractPath<DeletePathModel, T>>>;

type ExcludeTypeKey<K> = K extends 'path' ? never : K;

type ExcludePathType<A> = { [K in ExcludeTypeKey<keyof A>]: A[K] };

type ExtractPath<A, T> = A extends { path: T; } ? ExcludePathType<A> : never;
