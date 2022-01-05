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
      /** Deletes a customer. A customer can't be deleted if they have existing orders.  */
      path: `customers/${CustomerId}`;
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
      path: `customers/search?query=Bob country:United States`;
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
