export type StorefrontAccessTokenId = number;
export type ReportId = number;
export type RecurringApplicationChargeId = number;
export type CustomerId = number;
export type AddressId = number;
export type CustomerSavedSearchId = number;
export type PriceRuleId = number;
export type DiscountCodeId = number;
export type WebhookId = number;
export type MarketingEventId = number;
export type MetafieldId = number;
export type BlogId = number;
export type ArticleId = number;
export type ThemeId = number;
export type AssetUrl = string;
export type PageId = number;
export type RedirectId = number;
export type ScriptTagId = number;
export type DraftOrderId = number;
export type OrderId = number;
export type RiskId = number;
export type CollectId = number;
export type CustomCollectionId = number;
export type ProductId = number;
export type ImageId = number;
export type VariantId = number;
export type SmartCollectionId = number;
export type CollectionListingId = number;
export type MobilePlatformApplicationId = number;
export type ProductListingId = number;
export type CarrierServiceId = number;
export type FulfillmentId = number;
export type EventId = number;
export type FulfillmentServiceId = number;
export type CountryId = number;

export type DeletePaths =
  | {
      /** Deletes an existing storefront access token  */
      path: `storefront_access_tokens/${StorefrontAccessTokenId}`;
    }
  | {
      /** Deletes a report  */
      path: `reports/${ReportId}`;
    }
  | {
      /** Cancels a recurring application charge  */
      path: `recurring_application_charges/${RecurringApplicationChargeId}`;
    }
  | {
      /** Deletes a customer. A customer can't be deleted if they have existing orders.  */
      path: `customers/${CustomerId}`;
    }
  | {
      /** Removes an address from a customer’s address list.  */
      path: `customers/${CustomerId}/addresses/${AddressId}`;
    }
  | {
      /** Deletes a customer saved search.  */
      path: `customer_saved_searches/${CustomerSavedSearchId}`;
    }
  | {
      /** Deletes a discount code  */
      path: `price_rules/${PriceRuleId}/discount_codes/${DiscountCodeId}`;
    }
  | {
      /** Deletes a price rule  */
      path: `price_rules/${PriceRuleId}`;
    }
  | {
      /** Delete a webhook subscription  */
      path: `webhooks/${WebhookId}`;
    }
  | {
      /** Deletes an inventory level of an inventory item at a location.
      Deleting an inventory level for an inventory item removes that item from the specified location.
      Every inventory item must have at least one inventory level. To move inventory to another location,
      first connect the inventory item to another location, and then delete the previous inventory level.  */
      path: `inventory_levels`;
      query: {
        /** The ID for the inventory item. */
        inventory_item_id?: string;
        /** The ID of the location that the inventory level belongs to. To find the ID of the location, use the Location resource. */
        location_id?: string;
      };
    }
  | {
      /** Deletes a marketing event  */
      path: `marketing_events/${MarketingEventId}`;
    }
  | {
      /** Deletes a metafield by its ID.  */
      path: `metafields/${MetafieldId}`;
    }
  | {
      /** Deletes an article  */
      path: `blogs/${BlogId}/articles/${ArticleId}`;
    }
  | {
      /** Deletes an asset from a theme.  */
      path: `themes/${ThemeId}/assets?asset[key]=${AssetUrl}`;
      query: {
        /** Deletes a single asset from a theme by specifying the asset's key.  */
        "asset[key]"?: string;
      };
      response: {
        message?: string;
      };
    }
  | {
      /** Delete a blog  */
      path: `blogs/${BlogId}`;
    }
  | {
      /** Deletes a page.  */
      path: `pages/${PageId}`;
    }
  | {
      /** Deletes a redirect  */
      path: `redirects/${RedirectId}`;
    }
  | {
      /** Deletes a script tag  */
      path: `script_tags/${ScriptTagId}`;
    }
  | {
      /** Deletes a theme.  */
      path: `themes/${ThemeId}`;
      response: {
        id?: number;
        name?: string;
        created_at?: Date;
        updated_at?: Date;
        role?: string;
        theme_store_id?: number;
        previewable?: boolean;
        processing?: boolean;
        admin_graphql_api_id?: string;
      };
    }
  | {
      /** Deletes a draft order  */
      path: `draft_orders/${DraftOrderId}`;
    }
  | {
      /** Deletes an order. Orders that interact with an online gateway can't be deleted.  */
      path: `orders/${OrderId}`;
    }
  | {
      /** Deletes an order risk for an order
      Note
      You cannot delete an order risk that was created by another application.
        */
      path: `orders/${OrderId}/risks/${RiskId}`;
    }
  | {
      /** Removes a product from a collection.  */
      path: `collects/${CollectId}`;
    }
  | {
      /** Deletes a custom collection  */
      path: `custom_collections/${CustomCollectionId}`;
    }
  | {
      /** Deletes a product.  */
      path: `products/${ProductId}`;
    }
  | {
      path: `products/${ProductId}/images/${ImageId}`;
    }
  | {
      path: `products/${ProductId}/variants/${VariantId}`;
    }
  | {
      /** Removes a smart collection  */
      path: `smart_collections/${SmartCollectionId}`;
    }
  | {
      /** Delete a collection listing to unpublish a collection from your app  */
      path: `collection_listings/${CollectionListingId}`;
    }
  | {
      /** Delete a mobile platform application  */
      path: `mobile_platform_applications/${MobilePlatformApplicationId}`;
    }
  | {
      /** Delete a product listing to unpublish a product from your app  */
      path: `product_listings/${ProductListingId}`;
    }
  | {
      /** Deletes a carrier service  */
      path: `carrier_services/${CarrierServiceId}`;
    }
  | {
      /** Deletes a fulfillment event  */
      path: `orders/${OrderId}/fulfillments/${FulfillmentId}/events/${EventId}`;
    }
  | {
      path: `fulfillment_services/${FulfillmentServiceId}`;
    }
  | {
      /** Deletes a country.  */
      path: `countries/${CountryId}`;
    };
