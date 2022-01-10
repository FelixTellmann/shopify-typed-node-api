export enum DeliveryMethod {
  Http = 'http',
  EventBridge = 'eventbridge',
  PubSub = 'pubsub',
}

export type WebhookTopics =
// "The webhook topic for `app_purchases_one_time/update` events.";
  | 'APP_PURCHASES_ONE_TIME_UPDATE'
  // The webhook topic for `app_subscriptions/update` events.
  | 'APP_SUBSCRIPTIONS_UPDATE'
  // The webhook topic for `app/uninstalled` events.
  | 'APP_UNINSTALLED'
  // The webhook topic for `attributed_sessions/first` events.
  | 'ATTRIBUTED_SESSIONS_FIRST'
  // The webhook topic for `attributed_sessions/last` events.
  | 'ATTRIBUTED_SESSIONS_LAST'
  // The webhook topic for `carts/create` events.
  | 'CARTS_CREATE'
  // The webhook topic for `carts/update` events.
  | 'CARTS_UPDATE'
  // The webhook topic for `channels/delete` events.
  | 'CHANNELS_DELETE'
  // The webhook topic for `checkouts/create` events.
  | 'CHECKOUTS_CREATE'
  // The webhook topic for `checkouts/delete` events.
  | 'CHECKOUTS_DELETE'
  // The webhook topic for `checkouts/update` events.
  | 'CHECKOUTS_UPDATE'
  // The webhook topic for `collections/create` events.
  | 'COLLECTIONS_CREATE'
  // The webhook topic for `collections/delete` events.
  | 'COLLECTIONS_DELETE'
  // The webhook topic for `collections/update` events.
  | 'COLLECTIONS_UPDATE'
  // The webhook topic for `collection_listings/add` events.
  | 'COLLECTION_LISTINGS_ADD'
  // The webhook topic for `collection_listings/remove` events.
  | 'COLLECTION_LISTINGS_REMOVE'
  // The webhook topic for `collection_listings/update` events.
  | 'COLLECTION_LISTINGS_UPDATE'
  // The webhook topic for `collection_publications/create` events.
  | 'COLLECTION_PUBLICATIONS_CREATE'
  // The webhook topic for `collection_publications/delete` events.
  | 'COLLECTION_PUBLICATIONS_DELETE'
  // The webhook topic for `collection_publications/update` events.
  | 'COLLECTION_PUBLICATIONS_UPDATE'
  // The webhook topic for `customers/create` events.
  | 'CUSTOMERS_CREATE'
  // The webhook topic for `customers/delete` events.
  | 'CUSTOMERS_DELETE'
  // The webhook topic for `customers/disable` events.
  | 'CUSTOMERS_DISABLE'
  // The webhook topic for `customers/enable` events.
  | 'CUSTOMERS_ENABLE'
  // The webhook topic for `customers/update` events.
  | 'CUSTOMERS_UPDATE'
  // The webhook topic for `customer_groups/create` events.
  | 'CUSTOMER_GROUPS_CREATE'
  // The webhook topic for `customer_groups/delete` events.
  | 'CUSTOMER_GROUPS_DELETE'
  // The webhook topic for `customer_groups/update` events.
  | 'CUSTOMER_GROUPS_UPDATE'
  // The webhook topic for `customer_payment_methods/create` events.
  | 'CUSTOMER_PAYMENT_METHODS_CREATE'
  // The webhook topic for `customer_payment_methods/revoke` events.
  | 'CUSTOMER_PAYMENT_METHODS_REVOKE'
  // The webhook topic for `customer_payment_methods/update` events.
  | 'CUSTOMER_PAYMENT_METHODS_UPDATE'
  // The webhook topic for `disputes/create` events.
  | 'DISPUTES_CREATE'
  // The webhook topic for `disputes/update` events.
  | 'DISPUTES_UPDATE'
  // The webhook topic for `domains/create` events.
  | 'DOMAINS_CREATE'
  // The webhook topic for `domains/destroy` events.
  | 'DOMAINS_DESTROY'
  // The webhook topic for `domains/update` events.
  | 'DOMAINS_UPDATE'
  // The webhook topic for `draft_orders/create` events.
  | 'DRAFT_ORDERS_CREATE'
  // The webhook topic for `draft_orders/delete` events.
  | 'DRAFT_ORDERS_DELETE'
  // The webhook topic for `draft_orders/update` events.
  | 'DRAFT_ORDERS_UPDATE'
  // The webhook topic for `fulfillments/create` events.
  | 'FULFILLMENTS_CREATE'
  // The webhook topic for `fulfillments/update` events.
  | 'FULFILLMENTS_UPDATE'
  // The webhook topic for `fulfillment_events/create` events.
  | 'FULFILLMENT_EVENTS_CREATE'
  // The webhook topic for `fulfillment_events/delete` events.
  | 'FULFILLMENT_EVENTS_DELETE'
  // The webhook topic for `inventory_items/create` events.
  | 'INVENTORY_ITEMS_CREATE'
  // The webhook topic for `inventory_items/delete` events.
  | 'INVENTORY_ITEMS_DELETE'
  // The webhook topic for `inventory_items/update` events.
  | 'INVENTORY_ITEMS_UPDATE'
  // The webhook topic for `inventory_levels/connect` events.
  | 'INVENTORY_LEVELS_CONNECT'
  // The webhook topic for `inventory_levels/disconnect` events.
  | 'INVENTORY_LEVELS_DISCONNECT'
  // The webhook topic for `inventory_levels/update` events.
  | 'INVENTORY_LEVELS_UPDATE'
  // The webhook topic for `locales/create` events.
  | 'LOCALES_CREATE'
  // The webhook topic for `locales/update` events.
  | 'LOCALES_UPDATE'
  // The webhook topic for `locations/create` events.
  | 'LOCATIONS_CREATE'
  // The webhook topic for `locations/delete` events.
  | 'LOCATIONS_DELETE'
  // The webhook topic for `locations/update` events.
  | 'LOCATIONS_UPDATE'
  // The webhook topic for `orders/cancelled` events.
  | 'ORDERS_CANCELLED'
  // The webhook topic for `orders/create` events.
  | 'ORDERS_CREATE'
  // The webhook topic for `orders/delete` events.
  | 'ORDERS_DELETE'
  // The webhook topic for `orders/edited` events.
  | 'ORDERS_EDITED'
  // The webhook topic for `orders/fulfilled` events.
  | 'ORDERS_FULFILLED'
  // The webhook topic for `orders/paid` events.
  | 'ORDERS_PAID'
  // The webhook topic for `orders/partially_fulfilled` events.
  | 'ORDERS_PARTIALLY_FULFILLED'
  // The webhook topic for `orders/updated` events.
  | 'ORDERS_UPDATED'
  // The webhook topic for `order_transactions/create` events.
  | 'ORDER_TRANSACTIONS_CREATE'
  // The webhook topic for `products/create` events.
  | 'PRODUCTS_CREATE'
  // The webhook topic for `products/delete` events.
  | 'PRODUCTS_DELETE'
  // The webhook topic for `products/update` events.
  | 'PRODUCTS_UPDATE'
  // The webhook topic for `product_listings/add` events.
  | 'PRODUCT_LISTINGS_ADD'
  // The webhook topic for `product_listings/remove` events.
  | 'PRODUCT_LISTINGS_REMOVE'
  // The webhook topic for `product_listings/update` events.
  | 'PRODUCT_LISTINGS_UPDATE'
  // The webhook topic for `product_publications/create` events.
  | 'PRODUCT_PUBLICATIONS_CREATE'
  // The webhook topic for `product_publications/delete` events.
  | 'PRODUCT_PUBLICATIONS_DELETE'
  // The webhook topic for `product_publications/update` events.
  | 'PRODUCT_PUBLICATIONS_UPDATE'
  // The webhook topic for `profiles/create` events.
  | 'PROFILES_CREATE'
  // The webhook topic for `profiles/delete` events.
  | 'PROFILES_DELETE'
  // The webhook topic for `profiles/update` events.
  | 'PROFILES_UPDATE'
  // The webhook topic for `refunds/create` events.
  | 'REFUNDS_CREATE'
  // The webhook topic for `shipping_addresses/create` events.
  | 'SHIPPING_ADDRESSES_CREATE'
  // The webhook topic for `shipping_addresses/update` events.
  | 'SHIPPING_ADDRESSES_UPDATE'
  // The webhook topic for `shop/update` events.
  | 'SHOP_UPDATE'
  // The webhook topic for `subscription_billing_attempts/failure` events.
  | 'SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE'
  // The webhook topic for `subscription_billing_attempts/success` events.
  | 'SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS'
  // The webhook topic for `subscription_contracts/create` events.
  | 'SUBSCRIPTION_CONTRACTS_CREATE'
  // The webhook topic for `subscription_contracts/update` events.
  | 'SUBSCRIPTION_CONTRACTS_UPDATE'
  // The webhook topic for `tax_services/create` events.
  | 'TAX_SERVICES_CREATE'
  // The webhook topic for `tax_services/update` events.
  | 'TAX_SERVICES_UPDATE'
  // The webhook topic for `tender_transactions/create` events.
  | 'TENDER_TRANSACTIONS_CREATE'
  // The webhook topic for `themes/create` events.
  | 'THEMES_CREATE'
  // The webhook topic for `themes/delete` events.
  | 'THEMES_DELETE'
  // The webhook topic for `themes/publish` events.
  | 'THEMES_PUBLISH'
  // The webhook topic for `themes/update` events.
  | 'THEMES_UPDATE'
  // The webhook topic for `variants/in_stock` events.
  | 'VARIANTS_IN_STOCK'
  // The webhook topic for `variants/out_of_stock` events.
  | 'VARIANTS_OUT_OF_STOCK';


