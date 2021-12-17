import querystring from 'querystring';

import {Method} from '@shopify/network';
import {Context} from 'src/context';
import {ShopifyHeader} from 'src/base_types';
import {HttpClient} from 'src/clients/http_client/http_client';
import {
  RequestParams,
  DataType,
  HeaderParams,
} from 'src/clients/http_client/types';
import * as ShopifyErrors from 'src/error';
import {RestRequestReturn, PageInfo} from 'src/clients/rest/types';


export interface Params<D = Record<string, unknown> | string, Q = Record<string, string | number>> {
  path: string;
  data?: D;
  query?: Q;
  extraHeaders?: HeaderParams;
  tries?: number;
  [T: string]: string | any;
}

class TypedRestClient extends HttpClient {
  private static LINK_HEADER_REGEXP = /<([^<]+)>; rel="([^"]+)"/;
  private static DEFAULT_LIMIT = '50';

  Product: {

    /** SUPER DUPER!*/
    get: (params: (Omit<Params, 'path'>)) => Promise<RestRequestReturn<{ product: 'any;'; }>>;
  };

  public constructor(domain: string, readonly accessToken?: string) {
    super(domain);

    if (!Context.IS_PRIVATE_APP && !accessToken) {
      throw new ShopifyErrors.MissingRequiredArgument(
        'Missing access token when creating REST client',
      );
    }

    this.Product = {
      get: (params) => this.request({...params, path: 'products', type: DataType.JSON, method: Method.Get} as RequestParams),
    };
  }

  protected async request<T=unknown>(params: RequestParams): Promise<RestRequestReturn<T>> {
    const typedParams = params as Params;
    params.extraHeaders = {
      [ShopifyHeader.AccessToken]: Context.IS_PRIVATE_APP
                                   ? Context.API_SECRET_KEY
                                   : (this.accessToken as string),
      ...params.extraHeaders,
    };

    params.path = params.path.replace(/\${([^/\\]*)}/gi, (match) => {
      return typedParams[match];
    });
    params.path = this.getRestPath(params.path);

    const ret = (await super.request(params)) as RestRequestReturn<T>;

    const link = ret.headers.get('link');
    if (params.query && link !== undefined) {
      const pageInfo: PageInfo = {
        limit: params.query.limit
               ? params.query.limit.toString()
               : TypedRestClient.DEFAULT_LIMIT,
      };

      if (link) {
        const links = link.split(', ');

        for (const link of links) {
          const parsedLink = link.match(TypedRestClient.LINK_HEADER_REGEXP);
          if (!parsedLink) {
            continue;
          }

          const linkRel = parsedLink[2];
          const linkUrl = new URL(parsedLink[1]);
          const linkFields = linkUrl.searchParams.get('fields');
          const linkPageToken = linkUrl.searchParams.get('page_info');

          if (!pageInfo.fields && linkFields) {
            pageInfo.fields = linkFields.split(',');
          }

          if (linkPageToken) {
            switch (linkRel) {
              case 'previous':
                pageInfo.previousPageUrl = parsedLink[1];
                pageInfo.prevPage = this.buildRequestParams(parsedLink[1]);
                break;
              case 'next':
                pageInfo.nextPageUrl = parsedLink[1];
                pageInfo.nextPage = this.buildRequestParams(parsedLink[1]);
                break;
            }
          }
        }
      }

      ret.pageInfo = pageInfo;
    }

    return ret;
  }

  private getRestPath(path: string): string {
    return `/admin/api/${Context.API_VERSION}/${path}.json`;
  }

  private buildRequestParams(newPageUrl: string): Params {
    const pattern = `^/admin/api/[^/]+/(.*).json$`;

    const url = new URL(newPageUrl);
    const path = url.pathname.replace(new RegExp(pattern), '$1');
    const query = querystring.decode(
      url.search.replace(/^\?(.*)/, '$1'),
    ) as Record<string, string | number>;
    return {
      path,
      query,
    };
  }
}

export {TypedRestClient};

