import {PostRequestParams} from '../http_client/types';

export type GraphqlParams<T = unknown> = Omit<PostRequestParams<T>, 'path' | 'type'>;