type WebhookHandlerFunction = (
  topic: string,
  shop_domain: string,
  body: string,
) => Promise<void>;

export interface RegisterOptions {
  // See https://shopify.dev/docs/admin-api/graphql/reference/events/webhooksubscriptiontopic for available topics
  topic: WebhookTopics;
  path: string;
  shop: string;
  accessToken: string;
  deliveryMethod?: DeliveryMethod;
}

export interface ShortenedRegisterOptions {
  // See https://shopify.dev/docs/admin-api/graphql/reference/events/webhooksubscriptiontopic for available topics
  shop: string;
  accessToken: string;
  deliveryMethod?: DeliveryMethod;
}

export interface RegisterReturn {
  [topic: string]: {
    success: boolean;
    result: unknown;
  };
}

export interface WebhookRegistryEntry {
  path: string;
  webhookHandler: WebhookHandlerFunction;
}

interface WebhookCheckResponseNode<
  T = {
    endpoint:
      | {
          __typename: 'WebhookHttpEndpoint';
          callbackUrl: string;
        }
      | {
          __typename: 'WebhookEventBridgeEndpoint';
          arn: string;
        }
      | {
          __typename: 'WebhookPubSubEndpoint';
          pubSubProject: string;
          pubSubTopic: string;
        };
  },
> {
  node: {
    id: string;
  } & T;
}

type WebhookCheckLegacyResponseNode = WebhookCheckResponseNode<{
  callbackUrl: string;
}>;

export interface WebhookCheckResponse<T = WebhookCheckResponseNode> {
  data: {
    webhookSubscriptions: {
      edges: T[];
    };
  };
}

export type WebhookCheckResponseLegacy =
  WebhookCheckResponse<WebhookCheckLegacyResponseNode>;
