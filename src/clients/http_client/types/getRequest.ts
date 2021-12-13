import { AccessScope, StorefrontAccessToken, Report, ApplicationCharge, ApplicationCredit, RecurringApplicationCharge, UsageCharge, Customer, Order, ShippingAddress, Address, CustomerSavedSearch, DeprecatedApiCalls, DiscountCode, DiscountCodeCreation, PriceRule, Event, Webhook, InventoryItem, InventoryLevel, Location, MarketingEvent, Metafield, Article, Asset, Blog, Comment, Page, Redirect, ScriptTag, Theme, Checkout, DraftOrder, Risk, Refund, Transaction, GiftCard, User, Collect, Collection, Product, CustomCollection, Image, Variant, ShippingRate, CollectionListing, MobilePlatformApplication, Payment, ResourceFeedback, ProductListing, FulfillmentOrder, CarrierService, Fulfillment, FulfillmentEvent, FulfillmentService, LocationsForMove, Balance, Dispute, Payout, ShopifyPaymentTransaction, Country, Currency, Policy, Province, ShippingZone, Shop, TenderTransaction } from "./root-types";

export type ReportId = number;
export type ApplicationChargeId = number;
export type ApplicationCreditId = number;
export type RecurringApplicationChargeId = number;
export type UsageChargeId = number;
export type CustomerId = number;
export type AddressId = number;
export type CustomerSavedSearchId = number;
export type PriceRuleId = number;
export type DiscountCodeId = number;
export type BatchId = number;
export type EventId = number;
export type WebhookId = number;
export type InventoryItemId = number;
export type LocationId = number;
export type MarketingEventId = number;
export type MetafieldId = number;
export type BlogId = number;
export type ArticleId = number;
export type ThemeId = number;
export type CommentId = number;
export type PageId = number;
export type RedirectId = number;
export type ScriptTagId = number;
export type DraftOrderId = number;
export type OrderId = number;
export type RiskId = number;
export type RefundId = number;
export type TransactionId = number;
export type GiftCardId = number;
export type UserId = number;
export type CollectId = number;
export type CollectionId = number;
export type CustomCollectionId = number;
export type ProductId = number;
export type ImageId = number;
export type VariantId = number;
export type SmartCollectionId = number;
export type Token = number;
export type CollectionListingId = number;
export type MobilePlatformApplicationId = number;
export type PaymentId = number;
export type ProductListingId = number;
export type CarrierServiceId = number;
export type FulfillmentId = number;
export type FulfillmentOrderId = number;
export type FulfillmentServiceId = number;
export type DisputeId = number;
export type PayoutId = number;
export type CountryId = number;
export type ProvinceId = number;

