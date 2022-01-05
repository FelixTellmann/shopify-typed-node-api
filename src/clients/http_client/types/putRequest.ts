import { Report, RecurringApplicationCharge, Customer, Address, ShippingAddress, CustomerSavedSearch, DiscountCode, PriceRule, Webhook, InventoryItem, MarketingEvent, Metafield, Article, Asset, Blog, Comment, Page, Redirect, ScriptTag, Theme, DraftOrder, Order, Risk, GiftCard, CustomCollection, Product, Image, Variant, Collection, Checkout, CollectionListing, MobilePlatformApplication, ProductListing, CarrierService, Fulfillment, FulfillmentService, Country, Province } from "./root-types";

export type ReportId = number;
export type RecurringApplicationChargeId = number;
export type CustomerId = number;
export type AddressId = number;
export type CustomerSavedSearchId = number;
export type PriceRuleId = number;
export type DiscountCodeId = number;
export type WebhookId = number;
export type InventoryItemId = number;
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
export type GiftCardId = number;
export type CustomCollectionId = number;
export type ProductId = number;
export type ImageId = number;
export type VariantId = number;
export type SmartCollectionId = number;
export type Token = number;
export type CollectionListingId = number;
export type MobilePlatformApplicationId = number;
export type ProductListingId = number;
export type CarrierServiceId = number;
export type FulfillmentId = number;
export type FulfillmentServiceId = number;
export type CountryId = number;
export type ProvinceId = number;


