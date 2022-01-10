import {ShopifyHeader} from '../../base_types';
import {Context} from '../../context';
import * as ShopifyErrors from '../../error';
import {MissingRequiredArgument} from '../../error';
import {HttpClient} from '../http_client/http_client';
import {DataType, PostRequestParams, RequestReturn} from '../http_client/types';

import {GraphqlParams} from './types';

export interface AccessTokenHeader {
  header: string;
  value: string;
}

export class GraphqlClient {
  protected baseApiPath = '/admin/api';

  private readonly client: HttpClient;

  constructor(readonly domain: string, readonly accessToken?: string) {
    if (!Context.IS_PRIVATE_APP && !accessToken) {
      throw new ShopifyErrors.MissingRequiredArgument(
        'Missing access token when creating GraphQL client',
      );
    }

    this.client = new HttpClient(this.domain);
  }

  async query<T = unknown>(params: GraphqlParams<T>): Promise<RequestReturn<T>> {
    if (typeof params.data === 'string' && params.data.length === 0 || !params.data) {
      throw new MissingRequiredArgument('Query missing.');
    }

    const accessTokenHeader = this.getAccessTokenHeader();
    params.extraHeaders = {
      [accessTokenHeader.header]: accessTokenHeader.value,
      ...params.extraHeaders,
    };

    const path = `${this.baseApiPath}/${Context.API_VERSION}/graphql.json`;


    let dataType: DataType.GraphQL | DataType.JSON;

    if (typeof params.data === 'object') {
      dataType = DataType.JSON;
      return this.client.post<T & {
        data: {
          query: string;
          variables?: { [K: string]: any; };
          operationName?: string;
        };
      }>({path, type: dataType, ...params});
    } else {
      dataType = DataType.GraphQL;
      return this.client.post<T>({path, type: dataType, ...params} as PostRequestParams<T>);
    }
  }

  protected getAccessTokenHeader(): AccessTokenHeader {
    return {
      header: ShopifyHeader.AccessToken,
      value: Context.IS_PRIVATE_APP
             ? Context.API_SECRET_KEY
             : (this.accessToken as string),
    };
  }
}
