import {TypedRestClient as TypedRest} from './typed_rest';
import {RestClient as Rest} from './rest';
import {GraphqlClient as Graphql} from './graphql';
import {StorefrontClient as Storefront} from './graphql/storefront_client';

const ShopifyClients = {
  Rest,
  TypedRest,
  Graphql,
  Storefront,
};

export default ShopifyClients;
export {ShopifyClients};