export type PutPaths =
  | {
      /** Updates a report  */
      path: `reports/${ReportId}`;
      body: {
        report: Omit<Report, "admin_graphql_api_id">;
      };
      response: {
        report: Report;
      };
    }
  | {
      /** Updates the capped amount of an active recurring application charge  */
      path: `recurring_application_charges/${RecurringApplicationChargeId}/customize`;
      response: {
        recurring_application_charge: RecurringApplicationCharge;
      };
    }
  | {
      /** Updates a customer.  */
      path: `customers/${CustomerId}`;
      body: {
        customer: Omit<Customer, "admin_graphql_api_id" | "currency" | "created_at" | "default_address" | "last_order_id" | "last_order_name" | "orders_count" | "state" | "total_spent" | "updated_at" | "verified_email">;
      };
      response: {
        customer: Customer;
      };
    }
  | {
      /** Updates an existing customer address.  */
      path: `customers/${CustomerId}/addresses/${AddressId}`;
      body: {
        address: Address;
      };
      response: {
        customer_address: ShippingAddress;
      };
    }
  | {
      /** Performs bulk operations for multiple customer addresses.  */
      path: `customers/${CustomerId}/addresses/set`;
      query: {
        /** Performs bulk operations for customer addresses specified by a comma-separated list of IDs. */
        "address_ids[]"?: string;
        /** Operation to perform by keyword (for example, destroy) */
        operation?: string;
      };
    }
  | {
      /** Sets the default address for a customer.  */
      path: `customers/${CustomerId}/addresses/${AddressId}/default`;
      response: {
        customer_address: ShippingAddress;
      };
    }
  | {
      /** Updates a customer saved search.  */
      path: `customer_saved_searches/${CustomerSavedSearchId}`;
      body: {
        customer_saved_search: Omit<CustomerSavedSearch, "admin_graphql_api_id" | "created_at" | "id" | "updated_at">;
      };
      response: {
        customer_saved_search: CustomerSavedSearch;
      };
    }
  | {
      /** Updates an existing discount code  */
      path: `price_rules/${PriceRuleId}/discount_codes/${DiscountCodeId}`;
      body: {
        discount_code: Omit<DiscountCode, "admin_graphql_api_id" | "created_at" | "updated_at" | "id" | "price_rule_id" | "usage_count" | "code"> & Required<Pick<DiscountCode, "code">>;
      };
      response: {
        discount_code: DiscountCode;
      };
    }
  | {
      /** Updates an existing a price rule  */
      path: `price_rules/${PriceRuleId}`;
      body: {
        price_rule: Omit<PriceRule, "admin_graphql_api_id" | "created_at" | "updated_at" | "id">;
      };
      response: {
        price_rule: PriceRule;
      };
    }
  | {
      /** Update a webhook subscription's topic or address URIs  */
      path: `webhooks/${WebhookId}`;
      body: {
        webhook: Omit<Webhook, "admin_graphql_api_id" | "api_version" | "created_at" | "id" | "updated_at" | "address" | "topic"> & Required<Pick<Webhook, "address" | "topic">>;
      };
      response: {
        webhook: Webhook;
      };
    }
  | {
      /** Updates an existing inventory item  */
      path: `inventory_items/${InventoryItemId}`;
      body: {
        inventory_item: Omit<InventoryItem, "admin_graphql_api_id" | "created_at" | "id" | "updated_at">;
      };
      response: {
        inventory_item: InventoryItem;
      };
    }
  | {
      /** Updates a marketing event  */
      path: `marketing_events/${MarketingEventId}`;
      body: {
        marketing_event: Omit<MarketingEvent, "admin_graphql_api_id" | "event_type" | "marketing_channel" | "paid" | "started_at"> & Required<Pick<MarketingEvent, "event_type" | "marketing_channel" | "paid" | "started_at">>;
      };
      response: {
        marketing_event: MarketingEvent;
      };
    }
  | {
      /** Updates a metafield.  */
      path: `metafields/${MetafieldId}`;
      body: {
        metafield: Omit<Metafield, "admin_graphql_api_id" | "created_at" | "updated_at" | "id" | "key" | "namespace" | "value"> & Required<Pick<Metafield, "key" | "namespace" | "value">>;
      };
      response: {
        metafield: Metafield;
      };
    }
  | {
      path: `blogs/${BlogId}/articles/${ArticleId}`;
      body: {
        article: Omit<Article, "admin_graphql_api_id" | "created_at" | "id" | "updated_at" | "user_id">;
      };
      response: {
        article: Article;
      };
    }
  | {
      /** Creates or updates an asset for a theme.
      In the PUT request, you can include the src or source_key property to create the asset from an existing file.  */
      path: `themes/${ThemeId}/assets`;
      query: {
        /** The path within the theme to an existing asset. Include in the body of the PUT request to create a duplicate asset. */
        source_key?: string;
        /** The source URL of an image. Include in the body of the PUT request to upload the image to Shopify. */
        src?: string;
      };
      body: {
        asset: Omit<Asset, "admin_graphql_api_id" | "checksum" | "content_type" | "created_at" | "public_url" | "size" | "theme_id" | "updated_at">;
      };
      response: {
        asset: Asset;
      };
    }
  | {
      /** Update a blog  */
      path: `blogs/${BlogId}`;
      body: {
        blog: Omit<Blog, "admin_graphql_api_id" | "created_at" | "id" | "tags" | "updated_at" | "admin_graphql_api_id">;
      };
      response: {
        blog: Blog;
      };
    }
  | {
      /** Updates a comment of an article  */
      path: `comments/${CommentId}`;
      body: {
        comment: Omit<Comment, "admin_graphql_api_id" | "created_at" | "id" | "status" | "updated_at">;
      };
      response: {
        comment: Comment;
      };
    }
  | {
      /** Updates a page.  */
      path: `pages/${PageId}`;
      body: {
        page: Omit<Page, "admin_graphql_api_id" | "created_at" | "id" | "shop_id" | "updated_at">;
      };
      response: {
        page: Page;
      };
    }
  | {
      /** Updates an existing redirect  */
      path: `redirects/${RedirectId}`;
      body: {
        redirect: Omit<Redirect, "admin_graphql_api_id" | "id">;
      };
      response: {
        redirect: Redirect;
      };
    }
  | {
      /** Updates a script tag  */
      path: `script_tags/${ScriptTagId}`;
      body: {
        script_tag: Omit<ScriptTag, "admin_graphql_api_id" | "created_at" | "id" | "updated_at" | "event" | "src"> & Required<Pick<ScriptTag, "event" | "src">>;
      };
      response: {
        script_tag: ScriptTag;
      };
    }
  | {
      /** Updates an existing theme.  */
      path: `themes/${ThemeId}`;
      body: {
        theme: Omit<Theme, "admin_graphql_api_id" | "created_at" | "id" | "previewable" | "processing" | "theme_store_id" | "updated_at">;
      };
      response: {
        theme: Theme;
      };
    }
  | {
      /** Updates a draft order  */
      path: `draft_orders/${DraftOrderId}`;
      body: {
        draft_order: Omit<DraftOrder, "admin_graphql_api_id" | "payment_terms">;
      };
      response: {
        draft_order: DraftOrder;
      };
    }
  | {
      /** Completes a draft order.
      Using the DraftOrder resource, you can create a draft order and transition it to an order.
      The following flows are supported:
      Create a draft order that calculates taxes and totals
      but accept payment from the customer outside of Shopify.
      Create a draft order and send an invoice to the customer.
        */
      path: `draft_orders/${DraftOrderId}/complete`;
      query: {
        payment_pending?: string;
      };
      response: {
        draft_order: DraftOrder;
      };
    }
  | {
      /** This operation allows for updating properties of an order including `buyer_accepts_marketing`, `email`, `phone`, `note`, `tags`, `metafields` and `shipping_address_attributes`. It is not for editing the items of an order.  */
      path: `orders/${OrderId}`;
      body: {
        order: Omit<Order, "admin_graphql_api_id" | "app_id" | "browser_ip" | "cancelled_at" | "cart_token" | "checkout_token" | "client_details" | "closed_at" | "created_at" | "currency" | "current_total_discounts" | "current_total_discounts_set" | "current_total_duties_set" | "current_total_price" | "current_total_price_set" | "current_subtotal_price" | "current_subtotal_price_set" | "current_total_tax" | "current_total_tax_set" | "customer_locale" | "discount_applications" | "id" | "landing_site" | "number" | "order_number" | "original_total_duties_set" | "payment_terms" | "payment_gateway_names" | "processing_method" | "refunds" | "test" | "token" | "total_tip_received" | "updated_at" | "order_status_url" | "line_items"> & Required<Pick<Order, "line_items">>;
      };
      response: {
        order: Order;
      };
    }
  | {
      /** Updates an order risk
      Note
      You cannot modify an order risk that was created by another application.
        */
      path: `orders/${OrderId}/risks/${RiskId}`;
      body: {
        risk: Omit<Risk, "admin_graphql_api_id">;
      };
      response: {
        risk: Risk;
      };
    }
  | {
      /** Updates an existing gift card.
      The gift card's balance can't be changed via the API. You can change only the expiry date, note, and template suffix.  */
      path: `gift_cards/${GiftCardId}`;
      body: {
        gift_card: Omit<GiftCard, "admin_graphql_api_id">;
      };
      response: {
        gift_card: GiftCard;
      };
    }
  | {
      /** Updates an existing custom collection  */
      path: `custom_collections/${CustomCollectionId}`;
      body: {
        custom_collection: Omit<CustomCollection, "admin_graphql_api_id" | "id" | "published_at" | "published_scope" | "updated_at" | "title"> & Required<Pick<CustomCollection, "title">>;
      };
      response: {
        custom_collection: CustomCollection;
      };
    }
  | {
      /** Update a product.  */
      path: `products/${ProductId}`;
      body: {
        product: Omit<Product, "admin_graphql_api_id" | "created_at" | "id" | "updated_at" | "title"> & Required<Pick<Product, "title">>;
      };
      response: {
        product: Product;
      };
    }
  | {
      /** Modify an existing product image  */
      path: `products/${ProductId}/images/${ImageId}`;
      body: {
        image: Omit<Image, "admin_graphql_api_id">;
      };
      response: {
        image: Image;
      };
    }
  | {
      /** Updates an existing product variant  */
      path: `variants/${VariantId}`;
      body: {
        variant: Omit<Variant, "admin_graphql_api_id" | "inventory_quantity" | "presentment_prices" | "position" | "title">;
      };
      response: {
        variant: Variant;
      };
    }
  | {
      /** Updates an existing smart collection  */
      path: `smart_collections/${SmartCollectionId}`;
      body: {
        smart_collection: Omit<Collection, "admin_graphql_api_id" | "updated_at" | "rules" | "title"> & Required<Pick<Collection, "rules" | "title">>;
      };
      response: {
        smart_collection: Collection;
      };
    }
  | {
      /** Updates the ordering type of products in a smart collection  */
      path: `smart_collections/${SmartCollectionId}/order`;
      query: {
        /** An array of product IDs, in the order that you want them to appear at the top of the collection. When products is specified but empty, any previously sorted products are cleared. */
        products?: string;
        /** The type of sorting to apply. Valid values are listed in the Properties section above. */
        sort_order?: string;
      };
    }
  | {
      /** Modifies an existing checkout  */
      path: `checkouts/${Token}`;
      body: {
        checkout: Omit<Checkout, "admin_graphql_api_id" | "created_at" | "currency" | "order" | "payment_due" | "payment_url" | "requires_shipping" | "shipping_rate" | "subtotal_price" | "tax_lines" | "taxes_included" | "token" | "total_price" | "total_tax" | "updated_at" | "web_url" | "billing_address" | "line_items"> & Required<Pick<Checkout, "billing_address" | "line_items">>;
      };
      response: {
        checkout: Checkout;
      };
    }
  | {
      /** Create a collection listing to publish a collection to your app  */
      path: `collection_listings/${CollectionListingId}`;
      body: {
        collection_listing: Omit<CollectionListing, "admin_graphql_api_id" | "collection_id" | "body_html" | "default_product_image" | "image" | "handle" | "published_at" | "title" | "sort_order" | "updated_at">;
      };
      response: {
        collection_listing: CollectionListing;
      };
    }
  | {
      /** Update a mobile platform application  */
      path: `mobile_platform_applications/${MobilePlatformApplicationId}`;
      body: {
        mobile_platform_application: Omit<MobilePlatformApplication, "admin_graphql_api_id">;
      };
      response: {
        mobile_platform_application: MobilePlatformApplication;
      };
    }
  | {
      /** Create a product listing to publish a product to your app  */
      path: `product_listings/${ProductListingId}`;
      body: {
        product_listing: Omit<ProductListing, "admin_graphql_api_id" | "product_id" | "body_html" | "created_at" | "handle" | "images" | "options" | "product_type" | "published_at" | "tags" | "title" | "updated_at" | "variants" | "vendor">;
      };
      response: {
        product_listing: ProductListing;
      };
    }
  | {
      /** Updates a carrier service. Only the app that creates a carrier service can update it.  */
      path: `carrier_services/${CarrierServiceId}`;
      body: {
        carrier_service: Omit<CarrierService, "admin_graphql_api_id">;
      };
      response: {
        carrier_service: CarrierService;
      };
    }
  | {
      /** Update information associated with a fulfillment  */
      path: `orders/${OrderId}/fulfillments/${FulfillmentId}`;
      body: {
        fulfillment: Omit<Fulfillment, "admin_graphql_api_id">;
      };
      response: {
        fulfillment: Fulfillment;
      };
    }
  | {
      path: `fulfillment_services/${FulfillmentServiceId}`;
      body: {
        fulfillment_service: Omit<FulfillmentService, "admin_graphql_api_id">;
      };
      response: {
        fulfillment_service: FulfillmentService;
      };
    }
  | {
      /** 
      Caution
      As of version 2020-10, the tax field is deprecated.
      Updates an existing country.  */
      path: `countries/${CountryId}`;
      body: {
        country: Omit<Country, "admin_graphql_api_id">;
      };
      response: {
        country: Country;
      };
    }
  | {
      /** 
      Caution
      As of version 2020-10, the tax field is deprecated.
      Updates an existing province for a country.  */
      path: `countries/${CountryId}/provinces/${ProvinceId}`;
      body: {
        province: Omit<Province, "admin_graphql_api_id">;
      };
      response: {
        province: Province;
      };
    }