export type GetPaths =
  | {
      /** Retrieves a list of access scopes associated to the access token.  */
      path: `/admin/oauth/access_scopes`;
      response: {
        access_scopes: AccessScope;
      };
    }
  | {
      /** Retrieves a list of storefront access tokens that have been issued  */
      path: `storefront_access_tokens`;
      response: {
        storefront_access_tokens: StorefrontAccessToken;
      };
    }
  | {
      /** Retrieves a single report created by your app  */
      path: `reports/${ReportId}`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        report: Report;
      };
    }
  | {
      /** Retrieves a list of reports. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `reports`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
        /** A comma-separated list of report IDs. */
        ids?: string;
        /** The amount of results to return. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show reports last updated before date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Show reports last updated after date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        reports: Report;
      };
    }
  | {
      /** Retrieves an application charge  */
      path: `application_charges/${ApplicationChargeId}`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        application_charge: ApplicationCharge;
      };
    }
  | {
      /** Retrieves a list of application charges  */
      path: `application_charges`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
      };
      response: {
        application_charges: ApplicationCharge;
      };
    }
  | {
      /** Retrieves a single application credit  */
      path: `application_credits/${ApplicationCreditId}`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        application_credit: ApplicationCredit;
      };
    }
  | {
      /** Retrieves all application credits  */
      path: `application_credits`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        application_credits: ApplicationCredit;
      };
    }
  | {
      /** Retrieves a single charge  */
      path: `recurring_application_charges/${RecurringApplicationChargeId}`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        recurring_application_charge: RecurringApplicationCharge;
      };
    }
  | {
      /** Retrieves a list of recurring application charges  */
      path: `recurring_application_charges`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
      };
      response: {
        recurring_application_charges: RecurringApplicationCharge;
      };
    }
  | {
      /** Retrieves a single charge  */
      path: `recurring_application_charges/${RecurringApplicationChargeId}/usage_charges/${UsageChargeId}`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        usage_charge: UsageCharge;
      };
    }
  | {
      /** Retrieves a list of usage charges  */
      path: `recurring_application_charges/${RecurringApplicationChargeId}/usage_charges`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        usage_charges: UsageCharge;
      };
    }
  | {
      /** Retrieves a single customer.  */
      path: `customers/${CustomerId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        customer: Customer;
      };
    }
  | {
      /** Retrieves a count of all customers.  */
      path: `customers/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of customers. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `customers`;
      query: {
        /** Show customers created before a specified date.(format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Show customers created after a specified date.(format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Restrict results to customers specified by a comma-separated list of IDs. */
        ids?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Restrict results to those after the specified ID. */
        since_id?: string;
        /** Show customers last updated before a specified date.(format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Show customers last updated after a specified date.(format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        customers: Customer;
      };
    }
  | {
      /** Searches for customers that match a supplied query. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `customers/search`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Set the field and direction by which to order results. */
        order?: string;
        /** Text to search for in the shop's customer data. Note: Supported queries: accepts_marketing, activation_date, address1, address2, city, company, country, customer_date, customer_first_name, customer_id, customer_last_name, customer_tag, email, email_marketing_state, first_name, first_order_date, id, last_abandoned_order_date, last_name, multipass_identifier, orders_count, order_date, phone, province, shop_id, state, tag, total_spent, updated_at, verified_email, product_subscriber_status. All other queries returns all customers.  */
        query?: string;
      };
      response: {
        customers: Customer;
      };
    }
  | {
      /** Retrieves all orders belonging to a customer. The query string parameters that are available to the  Order resource are also available to this endpoint.  */
      path: `customers/${CustomerId}/orders`;
      response: {
        orders: Order;
      };
    }
  | {
      /** Retrieves details a single customer address.  */
      path: `customers/${CustomerId}/addresses/${AddressId}`;
      response: {
        customer_address: ShippingAddress;
      };
    }
  | {
      /** Retrieves a list of addresses for a customer. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `customers/${CustomerId}/addresses`;
      response: {
        addresses: Address;
      };
    }
  | {
      /** Retrieves a count of all customer saved searches.  */
      path: `customer_saved_searches/count`;
      query: {
        /** Restrict results to after the specified ID */
        since_id?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single customer saved search.  */
      path: `customer_saved_searches/${CustomerSavedSearchId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        customer_saved_search: CustomerSavedSearch;
      };
    }
  | {
      /** Retrieves a list of customer saved searches. Note: As of version 2019-07, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `customer_saved_searches`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
      };
      response: {
        customer_saved_searches: CustomerSavedSearch;
      };
    }
  | {
      /** Retrieves all customers returned by a customer saved search.  */
      path: `customer_saved_searches/${CustomerSavedSearchId}/customers`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Set the field and direction by which to order results. */
        order?: string;
      };
      response: {
        customers: Customer;
      };
    }
  | {
      /** Retrieves a list of deprecated API calls made by your private apps in the past 30 days.  */
      path: `deprecated_api_calls`;
      response: {
        data_updated_at?: Date;
        deprecated_api_calls: DeprecatedApiCalls;
      };
    }
  | {
      /** Retrieves a single discount code  */
      path: `price_rules/${PriceRuleId}/discount_codes/${DiscountCodeId}`;
      response: {
        discount_code: DiscountCode;
      };
    }
  | {
      /** Retrieves the location of a discount code.
      The discount code's location is returned in the location header, not in the DiscountCode object itself.
      Depending on your HTTP client, the location of the discount code might follow the location header automatically.  */
      path: `discount_codes/lookup`;
      query: {
        /** Retrieves the location of a discount code by code name. */
        code?: string;
      };
    }
  | {
      /** Retrieves a count of discount codes for a shop  */
      path: `discount_codes/count`;
      query: {
        /** Show discount codes with times used. */
        times_used?: string;
        /** Show discount codes used greater than or equal to this value. */
        times_used_max?: string;
        /** Show discount codes used less than or equal to this value. */
        times_used_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a discount code creation job  */
      path: `price_rules/${PriceRuleId}/batch/${BatchId}`;
      response: {
        discount_code_creation: DiscountCodeCreation;
      };
    }
  | {
      /** Retrieve a list of discount codes. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `price_rules/${PriceRuleId}/discount_codes`;
      response: {
        discount_codes: DiscountCode;
      };
    }
  | {
      /** Retrieves a list of discount codes for a discount code creation job.
      Discount codes that have been successfully created include a populated id field. Discount codes that
      encountered errors during the creation process include a populated errors field.  */
      path: `price_rules/${PriceRuleId}/batch/${BatchId}/discount_codes`;
      response: {
        discount_codes: DiscountCode;
      };
    }
  | {
      /** Retrieves a single price rule  */
      path: `price_rules/${PriceRuleId}`;
      response: {
        price_rule: PriceRule;
      };
    }
  | {
      /** Retrieves a count of all price rules.  */
      path: `price_rules/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of price rules. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `price_rules`;
      query: {
        /** Show price rules created before date (format 2017-03-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Show price rules created after date (format 2017-03-25T16:15:47-04:00). */
        created_at_min?: string;
        /** Show price rules ending before date (format 2017-03-25T16:15:47-04:00). */
        ends_at_max?: string;
        /** Show price rules ending after date (format 2017-03-25T16:15:47-04:00). */
        ends_at_min?: string;
        /** The maximum number of results to retrieve. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show price rules starting before date (format 2017-03-25T16:15:47-04:00). */
        starts_at_max?: string;
        /** Show price rules starting after date (format 2017-03-25T16:15:47-04:00). */
        starts_at_min?: string;
        /** Show price rules with times used. */
        times_used?: string;
        /** Show price rules last updated before date (format 2017-03-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Show price rules last updated after date (format 2017-03-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        price_rules: PriceRule;
      };
    }
  | {
      /** Retrieves a single event by its ID  */
      path: `events/${EventId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        event: Event;
      };
    }
  | {
      /** Retrieves a count of events  */
      path: `events/count`;
      query: {
        /** Count only events created at or before this date and time. (format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Count only events created at or after this date and time. (format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of events. Note: As of version 2019-07, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `events`;
      query: {
        /** Show events created at or before this date and time. (format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Show events created at or after this date and time. (format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Show events specified in this filter. */
        filter?: string;
        /** The number of results to show. */
        limit?: string;
        /** Show only results after the specified ID. */
        since_id?: string;
        /** Show events of a certain type. */
        verb?: string;
      };
      response: {
        events: Event;
      };
    }
  | {
      /** Retrieves a count of existing webhook subscriptions. The results can be filtered by address or by topic.  */
      path: `webhooks/count`;
      query: {
        /** Webhook subscriptions that send the POST request to this URI. */
        address?: string;
        /** The topic of the webhook subscriptions. For a list of valid values, refer to the topic property.  */
        topic?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single webhook subscription. The properties desired in the result can be specified.  */
      path: `webhooks/${WebhookId}`;
      query: {
        /** Comma-separated list of the properties you want returned for each item in the result list. Use this parameter to restrict the returned list of items to only those properties you specify. */
        fields?: string;
      };
      response: {
        webhook: Webhook;
      };
    }
  | {
      /** Retrieves a list of webhooks.  */
      path: `webhooks`;
      query: {
        /** Retrieve webhook subscriptions that send the POST request to this URI. */
        address?: string;
        /** Retrieve webhook subscriptions that were created before a given date and time (format: 2014-04-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Retrieve webhook subscriptions that were created after a given date and time (format: 2014-04-25T16:15:47-04:00). */
        created_at_min?: string;
        /** Comma-separated list of the properties you want returned for each item in the result list. Use this parameter to restrict the returned list of items to only those properties you specify. */
        fields?: string;
        /** Maximum number of webhook subscriptions that should be returned. Setting this parameter outside the maximum range will return an error. */
        limit?: string;
        /** Restrict the returned list to webhook subscriptions whose id is greater than the specified since_id. */
        since_id?: string;
        /** Show webhook subscriptions with a given topic.  For a list of valid values, refer to the topic property.>  */
        topic?: string;
        /** Retrieve webhooks that were updated after a given date and time (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Retrieve webhooks that were updated before a given date and time (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        webhooks: Webhook;
      };
    }
  | {
      /** Retrieves a single inventory item by ID  */
      path: `inventory_items/${InventoryItemId}`;
      response: {
        inventory_item: InventoryItem;
      };
    }
  | {
      /** Retrieves a list of inventory items. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `inventory_items`;
      query: {
        /** Show only inventory items specified by a comma-separated list of IDs. */
        ids?: string;
        /** The maximum number of results to show. */
        limit?: string;
      };
      response: {
        inventory_items: InventoryItem;
      };
    }
  | {
      /** Retrieves a list of inventory levels.
      You must include inventory_item_ids, location_ids, or both as filter parameters.
      Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `inventory_levels`;
      query: {
        /** A comma-separated list of inventory item IDs. */
        inventory_item_ids?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** A comma-separated list of location IDs. To find the ID of a location, use the Location resource. */
        location_ids?: string;
        /** Show inventory levels updated at or after date (format: 2019-03-19T01:21:44-04:00). */
        updated_at_min?: string;
      };
      response: {
        inventory_levels: InventoryLevel;
      };
    }
  | {
      /** Retrieves a single location by its ID  */
      path: `locations/${LocationId}`;
      response: {
        location: Location;
      };
    }
  | {
      /** Retrieves a count of locations  */
      path: `locations/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of locations  */
      path: `locations`;
      response: {
        locations: Location;
      };
    }
  | {
      /** Retrieves a list of inventory levels for a location. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `locations/${LocationId}/inventory_levels`;
      response: {
        inventory_levels: InventoryLevel;
      };
    }
  | {
      /** Retrieves a count of all marketing events  */
      path: `marketing_events/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single marketing event  */
      path: `marketing_events/${MarketingEventId}`;
      response: {
        marketing_event: MarketingEvent;
      };
    }
  | {
      /** Retrieves a list of all marketing events. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `marketing_events`;
      query: {
        /** The amount of results to return. */
        limit?: string;
        /** The number of marketing events to skip. */
        offset?: string;
      };
      response: {
        marketing_events: MarketingEvent;
      };
    }
  | {
      /** Retrieves a count of a resource's metafields.  */
      path: `metafields/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single metafield from a resource by its ID.  */
      path: `metafields/${MetafieldId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        metafield: Metafield;
      };
    }
  | {
      /** Retrieves a list of metafields that belong to a Product Image resource.  */
      path: `metafields`;
      query: {
        /** Retrieves a list of metafields by product image ID. */
        "metafield[owner_id]"?: string;
        /** Retrieves a list of metafields by the type of resource that metafield belongs to. */
        "metafield[owner_resource]"?: string;
      };
      response: {
        metafields: Metafield;
      };
    }
  | {
      /** Retrieves a count of all articles from a blog  */
      path: `blogs/${BlogId}/articles/count`;
      query: {
        /** Count articles created before date (format: 2014-04-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Count articles created after date (format: 2014-04-25T16:15:47-04:00). */
        created_at_min?: string;
        /** Count articles published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Count articles published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Count articles with a given published status. */
        published_status?: string;
        /** Count articles last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Count articles last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single article  */
      path: `blogs/${BlogId}/articles/${ArticleId}`;
      query: {
        /** Show only certain fields, specifed by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        article: Article;
      };
    }
  | {
      /** Retrieves a list of all articles from a blog. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `blogs/${BlogId}/articles`;
      query: {
        /** Filter articles by article author. */
        author?: string;
        /** Show articles created before date (format: 2014-04-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Show articles created after date (format: 2014-04-25T16:15:47-04:00). */
        created_at_min?: string;
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Retrieve an article with a specific handle. */
        handle?: string;
        /** The maximum number of results to retrieve. */
        limit?: string;
        /** Show articles published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Show articles published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Retrieve results based on their published status. */
        published_status?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Filter articles with a specific tag. */
        tag?: string;
        /** Show articles last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Show articles last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        articles: Article;
      };
    }
  | {
      /** Retrieves a list all of article authors  */
      path: `articles/authors`;
      response: {
        authors?: string;
      };
    }
  | {
      /** Retrieves a list of all the tags  */
      path: `articles/tags`;
      query: {
        /** The maximum number of tags to retrieve. */
        limit?: string;
        /** A flag for ordering retrieved tags. If present in the request, then the results will be ordered by popularity, starting with the most popular tag. */
        popular?: string;
      };
      response: {
        tags?: string;
      };
    }
  | {
      /** Retrieves a single asset for a theme by its key.
      To retrieve a single asset, include asset[key]=#{asset_key} as a request parameter. For example, to retrieve the asset with a key of templates/index.liquid, the request might be /admin/themes/828155753/assets.json?asset[key]=templates/index.liquid.
      For more information on the key property, see Asset properties.  */
      path: `themes/${ThemeId}/assets?asset[key]=templates/index.liquid`;
      query: {
        /** Retrieves a single asset for a theme by specifying the asset's key.  */
        "asset[key]"?: string;
        /** Show only certain fields, specified by a comma-separated list of field names */
        fields?: string;
      };
      response: {
        asset: Asset;
      };
    }
  | {
      /** Retrieves a list of assets for a theme. Listing theme assets returns only metadata about each asset. To get an asset's contents, you need to retrieve the asset individually.  */
      path: `themes/${ThemeId}/assets`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names */
        fields?: string;
      };
      response: {
        assets: Asset;
      };
    }
  | {
      /** Get a count of all blogs  */
      path: `blogs/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Get a single blog by its ID  */
      path: `blogs/${BlogId}`;
      query: {
        /** comma-separated list of fields to include in the response */
        fields?: string;
      };
      response: {
        blog: Blog;
      };
    }
  | {
      /** Retrieve a list of all blogs. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `blogs`;
      query: {
        /** comma-separated list of fields to include in the response */
        fields?: string;
        /** Filter by blog handle */
        handle?: string;
        /** The maximum number of results to retrieve. */
        limit?: string;
        /** Restrict results to after the specified ID */
        since_id?: string;
      };
      response: {
        blogs: Blog;
      };
    }
  | {
      /** Retrieves a count of comments  */
      path: `comments/count`;
      query: {
        /** Count comments created before date (format: 2014-04-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Count comments created after date (format: 2014-04-25T16:15:47-04:00). */
        created_at_min?: string;
        /** Count comments published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Count comments published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Retrieve a count of comments with a given published status. */
        published_status?: string;
        /** Retrieve a count of comments with a given status. */
        status?: string;
        /** Count comments last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Count comments last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single comment by its ID  */
      path: `comments/${CommentId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        comment: Comment;
      };
    }
  | {
      /** Retrieves a list of comments. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `comments`;
      query: {
        /** Show comments created before date (format: 2014-04-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Show comments created after date (format: 2014-04-25T16:15:47-04:00). */
        created_at_min?: string;
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to retrieve. */
        limit?: string;
        /** Show comments published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Show comments published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Filter results by their published status. */
        published_status?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Filter results by their status. */
        status?: string;
        /** Show comments last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Show comments last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        comments: Comment;
      };
    }
  | {
      /** Retrieves a page count.  */
      path: `pages/count`;
      query: {
        /** Count pages created before date (format: 2008-12-31). */
        created_at_max?: string;
        /** Count pages created after date (format: 2008-12-31). */
        created_at_min?: string;
        /** Show pages published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Show pages published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Count pages with a given published status: */
        published_status?: string;
        /** Count pages with a given title. */
        title?: string;
        /** Count pages last updated before date (format: 2008-12-31). */
        updated_at_max?: string;
        /** Count pages last updated after date (format: 2008-12-31). */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single page by its ID.  */
      path: `pages/${PageId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        page: Page;
      };
    }
  | {
      /** Retrieve a list of all pages. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `pages`;
      query: {
        /** Show pages created before date (format: 2008-12-31). */
        created_at_max?: string;
        /** Show pages created after date (format: 2008-12-31). */
        created_at_min?: string;
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Retrieve a page with a given handle. */
        handle?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Show pages published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Show pages published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Restrict results to pages with a given published status: */
        published_status?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Retrieve pages with a given title. */
        title?: string;
        /** Show pages last updated before date (format: 2008-12-31). */
        updated_at_max?: string;
        /** Show pages last updated after date (format: 2008-12-31). */
        updated_at_min?: string;
      };
      response: {
        pages: Page;
      };
    }
  | {
      /** Retrieves a count of URL redirects  */
      path: `redirects/count`;
      query: {
        /** Count redirects with given path. */
        path?: string;
        /** Count redirects with given target. */
        target?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single redirect  */
      path: `redirects/${RedirectId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        redirect: Redirect;
      };
    }
  | {
      /** Retrieves a list of URL redirects. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `redirects`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Show redirects with a given path. */
        path?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show redirects with a given target. */
        target?: string;
      };
      response: {
        redirects: Redirect;
      };
    }
  | {
      /** Retrieves a count of all script tags  */
      path: `script_tags/count`;
      query: {
        /** Count only script tags with a given URL. */
        src?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single script tag  */
      path: `script_tags/${ScriptTagId}`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        script_tag: ScriptTag;
      };
    }
  | {
      /** Retrieves a list of all script tags. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `script_tags`;
      query: {
        /** Show script tags created before this date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Show script tags created after this date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
        /** The number of results to return. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show script tags with this URL. */
        src?: string;
        /** Show script tags last updated before this date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Show script tags last updated after this date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        script_tags: ScriptTag;
      };
    }
  | {
      /** Retrieves a single theme.  */
      path: `themes/${ThemeId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        theme: Theme;
      };
    }
  | {
      /** Retrieves a list of themes.  */
      path: `themes`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        themes: Theme;
      };
    }
  | {
      /** Retrieves a count of checkouts from the past 90 days  */
      path: `checkouts/count`;
      query: {
        /** Count checkouts created before the specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Count checkouts created after the specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Count checkouts with a given status. */
        status?: string;
        /** Count checkouts last updated before the specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Count checkouts last updated after the specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of abandoned checkouts.  */
      path: `checkouts`;
      query: {
        /** Show checkouts created before the specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Show checkouts created after the specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show only checkouts with a given status. */
        status?: string;
        /** Show checkouts last updated before the specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Show checkouts last updated after the specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        checkouts: Checkout;
      };
    }
  | {
      /** Retrieves a specific draft order  */
      path: `draft_orders/${DraftOrderId}`;
      query: {
        /** A comma-separated list of fields to include in the response */
        fields?: string;
      };
      response: {
        draft_order: DraftOrder;
      };
    }
  | {
      /** Retrieves a count of draft orders  */
      path: `draft_orders/count`;
      query: {
        /** Count draft orders after the specified ID. */
        since_id?: string;
        /** Count draft orders that have a given status. */
        status?: string;
        /** Count draft orders last updated before the specified date (format: 2014-04-25T16:15:47-04:00).  */
        updated_at_max?: string;
        /** Count draft orders last updated after the specified date (format: 2014-04-25T16:15:47-04:00).  */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of draft orders. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `draft_orders`;
      query: {
        /** A comma-separated list of fields to include in the response */
        fields?: string;
        /** Filter by list of IDs */
        ids?: string;
        /** Amount of results */
        limit?: string;
        /** Restrict results to after the specified ID */
        since_id?: string;
        status?: string;
        /** Show orders last updated before date (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Show orders last updated after date (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        draft_orders: DraftOrder;
      };
    }
  | {
      /** Retrieve an order by specifying the ID. All fields of an order are returned unless specific fields are named.  */
      path: `orders/${OrderId}`;
      query: {
        /** Retrieve only certain fields, specified by a comma-separated list of fields names. */
        fields?: string;
      };
      response: {
        order: Order;
      };
    }
  | {
      /** Retrieve the total number of orders that meet the specified criteria.  */
      path: `orders/count`;
      query: {
        /** Orders created before date specified. */
        created_at_max?: string;
        /** Orders created after date specified. */
        created_at_min?: string;
        /** Orders of a given financial status. */
        financial_status?: string;
        /** Orders of a given fulfillment status. */
        fulfillment_status?: string;
        /** Orders of a given status. */
        status?: string;
        /** Orders last updated before date specified. */
        updated_at_max?: string;
        /** Orders last updated after date specified. */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of orders that meet the specified criteria. Usage notes: This endpoint implements pagination by using links that are provided in the response header. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `orders`;
      query: {
        /** Show orders attributed to a certain app, specified by the app ID. Set as current to show orders for the app currently consuming the API. */
        attribution_app_id?: string;
        /** Show orders created at or before date. */
        created_at_max?: string;
        /** Show orders created at or after date. */
        created_at_min?: string;
        /** Retrieve only certain fields, specified by a comma-separated list of fields names. */
        fields?: string;
        /** Filter orders by their financial status. */
        financial_status?: string;
        /** Filter orders by their fulfillment status. */
        fulfillment_status?: string;
        /** Retrieve only orders specified by a comma-separated list of order IDs. */
        ids?: string;
        /** The maximum number of results to show on a page. */
        limit?: string;
        /** Show orders imported at or before date. */
        processed_at_max?: string;
        /** Show orders imported at or after date. */
        processed_at_min?: string;
        /** Show orders after the specified ID. */
        since_id?: string;
        /** Filter orders by their status. */
        status?: string;
        /** Show orders last updated at or before date. */
        updated_at_max?: string;
        /** Show orders last updated at or after date. */
        updated_at_min?: string;
      };
      response: {
        orders: Order;
      };
    }
  | {
      /** Retrieves a single order risk by its ID  */
      path: `orders/${OrderId}/risks/${RiskId}`;
      response: {
        risk: Risk;
      };
    }
  | {
      /** Retrieves a list of all order risks for an order. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `orders/${OrderId}/risks`;
      response: {
        risks: Risk;
      };
    }
  | {
      /** Retrieves a specific refund.  */
      path: `orders/${OrderId}/refunds/${RefundId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Show amounts in the shop currency for the underlying transaction. */
        in_shop_currency?: string;
      };
      response: {
        refund: Refund;
      };
    }
  | {
      /** Retrieves a list of refunds for an order. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `orders/${OrderId}/refunds`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Show amounts in the shop currency for the underlying transaction. */
        in_shop_currency?: string;
        /** The maximum number of results to retrieve. */
        limit?: string;
      };
      response: {
        refunds: Refund;
      };
    }
  | {
      /** Retrieves a count of an order's transactions.  */
      path: `orders/${OrderId}/transactions/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a specific transaction.
      Transactions attached to multi-currency orders are in the presentment currency by default. To retrieve transactions in the shop currency, include the URL parameter in_shop_currency=true.
      extended_authorization_attributes are available on this endpoint only to stores on the Shopify Plus plan that use Shopify Payments. To learn more about extended authorization periods, refer to Payment authorization.  */
      path: `orders/${OrderId}/transactions/${TransactionId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Show amounts in the shop currency. */
        in_shop_currency?: string;
      };
      response: {
        transaction: Transaction;
      };
    }
  | {
      /** Retrieves a list of transactions.
      Transactions attached to multi-currency orders are in the presentment currency by default. To retrieve transactions in the shop currency, include the URL parameter in_shop_currency=true.  */
      path: `orders/${OrderId}/transactions`;
      query: {
        /** Show only certain fields, specifed by a comma-separated list of fields names. */
        fields?: string;
        /** Show amounts in the shop currency. */
        in_shop_currency?: string;
        /** Retrieve only transactions after the specified ID. */
        since_id?: string;
      };
      response: {
        transactions: Transaction;
      };
    }
  | {
      /** Retrieves a single gift card by its ID  */
      path: `gift_cards/${GiftCardId}`;
      response: {
        gift_card: GiftCard;
      };
    }
  | {
      /** Retrieves a count of gift cards  */
      path: `gift_cards/count`;
      query: {
        /** Count gift cards with a given status. Valid values: */
        status?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of gift cards. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `gift_cards`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Retrieve gift cards with a given status. Valid values: */
        status?: string;
      };
      response: {
        gift_cards: GiftCard;
      };
    }
  | {
      /** Searches for gift cards that match a supplied query. The following fields are indexed by search:
      created_at
      updated_at
      disabled_at
      balance
      initial_value
      amount_spent
      email
      last_characters
      Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `gift_cards/search`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to retrieve. */
        limit?: string;
        /** The field and direction to order results by. */
        order?: string;
        /** The text to search for. */
        query?: string;
      };
      response: {
        gift_cards: GiftCard;
      };
    }
  | {
      /** Retrieves a single user  */
      path: `users/${UserId}`;
      response: {
        user: User;
      };
    }
  | {
      /** Retrieves information about the user account associated with the access token used to make this API request. This request works only when the access token was created for a specific user of the shop.  */
      path: `users/current`;
      response: {
        user: User;
      };
    }
  | {
      /** Retrieves a list of all users. Note: As of version 2021-01, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `users`;
      query: {
        /** The maximum number of results to show on a page. */
        limit?: string;
        /** A unique ID used to access a certain page of results. */
        page_info?: string;
      };
      response: {
        users: User;
      };
    }
  | {
      /** Retrieves a specific collect by its ID.  */
      path: `collects/${CollectId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        collect: Collect;
      };
    }
  | {
      /** Retrieves a count of collects.  */
      path: `collects/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of collects. Note: As of version 2019-07, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `collects`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** The maximum number of results to show. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
      };
      response: {
        collects: Collect;
      };
    }
  | {
      /** Retrieves a single collection  */
      path: `collections/${CollectionId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        collection: Collection;
      };
    }
  | {
      /** Retrieve a list of products belonging to a collection. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.. The products returned are sorted by the collection's sort order.  */
      path: `collections/${CollectionId}/products`;
      query: {
        /** The number of products to retrieve. */
        limit?: string;
      };
      response: {
        products: Product;
      };
    }
  | {
      /** Retrieves a count of custom collections  */
      path: `custom_collections/count`;
      query: {
        /** Count custom collections that include a given product. */
        product_id?: string;
        /** Count custom collections published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Count custom collections published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Count custom collections with a given published status. */
        published_status?: string;
        /** Count custom collections with given title. */
        title?: string;
        /** Count custom collections last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Count custom collections last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single custom collection  */
      path: `custom_collections/${CustomCollectionId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        custom_collection: CustomCollection;
      };
    }
  | {
      /** Retrieves a list of custom collections. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `custom_collections`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Filter by custom collection handle. */
        handle?: string;
        /** Show only collections specified by a comma-separated list of IDs. */
        ids?: string;
        /** The maximum number of results to retrieve. */
        limit?: string;
        /** Show custom collections that include a given product. */
        product_id?: string;
        /** Show custom collections published before date (format: 2014-04-25T16:15:47-04:00). */
        published_at_max?: string;
        /** Show custom collections published after date (format: 2014-04-25T16:15:47-04:00). */
        published_at_min?: string;
        /** Show custom collectsion with a given published status. */
        published_status?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show custom collections with a given title. */
        title?: string;
        /** Show custom collections last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Show custom collections last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        custom_collections: CustomCollection;
      };
    }
  | {
      /** Retrieve a count of products.  */
      path: `products/count`;
      query: {
        /** Return products by product collection ID. */
        collection_id?: string;
        /** Return products created before a specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Return products created after a specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
        /** Return products by product type. */
        product_type?: string;
        /** Return products published before a specified date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_max?: string;
        /** Return products published after a specified date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_min?: string;
        /** Return products by their published status. */
        published_status?: string;
        /** Return products last updated before a specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Return products last updated after a specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
        /** Return products by product vendor. */
        vendor?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieve a single product.  */
      path: `products/${ProductId}`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        product: Product;
      };
    }
  | {
      /** Retrieve a list of products.  */
      path: `products`;
      query: {
        /** Return products by product collection ID. */
        collection_id?: string;
        /** Return products created before a specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_max?: string;
        /** Return products created after a specified date. (format: 2014-04-25T16:15:47-04:00) */
        created_at_min?: string;
        /** Return only certain fields specified by a comma-separated list of field names. */
        fields?: string;
        /** Return only products specified by a comma-separated list of product handles. */
        handle?: string;
        /** Return only products specified by a comma-separated list of product IDs. */
        ids?: string;
        /** Return up to this many results per page. */
        limit?: string;
        /** Return presentment prices in only certain currencies, specified by a comma-separated list of ISO 4217 currency codes. */
        presentment_currencies?: string;
        /** Return products by product type. */
        product_type?: string;
        /** Return products published before a specified date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_max?: string;
        /** Return products published after a specified date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_min?: string;
        /** Return products by their published status. */
        published_status?: string;
        /** Return only products after the specified ID. */
        since_id?: string;
        /** Return only products specified by a comma-separated list of statuses. */
        status?: string;
        /** Return products by product title. */
        title?: string;
        /** Return products last updated before a specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Return products last updated after a specified date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
        /** Return products by product vendor. */
        vendor?: string;
      };
      response: {
        products: Product;
      };
    }
  | {
      /** Get a count of all product images  */
      path: `products/${ProductId}/images/count`;
      query: {
        /** Restrict results to after the specified ID */
        since_id?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Get a single product image by id  */
      path: `products/${ProductId}/images/${ImageId}`;
      query: {
        /** comma-separated list of fields to include in the response */
        fields?: string;
      };
      response: {
        image: Image;
      };
    }
  | {
      /** Get all product images  */
      path: `products/${ProductId}/images`;
      query: {
        /** comma-separated list of fields to include in the response */
        fields?: string;
        /** Restrict results to after the specified ID */
        since_id?: string;
      };
      response: {
        images: Image;
      };
    }
  | {
      /** Retrieves a count of product variants  */
      path: `products/${ProductId}/variants/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single product variant by ID  */
      path: `variants/${VariantId}`;
      query: {
        /** A comma-separated list of fields to include in the response */
        fields?: string;
      };
      response: {
        variant: Variant;
      };
    }
  | {
      /** Retrieves a list of product variants. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `products/${ProductId}/variants`;
      query: {
        /** A comma-separated list of fields to include in the response */
        fields?: string;
        /** Return up to this many results per page */
        limit?: string;
        /** Return presentment prices in only certain currencies, specified by a comma-separated list of ISO 4217 currency codes. */
        presentment_currencies?: string;
        /** Restrict results to after the specified ID */
        since_id?: string;
      };
      response: {
        variants: Variant;
      };
    }
  | {
      /** Retrieves a count of smart collections  */
      path: `smart_collections/count`;
      query: {
        /** Show smart collections that include the specified product. */
        product_id?: string;
        /** Show smart collections published before this date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_max?: string;
        /** Show smart collections published after this date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_min?: string;
        /** Filter results based on the published status of smart collections. */
        published_status?: string;
        /** Show smart collections with the specified title. */
        title?: string;
        /** Show smart collections last updated before this date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Show smart collections last updated after this date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single smart collection  */
      path: `smart_collections/${SmartCollectionId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        smart_collection: Collection;
      };
    }
  | {
      /** Retrieves a list of smart collections. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `smart_collections`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Filter results by smart collection handle. */
        handle?: string;
        /** Show only the smart collections specified by a comma-separated list of IDs. */
        ids?: string;
        /** The number of results to show. */
        limit?: string;
        /** Show smart collections that includes the specified product. */
        product_id?: string;
        /** Show smart collections published before this date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_max?: string;
        /** Show smart collections published after this date. (format: 2014-04-25T16:15:47-04:00) */
        published_at_min?: string;
        /** Filter results based on the published status of smart collections. */
        published_status?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show smart collections with the specified title. */
        title?: string;
        /** Show smart collections last updated before this date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_max?: string;
        /** Show smart collections last updated after this date. (format: 2014-04-25T16:15:47-04:00) */
        updated_at_min?: string;
      };
      response: {
        smart_collections: Collection;
      };
    }
  | {
      /** Retrieves a checkout  */
      path: `checkouts/${Token}`;
      response: {
        checkout: Checkout;
      };
    }
  | {
      /** Retrieves a list of available shipping rates for the specified checkout. Implementers need to poll this endpoint until rates become available.
      Each shipping rate contains the checkout's new subtotal price, total tax, and total price in the event that this shipping rate is selected. This can be used to update the UI without performing further API requests.
      To apply a shipping rate, update the checkout's shipping line with the handle of the selected rate.  */
      path: `checkouts/${Token}/shipping_rates`;
      response: {
        shipping_rates: ShippingRate;
      };
    }
  | {
      /** Retrieve a specific collection listing that is published to your app  */
      path: `collection_listings/${CollectionListingId}`;
      response: {
        collection_listing: CollectionListing;
      };
    }
  | {
      /** Retrieve collection listings that are published to your app. Note: As of version 2019-07, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `collection_listings`;
      query: {
        /** Amount of results */
        limit?: string;
      };
      response: {
        collection_listings: CollectionListing;
      };
    }
  | {
      /** Retrieve product_ids that are published to a collection_id.       Note: As of version 2019-07, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `collection_listings/${CollectionListingId}/product_ids`;
      query: {
        /** Amount of results */
        limit?: string;
      };
      response: {
        product_ids?: number;
      };
    }
  | {
      /** Get a mobile platform application  */
      path: `mobile_platform_applications/${MobilePlatformApplicationId}`;
      response: {
        mobile_platform_application: MobilePlatformApplication;
      };
    }
  | {
      /** List the mobile platform applications  */
      path: `mobile_platform_applications`;
      response: {
        mobile_platform_applications: MobilePlatformApplication;
      };
    }
  | {
      /** Retrieves the payment information for an existing payment  */
      path: `checkouts/${Token}/payments/${PaymentId}`;
      response: {
        payment: Payment;
      };
    }
  | {
      /** Counts the number of payments attempted on a checkout  */
      path: `checkouts/${Token}/payments/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a list of payments on a particular checkout  */
      path: `checkouts/${Token}/payments`;
      response: {
        payments: Payment;
      };
    }
  | {
      /** Retrieve all product feedback from your app associated with the product.  */
      path: `products/${ProductId}/resource_feedback`;
      query: {
        /** Retrieve feedback for a specific product, by product id. */
        product_id?: string;
      };
      response: {
        resource_feedback: ResourceFeedback;
      };
    }
  | {
      /** Retrieve a count of products that are published to your app  */
      path: `product_listings/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieve a specific product listing that is published to your app  */
      path: `product_listings/${ProductListingId}`;
      response: {
        product_listing: ProductListing;
      };
    }
  | {
      /** Retrieve product listings that are published to your app. Note: As of version 2019-07, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `product_listings`;
      query: {
        /** Filter by products belonging to a particular collection */
        collection_id?: string;
        /** Filter by product handle */
        handle?: string;
        /** Amount of results */
        limit?: string;
        /** A comma-separated list of product ids */
        product_ids?: string;
        /** Filter by product listings last updated after a certain date and time (formatted in ISO 8601) */
        updated_at_min?: string;
      };
      response: {
        product_listings: ProductListing;
      };
    }
  | {
      /** Retrieve product_ids that are published to your app. Maximum 1,000 results per page.  */
      path: `product_listings/product_ids`;
      query: {
        /** Amount of results */
        limit?: string;
      };
      response: {
        product_ids?: number;
      };
    }
  | {
      /** Returns a list (zero or one) of resource feedback objects.
      Important
      Note that ids are not returned as part of this request. Records are immutable except when POST replaces them.
        */
      path: `resource_feedback`;
      response: {
        resource_feedback: ResourceFeedback;
      };
    }
  | {
      /** Retrieves a list of fulfillment orders on a shop for a specific app.  */
      path: `assigned_fulfillment_orders`;
      query: {
        /** The assigment status of the fulfillment orders that should be returned: */
        assignment_status?: string;
        /** The IDs of the assigned locations of the fulfillment orders that should be returned. */
        location_ids?: string;
      };
      response: {
        fulfillment_orders: FulfillmentOrder;
      };
    }
  | {
      /** Retrieves a single carrier service by its ID  */
      path: `carrier_services/${CarrierServiceId}`;
      response: {
        carrier_service: CarrierService;
      };
    }
  | {
      /** Retrieves a list of carrier services  */
      path: `carrier_services`;
      response: {
        carrier_services: CarrierService;
      };
    }
  | {
      /** Retrieves a count of fulfillments associated with a specific order  */
      path: `orders/${OrderId}/fulfillments/count`;
      query: {
        /** Count fulfillments created before date (format: 2014-04-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Count fulfillments created after date (format: 2014-04-25T16:15:47-04:00). */
        created_at_min?: string;
        /** Count fulfillments last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Count fulfillments last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieve a specific fulfillment  */
      path: `orders/${OrderId}/fulfillments/${FulfillmentId}`;
      query: {
        /** Comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        fulfillment: Fulfillment;
      };
    }
  | {
      /** Retrieves fulfillments associated with an order. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `orders/${OrderId}/fulfillments`;
      query: {
        /** Show fulfillments created before date (format: 2014-04-25T16:15:47-04:00). */
        created_at_max?: string;
        /** Show fulfillments created after date (format: 2014-04-25T16:15:47-04:00). */
        created_at_min?: string;
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
        /** Limit the amount of results. */
        limit?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
        /** Show fulfillments last updated before date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_max?: string;
        /** Show fulfillments last updated after date (format: 2014-04-25T16:15:47-04:00). */
        updated_at_min?: string;
      };
      response: {
        fulfillments: Fulfillment;
      };
    }
  | {
      /** Retrieves fulfillments associated with a fulfillment order.  */
      path: `fulfillment_orders/${FulfillmentOrderId}/fulfillments`;
      query: {
        /** The ID of the fulfillment order that is associated with the fulfillments. */
        fulfillment_order_id?: string;
      };
      response: {
        fulfillments: Fulfillment;
      };
    }
  | {
      /** Retrieves a specific fulfillment event  */
      path: `orders/${OrderId}/fulfillments/${FulfillmentId}/events/${EventId}`;
      query: {
        /** The ID of the fulfillment event. */
        event_id?: string;
      };
      response: {
        fulfillment_event: FulfillmentEvent;
      };
    }
  | {
      /** Retrieves a list of fulfillment events for a specific fulfillment  */
      path: `orders/${OrderId}/fulfillments/${FulfillmentId}/events`;
      query: {
        /** The ID of the fulfillment that's associated with the fulfillment event. */
        fulfillment_id?: string;
        /** The ID of the order that's associated with the fulfillment event. */
        order_id?: string;
      };
      response: {
        fulfillment_events: FulfillmentEvent;
      };
    }
  | {
      /** Retrieves a specific fulfillment order.  */
      path: `fulfillment_orders/${FulfillmentOrderId}`;
      response: {
        fulfillment_order: FulfillmentOrder;
      };
    }
  | {
      /** Retrieves a list of fulfillment orders for a specific order.  */
      path: `orders/${OrderId}/fulfillment_orders`;
      query: {
        /** The ID of the order that is associated with the fulfillment orders. */
        order_id?: string;
      };
      response: {
        fulfillment_orders: FulfillmentOrder;
      };
    }
  | {
      path: `fulfillment_services/${FulfillmentServiceId}`;
      response: {
        fulfillment_service: FulfillmentService;
      };
    }
  | {
      path: `fulfillment_services`;
      query: {
        scope?: string;
      };
      response: {
        fulfillment_services: FulfillmentService;
      };
    }
  | {
      /** Retrieves a list of locations that a fulfillment order can potentially move to.
      The resulting list is sorted alphabetically in ascending order by location name.  */
      path: `fulfillment_orders/${FulfillmentOrderId}/locations_for_move`;
      query: {
        /** The ID of the fulfillment order. */
        fulfillment_order_id?: string;
      };
      response: {
        locations_for_move: LocationsForMove;
      };
    }
  | {
      /** Retrieves the account's current balance.  */
      path: `shopify_payments/balance`;
      response: {
        balance: Balance;
      };
    }
  | {
      /** Retrieves a single dispute by ID.  */
      path: `shopify_payments/disputes/${DisputeId}`;
      response: {
        dispute: Dispute;
      };
    }
  | {
      /** Retrieve all disputes ordered by initiated_at date and time (ISO 8601 format), with the most recent being first.
      Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `shopify_payments/disputes`;
      query: {
        /** Return only disputes with the specified initiated_at date (ISO 8601 format). */
        initiated_at?: string;
        /** Return only disputes before the specified ID. */
        last_id?: string;
        /** Return only disputes after the specified ID. */
        since_id?: string;
        /** Return only disputes with the specified status. */
        status?: string;
      };
      response: {
        disputes: Dispute;
      };
    }
  | {
      /** Retrieves a single payout by id.  */
      path: `shopify_payments/payouts/${PayoutId}`;
      response: {
        payout: Payout;
      };
    }
  | {
      /** Retrieves a list of all payouts ordered by payout date, with the most recent being first.
      Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `shopify_payments/payouts`;
      query: {
        /** Filter the response to payouts made on the specified date. */
        date?: string;
        /** Filter the response to payouts made inclusively before the specified date. */
        date_max?: string;
        /** Filter the response to payouts made inclusively after the specified date. */
        date_min?: string;
        /** Filter the response to payouts made before the specified ID. */
        last_id?: string;
        /** Filter the response to payouts made after the specified ID. */
        since_id?: string;
        /** Filter the response to payouts made with the specified status. */
        status?: string;
      };
      response: {
        payouts: Payout;
      };
    }
  | {
      /** Retrieves a list of all balance transactions ordered by processing
      time, with the most recent being first.
      Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. Sending the page parameter will return an error. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `shopify_payments/balance/transactions`;
      query: {
        /** Filter response to transactions exclusively before the specified ID */
        last_id?: string;
        /** Filter response to transactions paid out in the specified payout. */
        payout_id?: string;
        /** Filter response to transactions with the specified payout status */
        payout_status?: string;
        /** Filter response to transactions exclusively after the specified ID. */
        since_id?: string;
        /** Filter response to transactions placed in test mode. */
        test?: string;
      };
      response: {
        shopify_payment_transactions: ShopifyPaymentTransaction;
      };
    }
  | {
      /** Retrieves a count of countries.  */
      path: `countries/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a specific county.  */
      path: `countries/${CountryId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        country: Country;
      };
    }
  | {
      /** Retrieves a list of countries.  */
      path: `countries`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
      };
      response: {
        countries: Country;
      };
    }
  | {
      /** Retrieves a list of currencies enabled on a shop  */
      path: `currencies`;
      response: {
        currencies: Currency;
      };
    }
  | {
      /** Retrieves a list of the shop's policies  */
      path: `policies`;
      response: {
        policies: Policy;
      };
    }
  | {
      /** Retrieves a count of provinces for a country  */
      path: `countries/${CountryId}/provinces/count`;
      response: {
        count?: number;
      };
    }
  | {
      /** Retrieves a single province for a country  */
      path: `countries/${CountryId}/provinces/${ProvinceId}`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of field names. */
        fields?: string;
      };
      response: {
        province: Province;
      };
    }
  | {
      /** Retrieves a list of provinces  */
      path: `countries/${CountryId}/provinces`;
      query: {
        /** Show only certain fields, specified by a comma-separated list of fields names. */
        fields?: string;
        /** Restrict results to after the specified ID. */
        since_id?: string;
      };
      response: {
        provinces: Province;
      };
    }
  | {
      /** Get a list of all shipping zones  */
      path: `shipping_zones`;
      query: {
        /** comma-separated list of fields to include in the response */
        fields?: string;
      };
      response: {
        shipping_zones: ShippingZone;
      };
    }
  | {
      /** Retrieves the shop's configuration  */
      path: `shop`;
      query: {
        /** A comma-separated list of fields to include in the response. */
        fields?: string;
      };
      response: {
        shop: Shop;
      };
    }
  | {
      /** Retrieves a list of tender transactions. Note: As of version 2019-10, this endpoint implements pagination by using links that are provided in the response header. To learn more, see Making requests to paginated REST Admin API endpoints.  */
      path: `tender_transactions`;
      query: {
        /** The maximum number of results to retrieve. */
        limit?: string;
        /** Show tender transactions ordered by processed_at in ascending or descending order. */
        order?: string;
        /** Show tender transactions processed at the specified date. */
        processed_at?: string;
        /** Show tender transactions processed_at or before the specified date. */
        processed_at_max?: string;
        /** Show tender transactions processed_at or after the specified date. */
        processed_at_min?: string;
        /** Retrieve only transactions after the specified ID. */
        since_id?: string;
      };
      response: {
        tender_transactions: TenderTransaction;
      };
    };
