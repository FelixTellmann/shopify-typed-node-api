export type Blog = {
  /** A unique numeric identifier for the blog.  */
  id?: number;
  /** A human-friendly unique string that is automatically generated from the title if no handle is sent during the creation of a blog. Duplicate handles are appended with an incremental number, for example, `blog-2`. The handle is customizable and is used by the Liquid templating language to refer to the blog. If you change the handle of a blog, then it can negatively affect the SEO of the shop. We recommend that you create a URL redirect to avoid any SEO issues.  */
  handle?: string;
  /** The title of the blog.  */
  title?: string;
  /** The date and time when changes were last made to the blog's properties. Note that this is not updated when creating, modifying or deleting articles in the blog. The API returns this value in ISO 8601 format.  */
  updated_at?: Date;
  /** Indicates whether readers can post comments to the blog and if comments are moderated or not. Possible values are:
  no (default): Readers cannot post comments to blog articles.
  moderate: Readers can post comments to blog articles, but comments must be moderated before they appear.
  yes: Readers can post comments to blog articles without moderation.  */
  commentable?: string;
  /** FeedBurner is a web feed management provider and can be enabled to provide custom RSS feeds for Shopify bloggers. Google has stopped supporting FeedBurner, and new or existing blogs that are not already integrated with FeedBurner can't use the service. This property will default to blank unless FeedBurner is enabled.  */
  feedburner?: null;
  /** The URL that points to the FeedBurner location for blogs that have FeedBurner enabled. Google has stopped supporting FeedBurner, and new or existing blogs that are not already integrated with FeedBurner can't use the service. This property will default to blank unless FeedBurner is enabled  */
  feedburner_location?: null;
  /** The date and time when the blog was created. The API returns this value in ISO 8601 format.  */
  created_at?: Date;
  /** States the name of the template a blog is using if it is using an alternate template. If a blog is using the default blog.liquid template, the value returned is "null".  */
  template_suffix?: null;
  /** A list of tags associated with the 200 most recent blog articles. Tags are additional short descriptors formatted as a string of comma-separated values. For example, if an article has three tags: tag1, tag2, tag3. Tags are limited to 255 characters.  */
  tags?: string;
  /** The GraphQL GID of the blog.  */
  admin_graphql_api_id?: string;
  /** Attaches additional metadata to a store's resources:
  key (required): Identifier for the metafield (maximum of 30 characters).
  namespace (required): Container for a set of metadata. Namespaces help distinguish between metadata you created and metadata created by another individual with a similar namespace (maximum of 20 characters).
  value (required): Information to be stored as metadata.
  type (required): The metafield's information type. Refer to the full list of types.
  description (optional): Additional information about the metafield.
  For more information on attaching metadata to Shopify resources, see the Metafield resource.  */
  metafields?: Metafield[];
};

export type Page = {
  /** The unique numeric identifier for the page.  */
  id?: number;
  /** The page's title.  */
  title?: string;
  /** The ID of the shop to which the page belongs.  */
  shop_id?: number;
  /** A unique, human-friendly string for the page, generated automatically from its title. In online store themes, the Liquid templating language refers to a page by its handle.  */
  handle?: string;
  /** The text content of the page, complete with HTML markup.  */
  body_html?: string;
  /** The name of the person who created the page.  */
  author?: string;
  /** The date and time (ISO 8601 format) when the page was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the page was last updated.  */
  updated_at?: Date;
  /** The date and time (ISO 8601 format) when the page was published. Returns null when the page is hidden.  */
  published_at?: Date;
  /** The suffix of the Liquid template being used. For example, if the value is contact, then the page is using the page.contact.liquid template. If the value is an empty string, then the page is using the default page.liquid template.  */
  template_suffix?: string;
  admin_graphql_api_id?: string;
  /** Additional information attached to the Page object. It has the following properties:
  key: An identifier for the metafield. (maximum: 30 characters)
  namespace: A container for a set of metadata. Namespaces help distinguish between metadata created by different apps. (maximum: 20 characters)
  value: The information to be stored as metadata.
  value_type: The information type that's being stored. Valid values: string or integer.
  description (optional): Additional information about the metafield.
  For more information on attaching metadata to Shopify resources, see the Metafield resource.  */
  metafield?: Metafield;
};

export type Risk = {
  /** A unique numeric identifier for the order risk.  */
  id?: number;
  /** The ID of the order that the order risk belongs to.  */
  order_id?: number;
  /** The ID of the checkout that the order risk belongs to.  */
  checkout_id?: number;
  /** The source of the order risk.  */
  source?: string;
  /** For internal use only. A number between 0 and 1 that's assigned to the order.
  The closer the score is to 1, the more likely it is that the order is fraudulent.
  Note
  There is no guarantee of stability in risk scores. Scores are not probabilities. The relationship between scores and the probability of fraud can vary over time and between risk providers.  */
  score?: string;
  /** The recommended action given to the merchant. Valid values:
  cancel: There is a high level of risk that this order is fraudulent. The merchant should cancel the order.
  investigate: There is a medium level of risk that this order is fraudulent. The merchant should investigate the order.
  accept: There is a low level of risk that this order is fraudulent. The order risk found no indication of fraud.  */
  recommendation?: string;
  /** Whether the order risk is displayed on the order details page in the Shopify admin. If false, then this order risk is ignored when Shopify determines your app's overall risk level for the order.This property can't be changed after an order risk is created.It is not advised to create order risks with a display set to false. This property may be removed in future API versions.  */
  display?: boolean;
  /** Whether this order risk is severe enough to force the cancellation of the order. If true, then this order risk is included in the Order canceled message that's shown on the details page of the canceled order.
  Note: Setting this property to true does not cancel the order. Use this property only if your app automatically cancels the order using the Order resource. If your app doesn't automatically cancel orders based on order risks, then leave this property set to false.  */
  cause_cancel?: boolean;
  /** The message that's displayed to the merchant to indicate the results of the fraud check. The message is displayed only if display is set totrue.  */
  message?: string;
  /** The message that's displayed to the merchant to indicate the results of the fraud check. The message is displayed only if display is set totrue.  */
  merchant_message?: string;
};

export type Duty = {
  duties?: Duty[];
  id?: string;
  tax_lines?: TaxLine[];
  shop_money?: Price;
  presentment_money?: Price;
  admin_graphql_api_id?: string;
  country_code_of_origin?: string;
  harmonized_system_code?: string;
};

export type User = {
  /** The ID of the user's staff.  */
  id?: number;
  /** The user's first name.  */
  first_name?: string;
  /** The user's email address.  */
  email?: string;
  /** The user's homepage or other web address.  */
  url?: string;
  /** The user's IM account address.  */
  im?: string;
  /** This property is deprecated.  */
  screen_name?: string;
  /** The user's phone number.  */
  phone?: string;
  /** The user's last name.  */
  last_name?: string;
  /** Whether the user is the owner of the Shopify account.  */
  account_owner?: boolean;
  /** Whether this account will receive email announcements from Shopify. Valid values: 0, 1  */
  receive_announcements?: number;
  /** The description the user has written for themselves.  */
  bio?: string;
  /** The permissions granted to the user's staff account. Valid values:
  applications: The user can authorize the installation of applications.
  billing_application_charges: The user can approve application charges.
  billing_charges: The user can view and export billing charges.
  billing_invoices_view: The user can view billing invoices.
  billing_payment_methods_view: The user can view billing payment methods.
  customers: The user can view, create, edit, and delete customers, and respond to customer messages in Shopify Ping.
  dashboard: The user can view the Home page, which includes sales information and other store data.
  domains: The user can view, buy, and manage domains.
  draft_orders: The user can create, update, and delete draft orders.
  edit_orders: The user can edit orders.
  edit_private_apps: The user can give permission to private apps to read, write, and make changes to the store.
  export_customers: The user can export customers.
  export_draft_orders: The user can export draft orders.
  export_products: The user can export products and inventory.
  export_orders: The user can export orders.
  gift_cards: The user can view, create, issue, and export gift cards to a CSV file.
  links: The user can view and modify links and navigation menus.
  locations: The user can create, update, and delete locations where you stock or manage inventory.
  marketing: The user can view and create discount codes and automatic discounts, and export discounts to a CSV file.
  marketing_section: The user can view, create, and automate marketing campaigns.
  orders: The user can view, create, update, delete, and cancel orders, and receive order notifications.
  overviews: The user can view the Overview and Live view pages,
  which include sales information, and other store and sales channels data.
  pages: The user can view, create, update, publish, and delete blog posts and pages.
  preferences: The user can view the preferences and configuration of a shop.
  products: The user can view, create, import, and update products, collections, and inventory.
  reports: The user can view and create all reports, which includes sales information and other store data.
  shopify_payments_accounts: The user can view Shopify Payments account details.
  shopify_payments_transfers: The user can view Shopify Payments payouts.
  staff_audit_log_view: The user can view Shopify admin browser sessions.
  staff_management_activation: The user can activate or deactivate staff in the store.
  staff_management_create: The user can add staff to the store.
  staff_management_delete: The user can delete staff from the store.
  staff_management_update: The user can update staff in the store.
  themes: The user can view, update, and publish themes.
  view_private_apps: The user can view private apps installed on the store.  */
  permissions?: string[];
  /** The user's preferred locale. Locale values use the format language or language-COUNTRY, where language is a two-letter language code, and COUNTRY is a two-letter country code. For example: en or en-US  */
  locale?: string;
  /** The type of account the user has. Valid values:
  regular: The user's account can access the Shopify admin.
  restricted: The user's account cannot access the Shopify admin.
  invited: The user has not yet accepted the invitation to create staff.
  collaborator: The user account of a partner who collaborates with the merchant.  */
  user_type?: string;
  admin_graphql_api_id?: string;
  tfa_enabled?: boolean;
};

export type Rule = {
  column?: string;
  relation?: string;
  condition?: string;
};

export type Date = {
  date?: string;
};

export type Shop = {
  /** The ID for the shop. A 64-bit unsigned integer.  */
  id?: number;
  /** The name of the shop.  */
  name?: string;
  /** The contact email used for communication between Shopify and the shop owner.  */
  email?: string;
  /** The shop's domain.  */
  domain?: string;
  /** The shop's normalized province or state name.  */
  province?: string;
  /** The shop's country. In most cases matches the country_code.  */
  country?: string;
  /** The shop's street address.  */
  address1?: string;
  /** The shop's zip or postal code.  */
  zip?: string;
  /** The shop's city.  */
  city?: string;
  /** The handle of the partner account that referred the merchant to Shopify, if applicable.  */
  source?: null;
  /** The contact phone number for the shop.  */
  phone?: string;
  /** The latitude of the shop's location.  */
  latitude?: number;
  /** The longitude of the shop's location.  */
  longitude?: number;
  /** The shop's primary locale, as configured in the language settings of the shop's theme.  */
  primary_locale?: string;
  /** The the optional second line of the shop's street address.  */
  address2?: string;
  /** The date and time (ISO 8601) when the shop was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601) when the shop was last updated.  */
  updated_at?: Date;
  /** The two-letter country code corresponding to the shop's country.  */
  country_code?: string;
  /** The shop's normalized country name.  */
  country_name?: string;
  /** The three-letter code (ISO 4217 format) for the shop's default currency.  */
  currency?: string;
  /** The contact email used for communication between the shop owner and the customer.  */
  customer_email?: string;
  /** The name of the timezone the shop is in.  */
  timezone?: string;
  /** The name of the timezone assigned by the IANA.  */
  iana_timezone?: string;
  /** The username of the shop owner.  */
  shop_owner?: string;
  /** A string representing the way currency is formatted when the currency isn't specified.  */
  money_format?: string;
  /** A string representing the way currency is formatted when the currency is specified.  */
  money_with_currency_format?: string;
  /** The default unit of weight measurement for the shop.  */
  weight_unit?: string;
  /** The two-letter code for the shop's province or state.  */
  province_code?: string;
  /** Whether applicable taxes are included in product prices. Valid values: true or null.  */
  taxes_included?: null;
  auto_configure_tax_inclusivity?: unknown;
  /** Whether taxes are charged for shipping. Valid values: true or false.  */
  tax_shipping?: null;
  /** Whether the shop is applying taxes on a per-county basis. Only applicable to shops based in the US. Valid values: true or null."  */
  county_taxes?: boolean;
  /** The display name of the Shopify plan the shop is on.  */
  plan_display_name?: string;
  /** The name of the Shopify plan the shop is on.  */
  plan_name?: string;
  /** Whether any active discounts exist for the shop.  */
  has_discounts?: boolean;
  /** Whether any active gift cards exist for the shop.  */
  has_gift_cards?: boolean;
  /** The shop's myshopify.com domain.  */
  myshopify_domain?: string;
  /** The GSuite URL for the store, if applicable.  */
  google_apps_domain?: null;
  /** Whether the GSuite login is enabled. Shops with this feature will be able to log in through the GSuite login page. Valid values: true, null  */
  google_apps_login_enabled?: null;
  /** A string representing the way currency is formatted in email notifications when the currency isn't specified.  */
  money_in_emails_format?: string;
  /** A string representing the way currency is formatted in email notifications when the currency is specified.  */
  money_with_currency_in_emails_format?: string;
  /** Whether the shop is eligible to use Shopify Payments.  */
  eligible_for_payments?: boolean;
  /** Whether the shop requires an extra Shopify Payments agreement.  */
  requires_extra_payments_agreement?: boolean;
  /** Whether the password protection page is enabled on the online storefront.  */
  password_enabled?: boolean;
  /** Whether the shop has an online storefront.  */
  has_storefront?: boolean;
  /** Whether the shop is eligible to receive a free credit card reader from Shopify.  */
  eligible_for_card_reader_giveaway?: boolean;
  /** This field has been deprecated, and is currently unused. Hardcoded to true.  */
  finances?: boolean;
  /** Formerly used for the ID of the shipping origin location (read only).  */
  primary_location_id?: number;
  /** The cookie consent level defined on the online storefront.  */
  cookie_consent_level?: string;
  visitor_tracking_consent_preference?: string;
  /** Whether the shop is capable of accepting payments directly through the Checkout API.  */
  checkout_api_supported?: boolean;
  /** Whether the shop has enabled multiple locations.  */
  multi_location_enabled?: boolean;
  /** Whether the shop has any outstanding setup steps or not.  */
  setup_required?: boolean;
  /** Whether the pre-launch page is enabled on the online storefront.  */
  pre_launch_enabled?: boolean;
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.  */
  enabled_presentment_currencies?: string[];
  /** As of API version 2021-07, this field has been deprecated and is currently unused. Previously indicated whether the shop forced requests made to its resources to be made over SSL using the HTTPS protocol. All requests now use HTTPS, so force_ssl is always true.  */
  force_ssl?: boolean;
};

export type Order = {
  /** The ID of the order, used for API purposes.
  This is different from the order_number property, which is the ID
  used by the shop owner and customer.'  */
  id?: number;
  admin_graphql_api_id?: string;
  /** The ID of the app that created the order.  */
  app_id?: number;
  /** The IP address of the browser used by the customer when they placed the order. Both IPv4 and IPv6 are supported.  */
  browser_ip?: string;
  /** Whether the customer consented to receive email updates from the shop.  */
  buyer_accepts_marketing?: boolean;
  /** The reason why the order was canceled. Valid values:
  customer: The customer canceled the order.
  fraud: The order was fraudulent.
  inventory: Items in the order were not in inventory.
  declined: The payment was declined.
  other: A reason not in this list.  */
  cancel_reason?: string;
  /** The date and time when the order was canceled. Returns null if the order isn't canceled.  */
  cancelled_at?: null;
  /** A unique value when referencing the cart that's associated with the order.  */
  cart_token?: string;
  checkout_id?: number;
  /** A unique value when referencing the checkout that's associated with the order.  */
  checkout_token?: string;
  /** Information about the browser that the customer used when they placed their order:
  accept_language: The languages and locales that the browser understands.
  browser_height: The browser screen height in pixels, if available.
  browser_ip: The browser IP address.
  browser_width: The browser screen width in pixels, if available.
  session_hash: A hash of the session.
  user_agent: Details of the browsing client, including software and operating versions.  */
  client_details?: ClientDetail;
  /** The date and time (ISO 8601 format) when the order was closed. Returns null if the order isn't closed.  */
  closed_at?: Date;
  confirmed?: boolean;
  contact_email?: string;
  /** The autogenerated date and time
  (ISO 8601 format)
  when the order was created in Shopify.
  The value for this property cannot be changed.  */
  created_at?: Date;
  /** The three-letter code (ISO 4217 format) for the shop currency.  */
  currency?: string;
  /** The current subtotal price of the order in the shop currency. The value of this field reflects order edits, returns, and refunds.  */
  current_subtotal_price?: string;
  /** The current subtotal price of the order in shop and presentment currencies. The amount values associated with this field reflect order edits, returns, and refunds.  */
  current_subtotal_price_set?: PriceSet;
  /** The current total discounts on the order in the shop currency. The value of this field reflects order edits, returns, and refunds.  */
  current_total_discounts?: string;
  /** The current total discounts on the order in shop and presentment currencies. The amount values associated with this field reflect order edits, returns, and refunds.  */
  current_total_discounts_set?: PriceSet;
  /** The current total duties charged on the order in shop and presentment currencies. The amount values associated with this field reflect order edits, returns, and refunds.  */
  current_total_duties_set?: object;
  /** The current total price of the order in the shop currency. The value of this field reflects order edits, returns, and refunds.  */
  current_total_price?: string;
  /** The current total price of the order in shop and presentment currencies. The amount values associated with this field reflect order edits, returns, and refunds.  */
  current_total_price_set?: PriceSet;
  /** The current total taxes charged on the order in the shop currency. The value of this field reflects order edits, returns, or refunds.  */
  current_total_tax?: string;
  /** The current total taxes charged on the order in shop and presentment currencies. The amount values associated with this field reflect order edits, returns, and refunds.  */
  current_total_tax_set?: PriceSet;
  /** The two or three-letter language code, optionally followed by a region modifier.  */
  customer_locale?: string;
  /** The ID of the Shopify POS device that created the checkout.  */
  device_id?: number;
  /** A list of discounts applied to the order. Each discount object includes the following properties:
  amount: The amount that's deducted from the order total. When you create an order, this value is the percentage or monetary amount to deduct. After the order is created, this property returns the calculated amount.
  code: When the associated discount application is of type code, this property returns the discount code that was entered at checkout. Otherwise this property returns the title of the discount that was applied.
  type: The type of discount. Default value: fixed_amount. Valid values:
  fixed_amount: Applies amount as a unit of the store's currency. For example, if amount is 30 and the store's currency is USD, then 30 USD is deducted from the order total when the discount is applied.
  percentage: Applies a discount of amount as a percentage of the order total.
  shipping: Applies a free shipping discount on orders that have a shipping rate less than or equal to amount. For example, if amount is 30, then the discount will give the customer free shipping for any shipping rate that is less than or equal to $30.  */
  discount_codes?: DiscountCode[];
  /** The customer's email address.  */
  email?: string;
  /** Whether taxes on the order are estimated. Many factors can change between the
  time a customer places an order and the time the order is shipped, which could affect the calculation
  of taxes. This property returns false when taxes on the order are finalized and aren't subject
  to any changes.  */
  estimated_taxes?: boolean;
  /** The status of payments associated with the order. Can only be set when the order is created. Valid values:
  pending: The payments are pending. Payment might fail in this state. Check again to confirm whether the payments have been paid successfully.
  authorized: The payments have been authorized.
  partially_paid: The order has been partially paid.
  paid: The payments have been paid.
  partially_refunded: The payments have been partially refunded.
  refunded: The payments have been refunded.
  voided: The payments have been voided.  */
  financial_status?: string;
  /** The order's status in terms of fulfilled line items. Valid values:
  fulfilled: Every line item in the order has been fulfilled.
  null: None of the line items in the order have been fulfilled.
  partial: At least one line item in the order has been fulfilled.
  restocked: Every line item in the order has been restocked and the order canceled.  */
  fulfillment_status?: string;
  /** The payment gateway used.  */
  gateway?: string;
  /** The URL for the page where the buyer landed when they entered the shop.  */
  landing_site?: string;
  landing_site_ref?: string;
  /** The ID of the physical location where the order was processed. If you need to reference the location against an order, then use the FulfillmentOrder resource.  */
  location_id?: number;
  /** The order name, generated by combining the order_number property with  the order prefix and suffix that are set in the merchant's general settings. This is different from the id property, which is the ID of the order used by the API.  This field can also be set by the API to be any string value.  */
  name?: string;
  /** An optional note that a shop owner can attach to the order.  */
  note?: string;
  /** Extra information that is added to the order. Appears in the Additional details section of an order details page. Each array entry must contain a hash with name and value keys.  */
  note_attributes?: NoteAttribute[];
  /** The order's position in the shop's count of orders. Numbers are sequential and start at 1.  */
  number?: number;
  /** The order 's position in the shop's count of orders starting at 1001. Order numbers are sequential and start at 1001.  */
  order_number?: number;
  /** The URL pointing to the order status web page, if applicable.  */
  order_status_url?: string;
  /** The original total duties charged on the order in shop and presentment currencies.  */
  original_total_duties_set?: object;
  /** The list of payment gateways used for the order.  */
  payment_gateway_names?: string[];
  /** The customer's phone number for receiving SMS notifications.  */
  phone?: string;
  /** The presentment currency that was used to display prices to the customer.  */
  presentment_currency?: string;
  /** The date and time (ISO 8601 format)
  when an order was processed. This value is the date that appears on your orders and that's used in the
  analytic reports. If you're importing
  orders from an app or another platform, then you can set processed_at to a date and time
  in the past to match when the original order was created.  */
  processed_at?: Date;
  /** How the payment was processed. It has the following valid values:
  checkout: The order was processed using the Shopify checkout.
  direct: The order was processed using a direct payment provider.
  manual: The order was processed using a manual payment method.
  offsite: The order was processed by an external payment provider to the Shopify checkout.
  express: The order was processed using PayPal Express Checkout.
  free: The order was processed as a free order using a discount code.  */
  processing_method?: string;
  reference?: string;
  /** The website where the customer clicked a link to the shop.  */
  referring_site?: string;
  source_identifier?: string;
  /** Where the order originated. Can be set only during order creation, and is not writeable afterwards. Values for Shopify channels are
  protected and cannot be assigned by other API clients: web, pos, shopify_draft_order, iphone, and android.
  Orders created via the API can be assigned any other string of your choice. If unspecified, then new orders are assigned the value of your app's ID.  */
  source_name?: string;
  source_url?: string;
  /** The price of the order in the shop currency after discounts but before shipping, duties, taxes, and tips.  */
  subtotal_price?: string;
  /** The subtotal of the order in shop and presentment currencies after discounts but before shipping, duties, taxes, and tips.  */
  subtotal_price_set?: PriceSet;
  /** Tags attached to the order, formatted as a string of comma-separated values. Tags are additional short descriptors, commonly used for filtering and searching. Each individual tag is limited to 40 characters in length.  */
  tags?: string;
  /** An array of tax line objects, each of which details a tax applicable to the order. Each object has the following properties:
  price: The amount of tax to be charged in the shop currency.
  rate: The rate of tax to be applied.
  title: The name of the tax.
  channel_liable: Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for the tax line.
  When creating an order through the API, tax lines can be specified on the order or the line items but not both. Tax lines specified on the order are split across the taxable line items in the created order.  */
  tax_lines?: TaxLine[];
  /** Whether taxes are included in the order subtotal.  */
  taxes_included?: boolean;
  /** Whether this is a test order.  */
  test?: boolean;
  /** A unique value when referencing the order.  */
  token?: string;
  /** The total discounts applied to the price of the order in the shop currency.  */
  total_discounts?: string;
  /** The total discounts applied to the price of the order in shop and presentment currencies.  */
  total_discounts_set?: PriceSet;
  /** The sum of all line item prices in the shop currency.  */
  total_line_items_price?: string;
  /** The total of all line item prices in shop and presentment currencies.  */
  total_line_items_price_set?: PriceSet;
  /** The total outstanding amount of the order in the shop currency.  */
  total_outstanding?: string;
  /** The sum of all line item prices, discounts, shipping, taxes, and tips in the shop currency. Must be positive.  */
  total_price?: string;
  /** The total price of the order in shop and presentment currencies.  */
  total_price_set?: PriceSet;
  total_price_usd?: string;
  /** The total shipping price of the order, excluding discounts and returns, in shop and presentment currencies. If taxes_included is set to true, then total_shipping_price_set includes taxes.  */
  total_shipping_price_set?: PriceSet;
  /** The sum of all the taxes applied to the order in the shop currency. Must be positive.  */
  total_tax?: string;
  /** The total tax applied to the order in shop and presentment currencies.  */
  total_tax_set?: PriceSet;
  /** The sum of all the tips in the order in the shop currency.  */
  total_tip_received?: string;
  /** The sum of all line item weights in grams. The sum is not adjusted as items are removed from the order.  */
  total_weight?: number;
  /** The date and time (ISO 8601 format) when the order was last modified.
  Filtering orders by updated_at is not an effective method for fetching orders because its value can change when no visible fields of an order have been updated. Use the Webhook and Event APIs to subscribe to order events instead.  */
  updated_at?: Date;
  /** The ID of the user logged into Shopify POS who processed the order, if applicable.  */
  user_id?: number;
  /** The mailing address associated with the payment method. This address is an optional field that won't be available on orders that do not require a payment method. It has the following properties:
  address1: The street address of the billing address.  address2: An optional additional field for the street address of the billing address.  city: The city, town, or village of the billing address.  company: The company of the person associated with the billing address.  country: The name of the country of the billing address.  country_code: The two-letter code (ISO 3166-1 format) for the country of the billing address.  first_name: The first name of the person associated with the payment method.  last_name: The last name of the person associated with the payment method.  latitude: The latitude of the billing address.  longitude: The longitude of the billing address.  name: The full name of the person associated with the payment method.  phone: The phone number at the billing address.  province: The name of the region (for example, province, state, or prefecture) of the billing address.  province_code: The two-letter abbreviation of the region of the billing address.  zip: The postal code (for example, zip, postcode, or Eircode) of the billing address.  */
  billing_address?: Address;
  /** Information about the customer. The order might not have a customer and apps should not depend on the existence of a customer object. This value might be null if the order was created through Shopify POS. For more information about the customer object, see the Customer resource.  */
  customer?: Customer;
  /** An ordered list of stacked discount applications.
  The discount_applications property includes 3 types: discount_code, manual, and script. All 3 types share a common structure and have some type specific attributes.
  allocation_method: The method by which the discount application value has been allocated to entitled lines. Valid values:
  across: The value is spread across all entitled lines.
  each: The value is applied onto every entitled line.
  one: The value is applied onto a single line.
  Caution
  As of version 2020-07, across is returned instead of one as the meaning is the same for explicit discounts.
  code: The discount code that was used to apply the discount. Available only for discount code applications.
  description: The description of the discount application, as defined by the merchant or the Shopify Script. Available only for manual and script discount applications.
  target_selection: The lines on the order, of the type defined by target_type, that the discount is allocated over. Valid values:
  all: The discount is allocated onto all lines,
  entitled: The discount is allocated only onto lines it is entitled for.
  explicit: The discount is allocated onto explicitly selected lines.
  target_type: The type of line on the order that the discount is applicable on. Valid values:
  line_item: The discount applies to line items.
  shipping_line: The discount applies to shipping lines.
  title: The title of the discount application, as defined by the merchant. Available only for manual discount applications.
  type: The discount application type. Valid values:
  automatic: The discount was applied automatically, such as by a Buy X Get Y automatic discount.
  discount_code: The discount was applied by a discount code.
  manual: The discount was manually applied by the merchant (for example, by using an app or creating a draft order).
  script: The discount was applied by a Shopify Script.
  value: The value of the discount application as a decimal. This represents the intention of the discount application. For example, if the intent was to apply a 20% discount, then the value will be 20.0. If the intent was to apply a $15 discount, then the value will be 15.0.
  value_type: The type of the value. Valid values:
  fixed_amount: A fixed amount discount value in the currency of the order.
  percentage: A percentage discount value.  */
  discount_applications?: DiscountApplication[];
  /** An array of fulfillments associated with the order. For more information, see the Fulfillment API.  */
  fulfillments?: Fulfillment[];
  /** A list of line item objects, each containing information about an item in the order. Each object has the following properties:
  fulfillable_quantity: The amount available to fulfill, calculated as follows: quantity - max(refunded_quantity, fulfilled_quantity) - pending_fulfilled_quantity - open_fulfilled_quantity
  fulfillment_service: The service provider that's fulfilling the item. Valid values: manual, or the name of the provider, such as amazon or shipwire.
  fulfillment_status: How far along an order is in terms line items fulfilled. Valid values: null, fulfilled, partial, and not_eligible.
  grams: The weight of the item in grams.
  id: The ID of the line item.
  price: The price of the item before discounts have been applied in the shop currency.
  price_set: The price of the line item in shop and presentment currencies.
  product_id: The ID of the product that the line item belongs to. Can be null if the original product associated with the order is deleted at a later date.
  quantity: The number of items that were purchased.
  requires_shipping: Whether the item requires shipping.
  sku: The item's SKU (stock keeping unit).
  title: The title of the product.
  variant_id: The ID of the product variant.
  variant_title: The title of the product variant.
  vendor: The name of the item's supplier.
  name: The name of the product variant.
  gift_card: Whether the item is a gift card. If true, then the item is not taxed or considered for shipping charges.
  properties:
  An array of custom information for the item that has been added to the cart. Often used to provide product customization options.
  taxable: Whether the item was taxable.
  tax_lines: A list of tax line objects, each of which details a tax applied to the item.
  title: The name of the tax.
  price: The amount added to the order for this tax in the shop currency.
  price_set: The amount added to the order for this tax in shop and presentment currencies.
  rate: The tax rate applied to the order to calculate the tax price.
  channel_liable: Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for the tax line.
  tip_payment_gateway: The payment gateway used to tender the tip, such as shopify_payments. Present only on tips.
  tip_payment_method: The payment method used to tender the tip, such as Visa. Present only on tips.
  total_discount: The total amount of the discount allocated to the line item in the shop currency. This field must be explicitly set using draft orders, Shopify scripts, or the API. Instead of using this field, Shopify recommends using discount_allocations, which provides the same information.
  total_discount_set: The total amount allocated to the line item in the presentment currency. Instead of using this field, Shopify recommends using discount_allocations, which provides the same information.
  discount_allocations: An ordered list of amounts allocated by discount applications. Each discount allocation is associated with a particular discount application.
  amount: The discount amount allocated to the line in the shop currency.
  discount_application_index: The index of the associated discount application in the order's discount_applications list.
  amount_set: The discount amount allocated to the line item in shop and presentment currencies.
  origin_location: The location of the line item’s fulfillment origin.
  id: The location ID of the line item’s fulfillment origin. Used by Shopify to calculate applicable taxes. This is not the ID of the location where the order was placed. You can use the FulfillmentOrder resource to determine the location an item will be sourced from.
  country_code: The two-letter code (ISO 3166-1 format) for the country of the item's supplier.
  province_code: The two-letter abbreviation for the region of the item's supplier.
  name: The name of the item's supplier.
  address1: The street address of the item's supplier.
  address2: The suite number of the item's supplier.
  city: The city of the item's supplier.
  zip: The zip of the item's supplier.
  duties: A list of duty objects, each containing information about a duty on the line item.  */
  line_items?: LineItem[];
  /** An object containing information about the payment. It has the following properties:
  avs_result_code: The response code from the address verification system (AVS). The code is a single letter. See  this chart for the codes and their definitions.
  credit_card_bin: The issuer identification number (IIN), formerly known as the bank identification number (BIN), of the customer's credit card. This is made up of the first few digits of the credit card number.
  credit_card_company: The name of the company who issued the customer's credit card.
  credit_card_number: The customer's credit card number, with most of the leading digits redacted.
  cvv_result_code: The response code from the credit card company indicating whether the customer entered the card security code (card verification value) correctly. The code is a single letter or empty string. See  this chart for the codes and their definitions.  */
  payment_details?: PaymentDetail;
  /** A list of refunds applied to the order. For more information, see the Refund API.  */
  refunds?: Refund[];
  /** The mailing address to where the order will be shipped. This address is optional and will not be available on orders that do not require shipping. It has the following properties:
  address1: The street address of the shipping address.  address2: An optional additional field for the street address of the shipping address.  city: The city, town, or village of the shipping address.  company: The company of the person associated with the shipping address.  country: The name of the country of the shipping address.  country_code: The two-letter code (ISO 3166-1 format) for the country of the shipping address.  first_name: The first name of the person associated with the shipping address.  last_name: The last name of the person associated with the shipping address.  latitude: The latitude of the shipping address.  longitude: The longitude of the shipping address.  name: The full name of the person associated with the payment method.  phone: The phone number at the shipping address.  province: The name of the region (for example, province, state, or prefecture) of the shipping address.  province_code: The two-letter abbreviation of the region of the shipping address.  zip: The postal code (for example, zip, postcode, or Eircode) of the shipping address.  */
  shipping_address?: ShippingAddress;
  /** An array of objects, each of which details a shipping method used. Each object has the following properties:
  code: A reference to the shipping method.
  discounted_price: The price of the shipping method after line-level discounts have been applied. Doesn't reflect cart-level or order-level discounts.
  discounted_price_set: The price of the shipping method in both shop and presentment currencies after line-level discounts have been applied.
  price: The price of this shipping method in the shop currency. Can't be negative.
  price_set: The price of the shipping method in shop and presentment currencies.
  source: The source of the shipping method.
  title: The title of the shipping method.
  tax_lines: A list of tax line objects, each of which details a tax applicable to this shipping line.
  carrier_identifier: A reference to the carrier service that provided the rate. Present when the rate was computed by a third-party carrier service.
  requested_fulfillment_service_id: A reference to the fulfillment service that is being requested for the shipping method. Present if the shipping method requires processing by a third party fulfillment service; null otherwise.  */
  shipping_lines?: ShippingLine[];
  status_url?: string;
  /** The terms and conditions under which a payment should be processed.
  amount: The amount that is owed according to the payment terms.
  currency: The presentment currency for the payment.
  payment_terms_name: The name of the selected payment terms template for the order.
  payment_terms_type: The type of selected payment terms template for the order.
  due_in_days: The number of days between the invoice date and due date that is defined in the selected payment terms template.
  payment_schedules: An array of schedules associated to the payment terms.
  amount: The amount that is owed according to the payment terms.
  currency: The presentment currency for the payment.
  issued_at: The date and time when the payment terms were initiated.
  due_at: The date and time when the payment is due. Calculated based on issued_at and due_in_days or a customized fixed date if the type is fixed.
  completed_at: The date and time when the purchase is completed. Returns null initially and updates when the payment is captured.
  expected_payment_method: The name of the payment method gateway.  */
  payment_terms?: object;
};

export type Error = {
  [T: string]: unknown;
};

export type Event = {
  /** The ID of the event.  */
  id?: number;
  /** The ID of the resource that generated the event.  */
  subject_id?: number;
  /** The date and time (ISO 8601 format) when the event was created.  */
  created_at?: Date;
  /** The type of the resource that generated the event. Valid values:
  Article
  Blog
  Collection
  Comment
  Order
  Page
  PriceRule
  Product
  ApiPermission  */
  subject_type?: string;
  /** The type of event that occurred. Different resources generate different types of event.
  See the Resources section for a list of possible verbs.  */
  verb?: string;
  /** Refers to a certain event and its resources.  */
  arguments?: string[];
  /** A text field containing information about the event.  */
  body?: null;
  /** A human readable description of the event. Can contain some HTML formatting.  */
  message?: string;
  author?: string;
  /** A human readable description of the event.  */
  description?: string;
  /** A relative URL to the resource the event is for, if applicable.  */
  path?: string;
};

export type Image = {
  /** The date and time when the product image was created. The API returns this value in ISO 8601 format.  */
  created_at?: Date;
  alt?: string;
  /** Width dimension of the image which is determined on upload.  */
  width?: number;
  /** Height dimension of the image which is determined on upload.  */
  height?: number;
  /** Specifies the location of the product image. This parameter supports URL filters that you can use to retrieve modified copies of the image. For example, add &#95;small, to the filename to retrieve a scaled copy of the image at 100 x 100 px (for example, ipod-nano_small.png), or add &#95;2048x2048 to retrieve a copy of the image constrained at 2048 x 2048 px resolution (for example, ipod-nano_2048x2048.png).  */
  src?: string;
  /** A unique numeric identifier for the product image.  */
  id?: number;
  /** The id of the product associated with the image.  */
  product_id?: number;
  /** The order of the product image in the list. The first product image is at position 1 and is the "main" image for the product.  */
  position?: number;
  /** The date and time when the product image was last modified. The API returns this value in ISO 8601 format.  */
  updated_at?: Date;
  /** An array of variant ids associated with the image.  */
  variant_ids?: number[];
  admin_graphql_api_id?: string;
};

export type Asset = {
  /** The path to the asset within a theme. It consists of the file's directory and filename. For example, the asset assets/bg-body-green.gif is in the assets directory, so its key is assets/bg-body-green.gif.  */
  key?: string;
  /** The public-facing URL of the asset.  */
  public_url?: string;
  /** The date and time (ISO 8601 format) when the asset was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when an asset was last updated.  */
  updated_at?: Date;
  /** The MIME representation of the content, consisting of the type and subtype of the asset.  */
  content_type?: string;
  /** The asset size in bytes.  */
  size?: number;
  /** The MD5 representation of the content, consisting of a string of 32 hexadecimal digits. May be null if an asset has not been updated recently.  */
  checksum?: string;
  /** The ID for the theme that an asset belongs to.  */
  theme_id?: number;
  /** The text content of the asset, such as the HTML and Liquid markup of a template file.  */
  value?: string;
  /** A base64-encoded image.  */
  attachment?: string;
};

export type Theme = {
  /** A unique numeric identifier for the theme.  */
  id?: number;
  /** The name of the theme.  */
  name?: string;
  /** The date and time (ISO 8601 format) when the theme was created.  */
  created_at?: Date;
  /** The date and time ( ISO 8601 format) when the theme was last updated.  */
  updated_at?: Date;
  /** Specifies how the theme is being used within the shop. Valid values:
  main: The theme is published. Customers see it when they visit the online store.
  unpublished: The theme is unpublished. Customers can't see it.
  demo: The theme is installed on the store as a demo. The theme can't be published until the merchant buys the full version.  */
  role?: string;
  /** A unique identifier applied to Shopify-made themes that are installed from the Shopify Theme Store Theme Store.
  Not all themes available in the Theme Store are developed by Shopify. Returns null if the store's theme isn't made by Shopify, or if it wasn't installed from the Theme Store.  */
  theme_store_id?: number;
  /** Whether the theme can currently be previewed.  */
  previewable?: boolean;
  /** Whether files are still being copied into place for this theme.  */
  processing?: boolean;
  admin_graphql_api_id?: string;
};

export type Price = {
  amount?: string;
  currency_code?: string;
};

export type Report = {
  /** The unique numeric identifier for the report.  */
  id?: number;
  /** The name of the report. Maximum length: 255 characters.  */
  name?: string;
  /** The ShopifyQL query that generates the report.
  See Shopify Query Language.  */
  shopify_ql?: string;
  /** The date and time (ISO 8601)
  when the report was last modified.  */
  updated_at?: Date;
  /** The category for the report. When you create a report, the API will return custom_app_reports.  */
  category?: string;
};

export type Refund = {
  /** The unique identifier for the refund.  */
  id?: number;
  admin_graphql_api_id?: string;
  /** The date and time (ISO 8601  format) when the refund was created.  */
  created_at?: Date;
  /** An optional note attached to a refund.  */
  note?: string;
  order_id?: number;
  /** The date and time (ISO 8601 format) when the refund was imported. This value can be set to a date in the past when importing from other systems. If no value is provided, then it will be auto-generated as the current time in Shopify. Public apps need to be granted permission by Shopify to import orders with the processed_at timestamp set to a value earlier the created_at timestamp. Private apps can't be granted permission by Shopify.  */
  processed_at?: Date;
  /** Whether to add the line items back to the store's inventory.  */
  restock?: boolean;
  total_additional_fees_set?: PriceSet;
  total_duties_set?: PriceSet;
  /** The unique identifier of the user who performed the refund.  */
  user_id?: number;
  /** A list of order adjustments attached to the refund. Order adjustments are generated to account for refunded shipping costs and differences between calculated and actual refund amounts. Each entry has the following properties:
  id: The unique identifier for the order adjustment.
  order_id: The unique identifier for the order that the order adjustment is associated with.
  refund_id: The unique identifier for the refund that the order adjustment is associated with.
  amount: The value of the discrepancy between the calculated refund and the actual refund. If the kind property's value is shipping_refund, then amount returns the value of shipping charges refunded to the customer.
  tax_amount: The taxes that are added to amount, such as applicable shipping taxes added to a shipping refund.
  kind: The order adjustment type. Valid values: shipping_refund and refund_discrepancy.
  reason: The reason for the order adjustment. To set this value, include discrepancy_reason when you create a refund.
  amount_set: The amount of the order adjustment in shop and presentment currencies.
  tax_amount_set: The tax amount of the order adjustment in shop and presentment currencies.  */
  order_adjustments?: OrderAdjustment[];
  /** A list of transactions involved in the refund. A single order can have multiple transactions associated with it. For more information,  see the Transaction resource.  */
  transactions?: Transaction[];
  /** A list of refunded line items. Each entry has the following properties:
  id: The unique identifier of the line item in the refund.
  line_item: A line item being returned.
  line_item_id: The ID of the related line item in the order.
  quantity: The quantity of the associated line item that was returned.
  restock_type: How this refund line item affects inventory levels. Valid values:
  no_restock: Refunding these items won't affect inventory. The number of fulfillable units for this line item will remain unchanged. For example, a refund payment can be issued but no items will be returned or made available for sale again.
  cancel: The items have not yet been fulfilled. The canceled quantity will be added back to the available count. The number of fulfillable units for this line item will decrease.
  return: The items were already delivered, and will be returned to the merchant. The returned quantity will be added back to the available count. The number of fulfillable units for this line item will remain unchanged.
  legacy_restock: The deprecated restock property was used for this refund. These items were made available for sale again. This value is not accepted when creating new refunds.
  location_id: The unique identifier of the location where the items will be restocked. Required when restock_type has the value return or cancel.
  subtotal: The subtotal of the refund line item.
  total_tax: The total tax on the refund line item.
  subtotal_set: The subtotal of the refund line item in shop and presentment currencies.
  total_tax_set: The total tax of the line item in shop and presentment currencies.  */
  refund_line_items?: RefundLineItem[];
  /** A list of duties that have been returned as part of the refund.  */
  duties?: Duty;
  additional_fees?: unknown[];
  shipping?: Shipping;
  currency?: string;
  /** A list of refunded duties. Each entry has the following properties:
  duty_id: The unique identifier of the duty.
  refund_type: Specifies how you want the duty refunded. Valid values:
  FULL: Refunds all the duties associated with a duty ID. You do not need to include refund line items if you are using the full refund type.
  PROPORTIONAL: Refunds duties in proportion to the line item quantity that you want to refund. If you choose the proportional refund type, then you must also pass the refund line items to calculate the portion of duties to refund.  */
  refund_duties?: RefundDuty[];
};

export type Option = {
  id?: number;
  product_id?: number;
  name?: string;
  position?: number;
  values?: string[];
  option1?: string;
};

export type Origin = {
  /** The shop's street address.  */
  address1?: string;
  /** The the optional second line of the shop's street address.  */
  address2?: string;
  /** The shop's city.  */
  city?: string;
  country_code?: string;
  location_id?: number;
  name?: string;
  /** The user's phone number.  */
  phone?: string;
  /** The shop's normalized province or state name.  */
  province?: string;
  /** The shop's zip or postal code.  */
  zip?: string;
};

export type Amount = {
  amount?: string;
};

export type Payout = {
  /** The unique identifier of the payout  */
  id?: number;
  /** The transfer status of the payout. The value will be one of the following:
  scheduled: The payout has been created and had transactions assigned to it, but
  it has not yet been submitted to the bank.
  in_transit: The payout has been submitted to the bank for processing.
  paid: The payout has been successfully deposited into the bank.
  failed: The payout has been declined by the bank.
  canceled: The payout has been canceled by Shopify.  */
  status?: string;
  /** The date (ISO 8601 format) when the payout was issued.  */
  date?: string;
  /** The ISO 4217 currency code of the payout.  */
  currency?: string;
  /** The total amount of the payout, in a decimal formatted string.  */
  amount?: string;
  summary?: Summary;
};

export type Policy = {
  /** A description of the policy.  */
  body?: string;
  /** The date and time (ISO 8601 format) when the policy was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the policy was last modified.  */
  updated_at?: Date;
  /** A unique identifer for the policy used to build the policy's URL.  */
  handle?: string;
  /** The name of the policy.  */
  title?: string;
  /** The public URL of the policy.  */
  url?: string;
};

export type Address = {
  id?: number;
  customer_id?: number;
  first_name?: string;
  last_name?: string;
  company?: string;
  address1?: string;
  address2?: string;
  city?: string;
  province?: string;
  country?: string;
  zip?: string;
  phone?: string;
  name?: string;
  province_code?: string;
  country_code?: string;
  country_name?: string;
  default?: boolean;
  latitude?: number;
  longitude?: number;
};

export type TaxLine = {
  price?: string;
  rate?: number;
  title?: string;
  price_set?: PriceSet;
  channel_liable?: boolean;
  compare_at?: number;
};

export type Receipt = {
  testcase?: boolean;
  authorization?: string;
  gift_card_id?: number;
  gift_card_last_characters?: string;
};

export type Webhook = {
  /** Unique numeric identifier for the webhook subscription.  */
  id?: number;
  /** Destination URI to which the webhook subscription should send the POST request when an event occurs.  */
  address?: string;
  /** Event that triggers the webhook. Valid values are: app/uninstalled, bulk_operations/finish, carts/create, carts/update, checkouts/create, checkouts/delete, checkouts/update, collection_listings/add, collection_listings/remove, collection_listings/update, collections/create, collections/delete, collections/update, customer_groups/create, customer_groups/delete, customer_groups/update, customer_payment_methods/create, customer_payment_methods/revoke, customer_payment_methods/update, customers/create, customers/delete, customers/disable, customers/enable, customers/update, customers_marketing_consent/update, disputes/create, disputes/update, domains/create, domains/destroy, domains/update, draft_orders/create, draft_orders/delete, draft_orders/update, fulfillment_events/create, fulfillment_events/delete, fulfillments/create, fulfillments/update, inventory_items/create, inventory_items/delete, inventory_items/update, inventory_levels/connect, inventory_levels/disconnect, inventory_levels/update, locales/create, locales/update, locations/create, locations/delete, locations/update, order_transactions/create, orders/cancelled, orders/create, orders/delete, orders/edited, orders/fulfilled, orders/paid, orders/partially_fulfilled, orders/updated, product_listings/add, product_listings/remove, product_listings/update, products/create, products/delete, products/update, profiles/create, profiles/delete, profiles/update, refunds/create, selling_plan_groups/create, selling_plan_groups/delete, selling_plan_groups/update, shop/update, subscription_billing_attempts/challenged, subscription_billing_attempts/failure, subscription_billing_attempts/success, subscription_contracts/create, subscription_contracts/update, tender_transactions/create, themes/create, themes/delete, themes/publish, themes/update  */
  topic?: string;
  /** Date and time when the webhook subscription was created. The API returns this value in ISO 8601 format.  */
  created_at?: Date;
  /** Date and time when the webhook subscription was updated. The API returns this value in ISO 8601 format.  */
  updated_at?: Date;
  /** Format in which the webhook subscription should send the data. Valid values are JSON and XML. Defaults to JSON.  */
  format?: string;
  /** An optional array of top-level resource fields that should be serialized and sent in the POST request. If absent, all fields will be sent.  */
  fields?: string[];
  /** Optional array of namespaces for any metafields that should be included with each webhook.  */
  metafield_namespaces?: string[];
  /** The Admin API version that Shopify uses to serialize webhook events. This value is inherited from the app that created the webhook subscription.  */
  api_version?: string;
  /** Optional array of namespaces for any private metafields that should be included with each webhook.  */
  private_metafield_namespaces?: string[];
};

export type Article = {
  /** The ID of the article.  */
  id?: number;
  /** The title of the article.  */
  title?: string;
  /** The date and time (ISO 8601 format) when the article was created.  */
  created_at?: Date;
  /** The text of the body of the article, complete with HTML markup.  */
  body_html?: string;
  /** The ID of the blog containing the article.  */
  blog_id?: number;
  /** The name of the author of the article.  */
  author?: string;
  /** A unique numeric identifier for the author of the article.  */
  user_id?: number;
  /** The date and time (ISO 8601 format) when the article was published.  */
  published_at?: Date;
  /** The date and time (ISO 8601 format) when the article was last updated.  */
  updated_at?: Date;
  /** A summary of the article, which can include HTML markup. The summary is used by the online store theme to display the article on other pages, such as the home page or the main blog page.  */
  summary_html?: string;
  /** The name of the template an article is using if it's using an alternate template. If an article is using the default article.liquid template, then the value returned is null.  */
  template_suffix?: null;
  /** A human-friendly unique string for the article that's automatically generated from the article's title.
  The handle is used in the article's URL.  */
  handle?: string;
  /** A comma-separated list of tags. Tags are additional short descriptors formatted as a string of comma-separated values.  */
  tags?: string;
  admin_graphql_api_id?: string;
  /** An image associated with the article. It can have the following properties:
  attachment: An image attached to article returned as Base64-encoded binary data.
  src: A source URL that specifies the location of the image.
  alt: Alternative text that describes the image.  */
  image?: Image;
  /** The additional information attached to an Article object. It has the following properties:
  key: An identifier for the metafield. (maximum: 30 characters)
  namespace: A container for a set of metadata. Namespaces help distinguish between metadata created by different apps. (maximum: 20 characters)
  value: The information to be stored as metadata.
  type: The metafield's information type. Refer to the full list of types.
  description (optional): Additional information about the metafield.
  For more information on attaching metadata to Shopify resources, see the Metafield resource.  */
  metafields?: Metafield;
  /** Whether the article is visible.  */
  published?: boolean;
};

export type Comment = {
  /** A unique numeric identifier for the comment.  */
  id?: number;
  /** The basic Textile markup of a comment.  */
  body?: string;
  /** The text of the comment, complete with HTML markup.  */
  body_html?: string;
  /** The name of the author of the comment.  */
  author?: string;
  /** The email address of the author of the comment.  */
  email?: string;
  /** The status of the comment. Valid values:
  pending: The comment has been created but is awaiting spam detection. Depending on the result of the spam detection and the shop owner's comment preferences, this property will be transitioned to either spam, unapproved, or approved.
  unapproved (default): The comment is awaiting approval by the shop owner. It's not visible to the readers of the blog.
  published: The comment has been approved (if the blog requires comments to be approved) and is visible to readers of the blog.
  spam: The comment has been marked as spam and removed from the Shopify admin. It's not visible to readers of the blog.
  removed: The comment has been removed by the shop owner. It's not visible to readers of the blog.  */
  status?: string;
  /** A unique numeric identifier for the article that the comment belongs to.  */
  article_id?: number;
  /** A unique numeric identifier for the blog containing the article that the comment belongs to.  */
  blog_id?: number;
  /** The date and time (ISO 8601  format) when the comment was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the comment was last modified. When the comment is created, this matches the value of created_at. If the blog requires comments to be approved, then this value is updated to the date and time when the comment is approved.  */
  updated_at?: Date;
  /** The IP address from which the comment was posted.  */
  ip?: string;
  /** The user agent string provided by the software used to create the comment (usually a browser).  */
  user_agent?: string;
  /** The date and time (ISO 8601 format) when the comment was published.  */
  published_at?: Date;
};

export type Collect = {
  /** A unique numeric identifier for the collect.  */
  id?: number;
  /** The ID of the custom collection containing the product.  */
  collection_id?: number;
  /** The unique numeric identifier for the product in the custom collection.  */
  product_id?: number;
  /** The date and time (ISO 8601 format) when the collect was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the collect was last updated.  */
  updated_at?: Date;
  /** The position of this product in a manually sorted custom collection. The first position is 1. This value is applied only when the custom collection is sorted manually.  */
  position?: number;
  /** This is the same value as position but padded with leading zeroes to make it alphanumeric-sortable. This value is applied only when the custom collection is sorted manually.  */
  sort_value?: string;
};

export type Product = {
  /** An unsigned 64-bit integer that's used as a unique identifier for the product. Each id is unique across the Shopify system. No two products will have the same id, even if they're from different shops.  */
  id?: number;
  /** The name of the product.  */
  title?: string;
  /** A description of the product. Supports HTML formatting.  */
  body_html?: string;
  /** The name of the product's vendor.  */
  vendor?: string;
  /** A categorization for the product used for filtering and searching products.  */
  product_type?: string;
  /** The date and time (ISO 8601 format) when the product was created.  */
  created_at?: Date;
  /** A unique human-friendly string for the product. Automatically generated from the product's title. Used by the Liquid templating language to refer to objects.  */
  handle?: string;
  /** The date and time (ISO 8601 format) when the product was last modified.
  A product's updated_at value can change for different reasons. For example, if an order is placed for a product that
  has inventory tracking set up, then the inventory adjustment is counted as an update.  */
  updated_at?: Date;
  /** The date and time (ISO 8601 format) when the product was
  published. Can be set to null to unpublish the product from the Online Store channel.  */
  published_at?: Date;
  /** The suffix of the Liquid template used for the product page. If this property is specified, then the product page uses a template called "product.suffix.liquid", where "suffix" is the value of this property. If this property is "" or null, then the product page uses the default template "product.liquid". (default: null)  */
  template_suffix?: string;
  /** Whether the product is published to the Point of Sale channel. Valid values:
  web: The product is published to the Online Store channel but not published to the Point of Sale channel.
  global: The product is published to both the Online Store channel and the Point of Sale channel.  */
  published_scope?: string;
  /** A string of comma-separated tags that are used for filtering and search.
  A product can have up to 250 tags. Each tag can have up to 255 characters.  */
  tags?: string;
  admin_graphql_api_id?: string;
  /** The custom product properties. For example, Size, Color, and Material. Each product can have up to 3 options and each option value can be up to 255 characters. Product variants are made of up combinations of option values.
  Options cannot be created without values. To create new options, a variant with an associated option value also needs to be created.  */
  options?: Option[];
  /** A list of product image objects, each one representing an image associated with the product.  */
  images?: Image[];
  image?: Image;
  /** The status of the product. Valid values:
  active: The product is ready to sell and is available to customers on the online store, sales channels, and apps. By default, existing products are set to active.
  archived: The product is no longer being sold and isn't available to customers on sales channels and apps.
  draft: The product isn't ready to sell and is unavailable to customers on sales channels and apps. By default, duplicated and unarchived products are set to draft.  */
  status?: string;
  /** An array of product variants, each representing a different version of the product.
  The position property is read-only. The position of variants is indicated by the order in which they are listed.  */
  variants?: Variant[];
};

export type Variant = {
  /** The unique numeric identifier for the product variant.  */
  id?: number;
  /** The unique numeric identifier for the product.  */
  product_id?: number;
  /** The title of the product variant. The title field is a concatenation of the option1, option2, and option3 fields. You can only update title indirectly using the option fields.  */
  title?: string;
  /** The price of the product variant.  */
  price?: string;
  /** A unique identifier for the product variant in the shop.  Required in order to connect to a FulfillmentService.  */
  sku?: string;
  /** The order of the product variant in the list of product variants.
  The first position in the list is 1.
  The position of variants is indicated by the order in which they are listed.  */
  position?: number;
  /** Whether customers are allowed to place an order for the product variant when it's out of stock. Valid values:
  deny: Customers are not allowed to place orders for the product variant if it's out of stock.
  continue: Customers are allowed to place orders for the product variant if it's out of stock.
  Default value: deny.  */
  inventory_policy?: string;
  /** The original price of the item before an adjustment or a sale.  */
  compare_at_price?: string;
  /** The fulfillment service associated with the product variant. Valid values: manual or the handle of a
  fulfillment service.  */
  fulfillment_service?: string;
  /** The fulfillment service that tracks the number of items in stock for the product variant.
  Valid values:
  shopify: You are tracking inventory yourself using the admin.
  null: You aren't tracking inventory on the variant.
  the handle of a fulfillment service that has inventory management enabled: This must be the same fulfillment service referenced by the fulfillment_service property.  */
  inventory_management?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  /** The date and time (ISO 8601 format) when the product variant was created.  */
  created_at?: Date;
  /** The date and time when the product variant was last modified.
  Gets returned in ISO 8601 format.  */
  updated_at?: Date;
  /** Whether a tax is charged when the product variant is sold.  */
  taxable?: boolean;
  /** The barcode, UPC, or ISBN number for the product.  */
  barcode?: string;
  /** The weight of the product variant in grams.  */
  grams?: number;
  /** The unique numeric identifier for a product's image.
  The image must be associated to the same product as the variant.  */
  image_id?: number;
  /** The weight of the product variant in the unit system specified with weight_unit.  */
  weight?: number;
  /** The unit of measurement that applies to the product variant's weight.
  If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied.
  Valid values: g, kg, oz, and lb.  */
  weight_unit?: string;
  /** The unique identifier for the inventory item, which is used in the Inventory API to query for inventory information.  */
  inventory_item_id?: number;
  /** An aggregate of inventory across all locations. To adjust inventory at a specific location, use the
  InventoryLevel resource.  */
  inventory_quantity?: number;
  /** This property is deprecated. Use the
  InventoryLevel resource instead.  */
  old_inventory_quantity?: number;
  /** A list of the variant's presentment prices and compare-at prices in each of the shop's enabled presentment currencies. Each price object has the following properties:
  currency_code: The three-letter code (ISO 4217 format) for one of the shop's enabled presentment currencies.
  amount: The variant's price or compare-at price in the presentment currency.
  Requires the header 'X-Shopify-Api-Features': 'include-presentment-prices'.  */
  presentment_prices?: PresentmentPrice[];
  /** This property is deprecated. Use the `requires_shipping` property on the InventoryItem resource instead.  */
  requires_shipping?: boolean;
  admin_graphql_api_id?: string;
  /** This parameter applies only to the stores that have the Avalara AvaTax app installed. Specifies the Avalara tax code for the product variant.  */
  tax_code?: string;
  /** This property is deprecated. Use the
  InventoryLevel resource instead.  */
  inventory_quantity_adjustment?: number;
  /** The custom properties that a shop owner uses to define product variants.
  You can define three options for a product variant: option1, option2, option3.
  Default value: Default Title.
  The title field is a concatenation of the option1, option2, and
  option3 fields. Updating the option fields updates the title field.  */
  option?: Option;
  option_values?: OptionValue[];
  formatted_price?: string;
  available?: boolean;
};

export type Payment = {
  /** A unique identifer for the payment generated by Shopify.  */
  id?: number;
  /** A unique idempotency token generated by the app that created the payment request.
  For more information, refer to Idempotent requests.  */
  unique_token?: string;
  /** A message describing the error that occured when attempting to process payment, if any.  */
  payment_processing_error_message?: string;
  fraudulent?: boolean;
  /** The details of the transaction, including the following attributes:
  amount: The amount of the transaction.
  amount_in: The amount in before rounding is applied. Not applicable to credit card payments.
  amount_out: The amount out after rounding is applied. Not applicable to credit card payments.
  amount_rounding: The amount of rounding applied. Not applicable to credit card payments.
  authorization: The authorization code returned by the payment provider.
  created_at: The date and time when the transaction was created.
  currency: The currency of the transaction.
  error_code: The error code returned by the payment provider, if any.
  gateway: The name of the payment provider which processed the transaction.
  id: The unique identifier of the transaction.
  kind: The kind of transaction processed, either authorization or sale.
  message: The message returned by the payment provider, if any.
  status: The status of the transaction, either success or failure./li>
  test: Whether or not the transaction was a test.  */
  transaction?: Transaction;
  /** The details of the credit card used for payment. The following attributes are available:
  first_name: The first name of the cardholder.
  last_name: The last name of the cardholder.
  first_digits: The first six digits of the credit card.
  last_digits: The last four digits of the credit card.
  brand: The credit card brand.
  expiry_month: The expiry month of the credit card.
  expiry_year: The expiry year of the credit card.  */
  credit_card?: CreditCard;
  /** Specifies the URL that your app or sales channel needs to send the customer to so that they can authenticate their payment. To learn more about how to use this property, refer to Authenticating payments with 3D Secure.  */
  next_action?: NextAction;
  checkout?: Checkout;
};

export type Balance = {
  currency?: string;
  amount?: string;
};

export type Dispute = {
  /** The ID of the dispute.  */
  id?: number;
  /** The ID of the order that the dispute belongs to.  */
  order_id?: number;
  /** Whether the dispute is still in the inquiry phase or has turned into a chargeback.
  Valid values:
  inquiry: The dispute is in the inquiry phase.
  chargeback: The dispute has turned into a chargeback.  */
  type?: string;
  /** The total amount disputed by the cardholder.  */
  amount?: string;
  /** The ISO 4217 currency code of the dispute amount.  */
  currency?: string;
  /** The reason of the dispute provided by the cardholder's bank. Valid values:
  bank_not_process: The customer's bank cannot process the charge.
  credit_not_processed: The customer claims that the purchased product was returned
  or the transaction was otherwise canceled, but the merchant have not yet provided a refund or credit.
  customer_initiated: The customer initiated the dispute, so the merchant should contact
  the customer for additional details to find out why the payment was disputed.
  debit_not_authorized: The customer's bank cannot proceed with the debit
  since it has not been authorized.
  duplicate: The customer claims they were charged multiple times
  for the same product or service.
  fraudulent: The cardholder claims that they didn't authorize the payment.
  general: The dispute is uncategorized, so the merchant should contact the customer for
  additional details to find out why the payment was disputed.
  incorrect_account_details: The customer account associated with the
  purchase is incorrect.
  insufficient_funds: The customer's bank account has insufficient funds.
  product_not_received: The customer claims they did not receive the products
  or services purchased.
  product_unacceptable: The product or service was received but was defective,
  damaged, or not as described.
  subscription_canceled: The customer claims that the merchant continued to charge them
  after a subscription was canceled.
  unrecognized: The customer doesn't recognize the payment appearing on
  their card statement.  */
  reason?: string;
  /** The reason for the dispute provided by the cardholder's bank.  */
  network_reason_code?: string;
  /** The current state of the dispute. Valid values:
  needs_response: The dispute has been open and needs an evidence submission.
  under_review: The evidence has been submitted and is being reviewed by the
  cardholder's bank.
  charge_refunded: The merchant refunded the inquiry amount.
  accepted: The merchant has accepted the dispute as being valid.
  won: The cardholder's bank reached a final decision in the merchant's favor.
  lost: The cardholder's bank reached a final decision in the buyer's favor.  */
  status?: string;
  /** The deadline for evidence submission.  */
  evidence_due_by?: Date;
  /** "The date and time (ISO 8601 format) when
  evidence was sent. Returns null if evidence has not yet been sent.  */
  evidence_sent_on?: Date;
  /** The date and time (ISO 8601 format) when
  this dispute was resolved. Returns null if the dispute is not yet resolved.  */
  finalized_on?: Date;
  initiated_at?: Date;
};

export type Summary = {
  adjustments_fee_amount?: string;
  adjustments_gross_amount?: string;
  charges_fee_amount?: string;
  charges_gross_amount?: string;
  refunds_fee_amount?: string;
  refunds_gross_amount?: string;
  reserved_funds_fee_amount?: string;
  reserved_funds_gross_amount?: string;
  retried_payouts_fee_amount?: string;
  retried_payouts_gross_amount?: string;
};

export type Country = {
  /** The ID for the country. The ID for a country is unique across all Shopify stores. The ID for a country in one shop will be different from the same country in another shop.  */
  id?: number;
  /** The full name of the country in English.  */
  name?: string;
  /** The national sales tax rate applied to orders made by customers from that country.  */
  tax?: number;
  /** The two-letter country code (ISO 3166-1 alpha-2 format).  */
  code?: string;
  tax_name?: string;
  /** The sub-regions of a country, such as its provinces or states. Each sub-region has the following properties:
  code: The two letter province or state code.
  country_id: The ID for the country to which this sub-region belongs.
  id: The ID for the particular sub-region.
  name: The name of the sub-region.
  tax: The tax value in decimal format.
  tax_name: The name of the tax as it is referred to in the applicable sub-region. For example, in Canada, the sales tax in the province Ontario is referred to as HST.
  tax_type: The tax type. Valid values: null, normal, or harmonized. If the value is harmonized, then the tax is compounded of the provincial and federal sales taxes.
  tax_percentage: The tax value in percent format.  */
  provinces?: Province[];
  shipping_zone_id?: number;
};

export type Customer = {
  /** A unique identifier for the customer.  */
  id?: number;
  /** The unique email address of the customer. Attempting to assign the same email address to
  multiple customers returns an error.  */
  email?: string;
  /** Whether the customer has consented to receive marketing material via email.  */
  accepts_marketing?: boolean;
  /** The date and time (ISO 8601 format) when the customer was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the customer information was last updated.  */
  updated_at?: Date;
  /** The customer's first name.  */
  first_name?: string;
  /** The customer's last name.  */
  last_name?: string;
  /** The number of orders associated with this customer.  */
  orders_count?: number;
  /** The state of the customer's account with a shop. Default value: disabled. Valid values:
  disabled: The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time.
  invited: The customer has received an email invite to create an account.
  enabled: The customer has created an account.
  declined: The customer declined the email invite to create an account.  */
  state?: string;
  /** The total amount of money that the customer has spent across their order history.  */
  total_spent?: string;
  /** The ID of the customer's last order.  */
  last_order_id?: number;
  /** A note about the customer.  */
  note?: string;
  /** Whether the customer has verified their email address.  */
  verified_email?: boolean;
  /** A unique identifier for the customer that's used with '         'Multipass login.  */
  multipass_identifier?: null;
  /** Whether the customer is exempt from paying taxes on their order. If true, then taxes won't be applied to an order at checkout. If false, then taxes will be applied at checkout.  */
  tax_exempt?: boolean;
  /** The unique phone number (E.164 format) for this customer. Attempting to assign the same phone number to multiple customers
  returns an error. The property can be set using different formats, but each format must represent a number that can be dialed
  from anywhere in the world. The following formats are all valid:
  6135551212
  +16135551212
  (613)555-1212
  +1 613-555-1212  */
  phone?: string;
  /** Tags that the shop owner has attached to the customer, formatted as a string of comma-separated values. A customer can have up to 250 tags. Each tag can have up to 255 characters.  */
  tags?: string;
  /** The name of the customer's last order. This is directly related to the name field on the Order resource.  */
  last_order_name?: string;
  /** The three-letter code (ISO 4217 format) for the currency
  that the customer used when they paid for their last order. Defaults to the shop currency. Returns the shop currency for test orders.  */
  currency?: string;
  /** A list of the ten most recently updated addresses for the customer. Each address has the following properties:
  address1: The customer's mailing address.
  address2: An additional field for the customer's mailing address.
  city: The customer's city, town, or village.
  company: The customer's company.
  country: The customer's country.
  country_code: The two-letter country code corresponding to the customer's country.
  country_name: The customer's normalized country name.
  customer_id: A unique identifier for the customer.
  default: Whether this address is the default address for the customer.
  first_name: The customer's first name.
  id: A unique identifier for the address.
  last_name: The customer's last name.
  name: The customer's first and last names.
  phone: The customer's phone number at this address.
  province: The customer's region name. Typically a province, a state, or a prefecture.
  province_code: The code for the region of the address, such as the province, state, or district. For example QC for Quebec, Canada.
  zip: The customer's postal code, also known as zip, postcode, Eircode, etc.  */
  addresses?: Address[];
  /** The date and time (ISO 8601 format) when the customer consented or objected to receiving marketing material by email. Set this value whenever the customer consents or objects to marketing materials.  */
  accepts_marketing_updated_at?: Date;
  /** The marketing subscription opt-in level (as described by the M3AAWG best practices
  guideline) that the customer gave when they consented to receive marketing material by email.
  If the customer does not accept email marketing, then this property will be set to null.
  Valid values:
  single_opt_in
  confirmed_opt_in
  unknown  */
  marketing_opt_in_level?: string;
  /** Whether the customer is exempt from paying specific taxes on their order. Canadian taxes only. Valid values:
  EXEMPT_ALL: This customer is exempt from all Canadian taxes.
  CA_STATUS_CARD_EXEMPTION: This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada.
  CA_DIPLOMAT_EXEMPTION: This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada.
  CA_BC_RESELLER_EXEMPTION: This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia.
  CA_MB_RESELLER_EXEMPTION: This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba.
  CA_SK_RESELLER_EXEMPTION: This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan.
  CA_BC_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia.
  CA_MB_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba.
  CA_NS_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia.
  CA_PE_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island.
  CA_SK_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan.
  CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia.
  CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan.
  CA_BC_SUB_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia.
  CA_SK_SUB_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan.
  CA_BC_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia.
  CA_SK_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan.
  CA_ON_PURCHASE_EXEMPTION: This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario.
  CA_MB_FARMER_EXEMPTION: This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba.
  CA_NS_FARMER_EXEMPTION: This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia.
  CA_SK_FARMER_EXEMPTION: This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan.  */
  tax_exemptions?: string[];
  /** The marketing consent information when the customer consented to receiving marketing
  material by SMS. The phone property is required to create a customer with SMS
  consent information and to perform an SMS update on a customer that doesn't have a phone number recorded.
  The customer must have a unique phone number associated to the record. The SMS marketing consent has the following properties:
  state: The current SMS marketing state for the customer.
  opt_in_level: The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
  that the customer gave when they consented to receive marketing material by SMS.
  consent_updated_at: The date and time at which the customer consented to receive marketing material by SMS.
  The customer's consent state reflects the consent record with the most recent
  last_consent_updated_at date. If no date is provided, then the date and time at which the consent information was sent is used.
  consent_collected_from: The source for whether the customer has consented to receive marketing material by SMS.  */
  sms_marketing_consent?: SmsMarketingConsent;
  admin_graphql_api_id?: string;
  /** The default address for the customer. The default address has the following properties:
  address1: The first line of the customer's mailing address.
  address2: An additional field for the customer's mailing address.
  city: The customer's city, town, or village.
  company: The customer's company.
  country: The customer's country.
  country_code: The two-letter country code corresponding to the customer's country.
  country_name: The customer's normalized country name.
  customer_id: A unique identifier for the customer.
  default: Returns true for each default address.
  first_name: The customer's first name.
  id: A unique identifier for the address.
  last_name: The customer's last name.
  name: The customer's first and last names.
  phone: The customer's phone number at this address.
  province: The customer's region name. Typically a province, a state, or a prefecture.
  province_code: The two-letter code for the customer's region.
  zip: The customer's postal code, also known as zip, postcode, Eircode, etc.  */
  default_address?: Address;
  /** Attaches additional metadata to a shop's resources:
  key (required): An identifier for the metafield (maximum of 30 characters).
  namespace(required): A container for a set of metadata (maximum of 20 characters). Namespaces help distinguish between metadata that you created and metadata created by another individual with a similar namespace.
  value (required): Information to be stored as metadata.
  value_type (required): The value type. Valid values: string and integer.
  description (optional): Additional information about the metafield.  */
  metafield?: Metafield;
};

export type PriceSet = {
  shop_money?: Price;
  presentment_money?: Price;
};

export type Property = {
  name?: string;
  value?: string;
};

export type LineItem = {
  id?: number;
  admin_graphql_api_id?: string;
  fulfillable_quantity?: number;
  fulfillment_service?: string;
  fulfillment_status?: string;
  gift_card?: boolean;
  grams?: number;
  name?: string;
  price?: string;
  price_set?: PriceSet;
  product_exists?: boolean;
  product_id?: number;
  properties?: Property[];
  quantity?: number;
  requires_shipping?: boolean;
  sku?: string;
  taxable?: boolean;
  title?: string;
  total_discount?: string;
  total_discount_set?: PriceSet;
  variant_id?: number;
  variant_inventory_management?: string;
  variant_title?: string;
  vendor?: string;
  tax_lines?: TaxLine[];
  duties?: Duty[];
  discount_allocations?: DiscountAllocation[];
  applied_discounts?: AppliedDiscount[];
  key?: string;
  destination_location_id?: number;
  origin_location_id?: number;
  presentment_title?: string;
  presentment_variant_title?: string;
  variant_price?: string;
  /** The ID of the user logged into Shopify POS who processed the order, if applicable.  */
  user_id?: number;
  unit_price_measurement?: unknown;
  rank?: unknown;
  /** The original price of the item before an adjustment or a sale.  */
  compare_at_price?: string;
  line_price?: string;
  applied_discount?: AppliedDiscount;
  custom?: boolean;
  image_url?: string;
  shop_id?: number;
  fulfillment_order_id?: number;
  line_item_id?: number;
  inventory_item_id?: number;
};

export type Location = {
  /** The ID for the location.  */
  id?: number;
  /** The name of the location.  */
  name?: string;
  /** The first line of the address.  */
  address1?: string;
  /** The second line of the address.  */
  address2?: string;
  /** The city the location is in.  */
  city?: string;
  /** The zip or postal code.  */
  zip?: string;
  /** The province the location is in.  */
  province?: string;
  /** The country the location is in.  */
  country?: string;
  /** The phone number of the location. This value can contain special characters like - and +.  */
  phone?: string;
  /** The date and time (ISO 8601 format) when the location was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the location was last updated.  */
  updated_at?: Date;
  /** The two-letter code (ISO 3166-1 alpha-2 format) corresponding to country the location is in.  */
  country_code?: string;
  country_name?: string;
  /** The two-letter code corresponding to province or state the location is in.  */
  province_code?: string;
  /** Whether this is a fulfillment service location. If true, then the location is a fulfillment service location. If false, then the location was created by the merchant and isn't tied to a fulfillment service.  */
  legacy?: boolean;
  /** Whether the location is active. If true, then the location can be used to sell products, stock inventory, and fulfill orders. Merchants can deactivate locations from the Shopify admin. Deactivated locations don't contribute to the shop's location limit.  */
  active?: boolean;
  admin_graphql_api_id?: string;
  /** The localized name of the location's country.  */
  localized_country_name?: string;
  /** The localized name of the location's region. Typically a province, state, or prefecture.  */
  localized_province_name?: string;
};

export type Redirect = {
  /** The ID for the redirect.  */
  id?: number;
  /** The old path to be redirected. When the user visits this path, they will be redirected to the target. (maximum: 1024 characters)  */
  path?: string;
  /** The target location where the user will be redirected. When the user visits the old path specified by the path property, they will be redirected to this location. This property can be set to any path on the shop's site, or to an external URL. (maximum: 255 characters)  */
  target?: string;
};

export type Checkout = {
  /** The ID for the checkout.  */
  id?: number;
  /** A unique ID for a checkout.  */
  token?: string;
  /** The ID for the cart that's attached to the checkout.  */
  cart_token?: string;
  /** The customer's email address.  */
  email?: string;
  /** The payment gateway used by the checkout. For abandoned checkouts, this value is always null.  */
  gateway?: string;
  /** Whether the customer would like to receive email updates from the shop. This is set by the I want to receive occasional emails about new products, promotions and other news checkbox during checkout.  */
  buyer_accepts_marketing?: boolean;
  /** The date and time (ISO 8601 format) when the checkout was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the checkout was last modified.  */
  updated_at?: Date;
  /** The URL for the page where the customer entered the shop.  */
  landing_site?: string;
  /** The text of an optional note that a shop owner can attach to the order.  */
  note?: string;
  note_attributes?: NoteAttribute;
  /** The website that referred the customer to the shop.  */
  referring_site?: string;
  /** Information about the chosen shipping method. It has the following properties:
  code: A reference to the shipping method.
  price: The price of the shipping method in presentment currency.
  source: The channel where the checkout originated. Example value: shopify.
  title: The title of the shipping method. Example value: International Shipping.  */
  shipping_lines?: ShippingLine[];
  /** Whether taxes are included in the price.  */
  taxes_included?: boolean;
  /** The sum of all the weights in grams of the line items in the checkout.  */
  total_weight?: number;
  /** The three-letter code (ISO 4217 format) of the shop's default currency at the time of checkout. For the currency that the customer used at checkout, see presentment_currency.  */
  currency?: string;
  /** The date and time (ISO 8601 format) when the checkout was completed. For abandoned checkouts, this value is null until a customer completes the checkout using the recovery URL.  */
  completed_at?: Date;
  /** The date and time (ISO 8601 format) when the checkout was closed. If the checkout was not closed, then this value is null.  */
  closed_at?: null;
  /** The ID of the user who created the checkout.  */
  user_id?: number;
  /** The ID of the physical location where the checkout was processed.  */
  location_id?: number;
  source_identifier?: string;
  source_url?: string;
  /** The ID of the Shopify POS device that created the checkout.  */
  device_id?: number;
  /** The customer's phone number for receiving SMS notifications.  */
  phone?: string;
  /** The two or three-letter language code, optionally followed by a region modifier.
  Example values: en, en-CA.  */
  customer_locale?: string;
  /** A list of line items, each containing information about an item in the checkout. Each object has the following properties:
  fulfillment_service: The fulfillment service provider for the item.
  fulfillment_status: The status of the item's fulfillment. Valid values: fulfilled, null, partial.
  grams: The weight of the item in grams.
  price: The price of the item in presentment currency.
  product_id: The product ID od the item.
  quantity: The number of products that were purchased.
  requires_shipping: Whether the items requires shipping..
  sku: A unique identifier for the item in the shop.
  title: The title of the product.
  variant_id: The product variant ID of item.
  variant_title: The title of the product variant.
  vendor: The name of the item's supplier.  */
  line_items?: LineItem[];
  name?: string;
  /** The source of the order risk.  */
  source?: string;
  /** The recovery URL that's sent to a customer so they can recover their checkout.  */
  abandoned_checkout_url?: string;
  /** Discount codes applied to the checkout. Returns an empty array when no codes are applied.
  Each discount code has the following fields:
  amount: The amount of the discount in presentment currency.
  code: The discount code.
  type: The type of discount. Valid values: percentage, shipping, fixed_amount. (default: fixed_amount)  */
  discount_codes?: DiscountCode[];
  /** An array of tax line objects, each of which details a tax applicable to the checkout. Each object has the following properties:
  price: The amount of tax to be charged in presentment currency.
  rate: The rate of tax to be applied.
  title: The name of the tax.
  channel_liable: Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for the tax line.  */
  tax_lines?: TaxLine[];
  /** Where the checkout originated. Valid values: web, pos, iphone, android.  */
  source_name?: string;
  /** The three-letter code (ISO 4217 format) of the currency that the customer used at checkout. For the shop's default currency, see currency.  */
  presentment_currency?: string;
  /** Whether the customer would like to receive SMS updates from the shop. This is set by the Text me with news and offers checkbox during checkout.  */
  buyer_accepts_sms_marketing?: boolean;
  /** The phone number used to opt in to SMS marketing during checkout.  */
  sms_marketing_phone?: string;
  /** The total amount of discounts to be applied in presentment currency.  */
  total_discounts?: string;
  /** The sum of the prices of all line items in the checkout in presentment currency.  */
  total_line_items_price?: string;
  /** The sum of line item prices, all discounts, shipping costs, and taxes for the checkout in presentment currency.  */
  total_price?: string;
  /** The sum of all the taxes applied to the checkout in presentment currency.  */
  total_tax?: string;
  /** The price of the checkout in presentment currency before shipping and taxes.  */
  subtotal_price?: string;
  /** The total duties of the checkout in presentment currency.  */
  total_duties?: string;
  /** The mailing address associated with the payment method. It has the following properties:
  address1: The street address of the billing address.
  address2: An optional additional field for the street address of the billing address.
  city: The city of the billing address.
  company: The company of the person associated with the billing address.
  country: The name of the country of the billing address.
  country_code: The two-letter code (ISO 3166-1 alpha-2 format) for the country of the billing address.
  default: Whether this is the default address for the customer.
  first_name: The first name of the person associated with the payment method.
  last_name: The last name of the person associated with the payment method.
  latitude: The latitude of the billing address.
  longitude: The longitude of the billing address.
  name: The full name of the person associated with the payment method.
  phone: The phone number at the billing address.
  province: The name of the state or province of the billing address.
  province_code: The two-letter abbreviation of the state or province of the billing address.
  zip: The zip or postal code of the billing address.  */
  billing_address?: Address;
  /** The mailing address where the order will be shipped to. It has the following properties:
  address1: The street address of the shipping address.
  address2: An optional additional field for the street address of the shipping address.
  city: The city of the shipping address.
  company: The company of the person associated with the shipping address.
  country: The name of the country of the shipping address.
  country_code: The two-letter code (ISO 3166-1 alpha-2 format) for the country of the shipping address.
  first_name: The first name of the person associated with the shipping address.
  last_name: The last name of the person associated with the shipping address.
  latitude: The latitude of the shipping address.
  longitude: The longitude of the shipping address.
  name: The full name of the person associated with the shipping address.
  phone: The phone number at the shipping address.
  province: The name of the state or province of the shipping address.
  province_code: The two-letter abbreviation of the state or province of the shipping address.
  zip: The zip or postal code of the shipping address.  */
  shipping_address?: ShippingAddress;
  /** Information about the customer. For more information, see the Customer resource.  */
  customer?: Customer;
  /** The ID of the customer associated with this checkout.  */
  customer_id?: number;
  /** The discount code that is applied to the checkout. This populates applied_discount with
  the appropriate metadata for that discount code. To remove a discount code, send an empty string or
  null.  */
  discount_code?: string;
  legal_notice_url?: string;
  order_id?: number;
  order_status_url?: string;
  /** An object containing the ID, name, and status page URL of the associated order when the checkout is complete. Default value: null.  */
  order?: Order;
  /** The amount left to be paid in presentment currency. This is equal to the sum of the checkout line prices, taxes, and shipping minus discounts and gift cards.  */
  payment_due?: string;
  /** The URL that must be used to store credit cards in Shopify's card vault. These URLs are subject to change, so you should always use the one supplied here. The general pattern for the URLs is https://elb.deposit.shopifycs.com/sessions.  */
  payment_url?: string;
  payments?: Payment[];
  shopify_payments_account_id?: number;
  privacy_policy_url?: string;
  refund_policy_url?: any;
  /** Whether the checkout requires shipping. If true, then shipping_line must be set before creating a payment.  */
  requires_shipping?: boolean;
  /** The time in seconds that the line item products will be held. Default value: 0. This property is not writable.  */
  reservation_time_left?: number;
  /** The reservation time in seconds for the line item products. Default value: null. This property is not writable.  */
  reservation_time?: string;
  subscription_policy_url?: string;
  shipping_policy_url?: string;
  tax_exempt?: boolean;
  terms_of_sale_url?: string;
  terms_of_service_url?: string;
  total_tip_received?: string;
  /** The URL pointing to the checkout accessible from the web.  */
  web_url?: string;
  total_additional_fees?: string;
  /** A list of gift card objects, each containing information about a gift card applied to this checkout.
  Gift cards can be applied to a checkout by passing { "checkout": { "gift_cards": [{ "code": "a gift card code" }, { "code": "another gift card code" }] } }.
  Each gift card object has the following properties:
  amount_used: The amount of the gift card used by this checkout in presentment currency.
  code: The gift card code.
  balance: The amount left on the gift card after being applied to this checkout in presentment currency.
  id: The ID for the applied gift card.
  last_characters: The last four characters of the applied gift card for display back to the user.
  Updating the gift card list overwrites any previous list already defined in the checkout. To remove a gift card from the list of applied gift cards, re-apply the gift_cards array without that gift card.  */
  gift_cards?: CheckoutGiftCard[];
  tax_manipulations?: unknown[];
  /** The selected shipping rate. A new shipping rate can be selected by updating the value for handle.
  A shipping line is required when requires_shipping is true. Learn more about
  selecting shipping rates.  */
  shipping_line?: ShippingLine;
  /** The selected shipping rate. This property is not writable.  */
  shipping_rate?: ShippingRate;
  credit_card?: CreditCard;
  /** A cart-level discount applied to the checkout. Apply a discount by
  specifying values for amount, title, description, value,
  and value_type.
  amount: The amount that is deducted from payment_due in presentment currency.
  title: The title to categorize the applied discount.
  description: The description of the applied discount.
  value: The value that was used to calculate the final applied discount amount.
  value_type: The type of value that was used to calculate the final applied discount amount. Valid values: fixed_amount and percentage.
  non_applicable_reason: The reason why the discount is not applicable, if the discount cannot be applied to the checkout.
  applicable: Whether this discount code can be applied to the checkout.
  application_type: Describes how the discount was applied to the checkout. Possible values:
  automatic: The discount was applied automatically.
  discount_code: The merchant or customer entered a discount code.
  manual: The discount was applied manually by the merchant or an app.
  script: The discount was applied by a Shopify Script.  */
  applied_discount?: AppliedDiscount;
};

export type Shipping = {
  amount?: string;
  tax?: string;
  maximum_refundable?: string;
};

export type GiftCard = {
  /** The ID of the gift card.  */
  id?: number;
  /** The balance of the gift card.  */
  balance?: string;
  /** The date and time (ISO 8601 format) when the gift card was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the gift card was last modified.  */
  updated_at?: Date;
  /** The currency of the gift card.  */
  currency?: string;
  /** The initial value of the gift card when it was created.  */
  initial_value?: string;
  /** The date and time (ISO 8601 format) when the gift card was disabled.  */
  disabled_at?: Date;
  /** The ID of the line item that caused the creation of this gift card, if it was created by an order.  */
  line_item_id?: number;
  /** The ID of the app that issued the gift card, if it was issued by an app.  */
  api_client_id?: number;
  /** The ID of the user that issued the gift card, if it was issued by a user.  */
  user_id?: number;
  /** The ID of a customer who is associated with this gift card.  */
  customer_id?: CustomerId;
  /** The text of an optional note that a merchant can attach to the gift card. Not visible to customers.  */
  note?: string;
  /** The date (YYYY-MM-DD format) when the gift card expires. Returns null if the gift card doesn't have an expiration date.  */
  expires_on?: string;
  /** The suffix of the Liquid template that's used to render the gift card online. For example, if the value is birthday,
  then the gift card is rendered using the template gift_card.birthday.liquid. When the value is null,
  the default gift_card.liquid template is used.  */
  template_suffix?: string;
  /** The last four characters of the gift card code. Because gift cards are alternative payment methods, the full code cannot be retrieved.  */
  last_characters?: string;
  /** The ID of the order that caused the creation of this gift card, if it was created by an order.  */
  order_id?: number;
  /** The gift card code, which is a string of alphanumeric characters. For security reasons, this is available only upon creation of the gift card. (minimum: 8 characters, maximum: 20 characters)  */
  code?: string;
};

export type Currency = {
  /** The three-letter code (ISO 4217 format) for the currency associated with this setting.  */
  currency?: string;
  /** The date and time (ISO 8601 format) when
  the conversion rate associated with this currency was last updated. If manual FX rates are active on a shop, then the
  updated date of these rates will replace the automatic conversion rates. Conversion rates are checked every 15
  minutes, but typically updated only a few times a day. Manual FX rates are updated at the merchant's request.  */
  rate_updated_at?: Date;
  enabled?: boolean;
};

export type Province = {
  /** The ID for the province.  */
  id?: number;
  /** The ID for the country that the province belongs to.  */
  country_id?: number;
  /** The full name of the province.  */
  name?: string;
  /** The standard abbreviation for the province.  */
  code?: string;
  /** The sales tax rate to be applied to orders made by customers from this province.  */
  tax?: number;
  /** The name of the tax for this province.  */
  tax_name?: string;
  /** The tax type. Valid values: null, normal, harmonized, or compounded.
  A harmonized tax is a combination of provincial and federal sales taxes.
  Normal and harmonized tax rates are applied to the pre-tax value of an order, but a compounded tax rate is applied on top of other tax rates.
  For example, if a $100 order receives a 5% normal tax rate and a 2% compound tax rate, then the post-tax total is $107.10 ((100 x 1.05) x 1.02 = 107.1).  */
  tax_type?: string;
  /** The ID for the shipping zone that the province belongs to.  */
  shipping_zone_id?: number;
  /** The province's tax in percent format.  */
  tax_percentage?: number;
};

export type Metafield = {
  /** The name of the metafield. Minimum length: 3 characters. Maximum length: 30 characters.  */
  key?: string;
  /** The information to be stored as metadata. Maximum length: 512 characters when metafield namespace is equal to tags and key is equal to alt.
  When using type, see this list of validations.
  When using the deprecated value_type, the maximum length of value varies:
  If value_type is a string, then maximum length: 5,000,000 characters.
  If value_type is an integer, then maximum length: 100,000 characters.
  If value_type is a json_string, then maximum length: 100,000 characters.  */
  value?: number;
  /** A container for a set of metafields. You need to define a custom namespace
  for your metafields to distinguish them from the metafields used by other apps. Minimum length: 2 characters.
  Maximum length: 20 characters.  */
  namespace?: string;
  /** Caution
  value_type is deprecated and replaced by type in API version 2021-07.
  The metafield's information type. Valid values: string, integer, json_string.  */
  value_type?: string;
  /** The unique ID of the metafield.  */
  id?: number;
  /** A description of the information that the metafield contains.  */
  description?: string;
  /** The unique ID of the resource that the metafield is attached to.  */
  owner_id?: number;
  /** The date and time (ISO 8601 format) when the metafield was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the metafield was last updated.  */
  updated_at?: Date;
  /** The type of resource that the metafield is attached to.  */
  owner_resource?: string;
  /** The metafield's information type. See the full list of types.  */
  type?: string;
  admin_graphql_api_id?: string;
};

export type PriceRule = {
  /** The ID for the price rule.  */
  id?: number;
  /** The value type of the price rule. Valid values:
  fixed_amount: Applies a discount of value as a unit of the store's currency. For example, if value is -30 and the store's currency is USD,
  then $30 USD is deducted when the discount is applied.
  percentage: Applies a percentage discount of value. For example, if value is -30, then 30% will be deducted when the discount is applied.
  If target_type is shipping_line, then only percentage is accepted.  */
  value_type?: string;
  /** The value of the price rule. If if the value of target_type is shipping_line, then only -100 is accepted.
  The value must be negative.  */
  value?: string;
  /** The customer selection for the price rule. Valid values:
  all: The price rule is valid for all customers.
  prerequisite: The customer must either belong to one of the customer saved searches specified by prerequisite_saved_search_ids, or be one of the customers specified by prerequisite_customer_ids.  */
  customer_selection?: string;
  /** The target type that the price rule applies to. Valid values:
  line_item: The price rule applies to the cart's line items.
  shipping_line: The price rule applies to the cart's shipping lines.  */
  target_type?: string;
  /** The target selection method of the price rule. Valid values:
  all: The price rule applies the discount to all line items in the checkout.
  entitled: The price rule applies the discount to selected entitlements only.  */
  target_selection?: string;
  /** The allocation method of the price rule. Valid values:
  each: The discount is applied to each of the entitled items. For example, for a price rule that takes $15 off,
  each entitled line item in a checkout will be discounted by $15.
  across: The calculated discount amount will be applied across the entitled items. For example, for a price rule
  that takes $15 off, the discount will be applied across all the entitled items.
  When the value of target_type is shipping_line, then this value must be each.  */
  allocation_method?: string;
  /** The number of times the discount can be allocated on the cart - if eligible. For example a Buy 1 hat Get 1 hat for free discount can be applied 3 times on a cart having more than 6 hats, where maximum of 3 hats get discounted - if the allocation_limit is 3. Empty (null) allocation_limit means unlimited number of allocations.
  Caution
  allocation_limit is only working with Buy X Get Y discount. The default value on creation will be null (unlimited).  */
  allocation_limit?: number;
  /** Whether the generated discount code will be valid only for a single use per customer. This is tracked using customer ID.  */
  once_per_customer?: boolean;
  /** The maximum number of times the price rule can be used, per discount code.  */
  usage_limit?: number;
  /** The date and time (ISO 8601 format) when the price rule starts.  */
  starts_at?: Date;
  /** The date and time (ISO 8601  format) when the price rule ends. Must be after starts_at.  */
  ends_at?: Date;
  /** The date and time (ISO 8601 format) when the price rule was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the price rule was updated.  */
  updated_at?: Date;
  /** A list of IDs of products that will be entitled to the discount. It can be used only with target_type set to line_item
  and target_selection set to entitled.
  If a product variant is included in entitled_variant_ids, then entitled_product_ids can't include the ID of the product associated with that variant.  */
  entitled_product_ids?: number[];
  /** A list of IDs of product variants that will be entitled to the discount. It can be used only with target_type set to line_item
  and target_selection set to entitled.
  If a product is included in entitled_product_ids, then entitled_variant_ids can't include the ID of any variants associated with that product.  */
  entitled_variant_ids?: number[];
  /** A list of IDs of collections whose products will be eligible to the discount. It can be used only with
  target_type set to line_item and target_selection set to entitled.
  It can't be used in combination with entitled_product_ids or entitled_variant_ids.  */
  entitled_collection_ids?: number[];
  /** A list of IDs of shipping countries that will be entitled to the discount. It can be used only with target_type set to shipping_line and target_selection set to entitled.  */
  entitled_country_ids?: EntitledCountryId;
  /** List of product ids that will be a prerequisites for a Buy X Get Y type discount. The prerequisite_product_ids can be used only with:
  target_type set to line_item,
  target_selection set to entitled,
  allocation_method set to each and
  prerequisite_to_entitlement_quantity_ratio defined.
  Caution
  If a product variant is included in prerequisite_variant_ids, then prerequisite_product_ids can't include the ID of the product associated with that variant.  */
  prerequisite_product_ids?: number[];
  /** List of variant ids that will be a prerequisites for a Buy X Get Y type discount. The entitled_variant_ids can be used only with:
  target_type set to line_item,
  target_selection set to entitled,
  allocation_method set to each and
  prerequisite_to_entitlement_quantity_ratio defined.
  Caution
  If a product is included in prerequisite_product_ids, then prerequisite_variant_ids can't include the ID of any variants associated with that product.  */
  prerequisite_variant_ids?: number[];
  /** List of collection ids that will be a prerequisites for a Buy X Get Y discount. The entitled_collection_ids can be used only with:
  target_type set to line_item,
  target_selection set to entitled,
  allocation_method set to each and
  prerequisite_to_entitlement_quantity_ratio defined.
  Cannot be used in combination with prerequisite_product_ids or prerequisite_variant_ids.  */
  prerequisite_collection_ids?: number[];
  /** A list of customer saved search IDs. For the price rule to be applicable, the customer must be in the group of customers matching a customer saved search.
  If prerequisite_saved_search_ids is populated, then prerequisite_customer_ids must be empty.  */
  prerequisite_saved_search_ids?: number[];
  /** A list of customer IDs. For the price rule to be applicable, the customer must match one of the specified customers.
  If prerequisite_customer_ids is populated, then prerequisite_saved_search_ids must be empty.  */
  prerequisite_customer_ids?: number[];
  /** The minimum subtotal for the price rule to be applicable. It has the following property:
  greater_than_or_equal_to: The subtotal of the entitled cart items must be greater than or equal to this value for the discount to apply.  */
  prerequisite_subtotal_range?: PrerequisiteSubtotalRange;
  /** The minimum number of items for the price rule to be applicable. It has the following property:
  greater_than_or_equal_to: The quantity of an entitled cart item must be greater than or equal to this value.  */
  prerequisite_quantity_range?: PrerequisiteSubtotalRange;
  /** The maximum shipping price for the price rule to be applicable. It has the following property:
  less_than_or_equal_to: The shipping price must be less than or equal to this value.  */
  prerequisite_shipping_price_range?: PrerequisiteShippingPriceRange;
  /** Buy/Get ratio for a Buy X Get Y discount. prerequisite_quantity defines the necessary 'buy' quantity and entitled_quantity the offered 'get' quantity.
  The prerequisite_to_entitlement_quantity_ratio can be used only with:
  value_type set to percentage,
  target_type set to line_item,
  target_selection set to entitled,
  allocation_method set to each,
  prerequisite_product_ids or prerequisite_variant_ids or prerequisite_collection_ids defined and
  entitled_product_ids or entitled_variant_ids or entitled_collection_ids defined.
  Caution
  Cannot be used in combination with prerequisite_subtotal_range, prerequisite_quantity_range or prerequisite_shipping_price_range.  */
  prerequisite_to_entitlement_quantity_ratio?: PrerequisiteToEntitlementQuantityRatio;
  /** The prerequisite purchase for a Buy X Get Y discount. It has the following property:
  prerequisite_amount: The minimum purchase amount required to be entitled to the discount.  */
  prerequisite_to_entitlement_purchase?: PrerequisiteToEntitlementPurchase;
  /** The title of the price rule. This is used by the Shopify admin search to retrieve discounts. It is also displayed on the Discounts page of the Shopify admin for bulk discounts.
  For non-bulk discounts, the discount code is displayed on the admin.
  For a consistent search experience, use the same value for title as the code property of the associated discount code.  */
  title?: string;
  admin_graphql_api_id?: string;
};

export type ScriptTag = {
  /** The ID for the script tag.  */
  id?: number;
  /** The URL of the remote script.  */
  src?: string;
  /** The DOM event that triggers the loading of the script. Valid values: onload.  */
  event?: string;
  /** The date and time (ISO 8601) when the script tag was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601) when the script tag was last updated.  */
  updated_at?: Date;
  /** The page or pages on the online store where the script should be included. Valid values:
  online_store: Include the script only on the web storefront.
  order_status: Include the script only on the order status page.
  all: Include the script on both the web storefront and the order status page.  */
  display_scope?: string;
  /** Whether the Shopify CDN can cache and serve the script tag. Valid values:
  true: The script will be cached and served by the CDN. The cache expires 15 minutes after the script tag is successfully returned.
  false: The script will be served as is.
  Default value: false.  */
  cache?: boolean;
};

export type Engagement = {
  occurred_on?: string;
  fetched_at?: string;
  views_count?: number;
  impressions_count?: number;
  clicks_count?: number;
  favorites_count?: number;
  comments_count?: number;
  shares_count?: number;
  ad_spend?: string;
  currency_code?: string;
  is_cumulative?: boolean;
  unsubscribes_count?: number;
  complaints_count?: number;
  fails_count?: number;
  sends_count?: number;
  unique_views_count?: number;
  unique_clicks_count?: number;
  utc_offset?: string;
};

export type DraftOrder = {
  /** The ID of the draft order.  */
  id?: number;
  /** The text of an optional note that a shop owner can attach to the draft order.  */
  note?: string;
  /** The customer's email address.  */
  email?: string;
  /** Whether taxes are included in the order subtotal.
  Valid values are true or false.  */
  taxes_included?: boolean;
  /** The three letter code (ISO 4217 format) for the currency used for the payment.  */
  currency?: string;
  /** The date and time (ISO 8601 format) when the invoice was emailed to the customer.  */
  invoice_sent_at?: Date;
  /** The date and time (ISO 8601 format) when the order was created in Shopify.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the order was last modified.  */
  updated_at?: Date;
  /** Whether taxes are exempt for the draft order. If set to false,
  then Shopify refers to the taxable field for each line_item.
  If a customer is applied to the draft order, then Shopify uses the customer's tax_exempt field instead.  */
  tax_exempt?: boolean;
  /** The date and time (ISO 8601 format) when the order is created and the draft order is completed.  */
  completed_at?: Date;
  /** Name of the draft order.  */
  name?: string;
  /** The status of a draft order as it transitions into an order. When a draft order is created it is set to open status.
  The invoice can then be sent to the customer, and status changes to invoice_sent.
  The draft order can then be paid, set to pending, or paid by credit card. In each case, the draft order is set to completed and an order is created.
  After a draft order is set to completed the only further modifications that can be made are adding tags or metafields.
  Valid values:
  open: Draft order is open.
  invoice_sent: Invoice has been sent for the draft order.
  completed: Draft order has been completed and turned into an order.  */
  status?: string;
  /** Product variant line item or custom line item associated to the draft order.
  Each draft order must include at least one line_item.
  Each line_item object has the following properties:
  custom: Read only field Whether this is a custom line item or a product variant line item.
  If set to true indicates a custom line item.
  If set to false indicates a product variant line item.
  id: The ID of the line item.
  variant_id: The ID of the product variant ID corresponding to the line item. Required for a product variant line item. Set to null for a custom line item.
  product_id: The ID of the product corresponding to the line item’s product variant.
  name: The name of the product.
  variant_title: The title of the product variant. Defaults to Custom for custom line items created via the API.
  vendor: Vendor.
  quantity: The number of products that were purchased.
  gift_card: Indicates if the product is a gift card. Valid values are true or false.
  fulfillment_service: Service provider responsible for fulfillment. Valid values are either manual or the name of the provider. eg amazon, shipwire, etc. Defaults to manual for custom line items.
  properties: An array of custom information for an item that has been added to the draft order,
  often used to provide product customization options.
  Copied to created order when draft order is completed.
  applied_discount: The discount applied to the line item. For more information, see
  applied_discount.
  tax_line: The calculated rate and amount of taxes. For more information, see tax_lines.
  title: The title of the product or variant. Only applicable to custom line items. Required field.
  price: The price of the item before discounts have been applied. Only applicable to custom line items. Required field.
  grams: Weight in grams. Only applicable to custom line items. If not specified, defaults to 0.
  requires_shipping: Whether the fulfillment requires shipping. Applicable only to custom line items. Valid values are true or false.
  sku: A unique identifier of the item in the fulfillment. Applicable only to custom line items.
  taxable: Whether the product is taxable. Only applicable to custom line items.  */
  line_items?: LineItem[];
  /** The mailing address to where the order will be shipped. This address is optional and will not be available on orders that do not require shipping. It has the following properties:
  address1: The street address of the shipping address.
  address2: An optional additional field for the street address of the shipping address.
  city: The city of the shipping address.
  company: The company of the person associated with the shipping address.
  country: The name of the country of the shipping address.
  country_code: The two-letter code for the country of the shipping address.
  first_name: The first name of the person associated with the payment method.
  last_name: The last name of the person associated with the payment method.
  latitude: The latitude of the shipping address.
  longitude: The longitude of the shipping address.
  name: The full name of the person associated with the payment method.
  phone: The phone number at the shipping address.
  province: The name of the state or province of the shipping address.
  province_code: The two-letter abbreviation of the state or province of the shipping address.
  zip: The zip or postal code of the shipping address.  */
  shipping_address?: ShippingAddress;
  /** The mailing address associated with the payment method. This address is an optional field that won't be available on orders that do not require a payment method. It has the following properties:
  address1: The street address of the billing address.
  address2: An optional additional field for the street address of the billing address.
  city: The city of the billing address.
  company: The company of the person associated with the billing address.
  country: The name of the country of the billing address.
  country_code: The two-letter code (ISO 3166-1 alpha-2 two-letter country code) for the country of the billing address.
  first_name: The first name of the person associated with the payment method.
  last_name: The last name of the person associated with the payment method.
  latitude: The latitude of the billing address.
  longitude: The longitude of the billing address.
  name: The full name of the person associated with the payment method.
  phone: The phone number at the billing address.
  province: The name of the billing address region, such as province, state, or prefecture.
  province_code: The two-letter abbreviation of the region for the billing address.
  zip: The postal code of the billing address, such as zip, postcode, or Eircode.  */
  billing_address?: Address;
  /** The URL for the invoice.  */
  invoice_url?: string;
  /** The discount applied to the line item or the draft order object. Each draft order object can have one applied_discount object and each draft order line item can have its own applied_discount. The object has the following properties:
  title: Title of the discount.
  description: Reason for the discount.
  value: The value of the discount. If the type of discount is fixed_amount, then it corresponds to a fixed dollar amount. If the type is percentage, then it corresponds to percentage.
  value_type: The type of discount. Valid values: percentage, fixed_amount.
  amount: The applied amount of the discount, based on the setting of value_type. For more information, see Applying discounts.  */
  applied_discount?: AppliedDiscount;
  /** The ID of the order that 's created and associated with the draft order after the draft order is completed.  */
  order_id?: number;
  /** A shipping_line object, which details the shipping method used. The object has the following properties:
  custom: Whether this is a regular shipping line or custom shipping line.
  handle: The handle of the shipping rate which was selected and applied. Required for regular shipping lines.
  title: The title of the shipping method. Required for custom shipping lines. (maximum: 255 characters)
  price: The price of the shipping method. Required for custom shipping lines.  */
  shipping_line?: ShippingLine;
  /** An array of tax line objects, each of which details a tax applicable to the order. Each object has the following properties:
  price: The amount of tax to be charged.
  rate: The rate of tax to be applied.
  title: The name of the tax.  */
  tax_lines?: TaxLine[];
  /** A comma-seperated list of additional short descriptors, commonly used for filtering and searching.
  Each individual tag is limited to 40 characters in length. For example, tags: "tag1","tag2","tag3".  */
  tags?: string;
  /** Extra information that is added to the order. Appears in the Additional details section of an order details page. Each array entry must contain a hash with name and value keys.  */
  note_attributes?: NoteAttribute[];
  /** The sum of all the prices of all the items in the order,
  taxes and discounts included.  */
  total_price?: string;
  /** the price of the order before shipping and taxes.  */
  subtotal_price?: string;
  /** The sum of all the taxes applied to the order.  */
  total_tax?: string;
  presentment_currency?: string;
  total_line_items_price_set?: PriceSet;
  total_price_set?: PriceSet;
  subtotal_price_set?: PriceSet;
  total_tax_set?: PriceSet;
  total_discounts_set?: PriceSet;
  total_shipping_price_set?: PriceSet;
  /** The terms and conditions under which a payment should be processed.
  amount: The amount that is owed according to the payment terms.
  currency: The presentment currency for the payment.
  payment_terms_name: The name of the selected payment terms template for the draft order.
  payment_terms_type: The type of selected payment terms template for the draft order.
  due_in_days: The number of days between the invoice date and due date that is defined in the selected payment terms template.
  payment_schedules: An array of schedules associated to the payment terms.
  amount: The amount that is owed according to the payment terms.
  currency: The presentment currency for the payment.
  issued_at: The date and time when the payment terms were initiated.
  due_at: The date and time when the payment is due. Calculated based on issued_at and due_in_days or a customized fixed date if the type is fixed.
  completed_at: The date and time when the purchase is completed. Returns null initially and updates when the payment is captured.
  expected_payment_method: The name of the payment method gateway.  */
  payment_terms?: PaymentTerm;
  admin_graphql_api_id?: string;
  /** Information about the customer. To load a customer, provide the ID as part  of the draft order object in the Create POST request.
  To remove a customer, set the customer property to null as part of the  Create POST request.
  For more information, see Loading  and removing customers. For more information about the customer object,  see the Customer resource.  */
  customer?: Customer;
  /** Whether the customer is exempt from paying specific taxes on their order. Canadian taxes only. Valid values:
  EXEMPT_ALL: This customer is exempt from all Canadian taxes.
  CA_STATUS_CARD_EXEMPTION: This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada.
  CA_DIPLOMAT_EXEMPTION: This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada.
  CA_BC_RESELLER_EXEMPTION: This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia.
  CA_MB_RESELLER_EXEMPTION: This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba.
  CA_SK_RESELLER_EXEMPTION: This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan.
  CA_BC_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia.
  CA_MB_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba.
  CA_NS_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia.
  CA_PE_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island.
  CA_SK_COMMERCIAL_FISHERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan.
  CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia.
  CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION: This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan.
  CA_BC_SUB_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia.
  CA_SK_SUB_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan.
  CA_BC_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia.
  CA_SK_CONTRACTOR_EXEMPTION: This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan.
  CA_ON_PURCHASE_EXEMPTION: This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario.
  CA_MB_FARMER_EXEMPTION: This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba.
  CA_NS_FARMER_EXEMPTION: This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia.
  CA_SK_FARMER_EXEMPTION: This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan.  */
  tax_exemptions?: string[];
};

export type RefundDuty = {
  duty_id?: number;
  refund_type?: string;
};

export type CustomerId = {
  customer_id?: number;
};

export type Collection = {
  /** The ID for the collection.  */
  id?: number;
  /** A unique, human-readable string for the collection automatically generated from its title. This is used in themes by the Liquid templating language to refer to the collection. (limit: 255 characters)  */
  handle?: string;
  /** The name of the collection. (limit: 255 characters)  */
  title?: string;
  /** The date and time (ISO 8601 format) when the collection was last modified.  */
  updated_at?: Date;
  /** A description of the collection, complete with HTML markup. Many templates display this on their collection pages.  */
  body_html?: string;
  /** The time and date (ISO 8601 format) when the collection was made visible. Returns null for a hidden collection.  */
  published_at?: Date;
  /** The order in which products in the collection appear. Valid values:
  alpha-asc: Alphabetically, in ascending order (A - Z).
  alpha-desc: Alphabetically, in descending order (Z - A).
  best-selling: By best-selling products.
  created: By date created, in ascending order (oldest - newest).
  created-desc: By date created, in descending order (newest - oldest).
  manual: In the order set manually by the shop owner.
  price-asc: By price, in ascending order (lowest - highest).
  price-desc: By price, in descending order (highest - lowest).  */
  sort_order?: string;
  /** The suffix of the liquid template being used. For example, if the value is custom, then the collection is using the collection.custom.liquid template. If the value is null, then the collection is using the default collection.liquid.  */
  template_suffix?: string;
  products_count?: number;
  collection_type?: string;
  /** Whether the collection is published to the Point of Sale channel. Valid values:
  web: The collection is published to the Online Store channel but not published to
  the Point of Sale channel.
  global: The collection is published to both the Online Store channel and the Point
  of Sale channel.  */
  published_scope?: string;
  admin_graphql_api_id?: string;
  /** Image associated with the collection. Valid values are:
  attachment: An image attached to a collection returned as Base64-encoded binary data.
  src: The source URL that specifies the location of the image.
  alt: The alternative text that describes the collection image.
  created_at: The time and date (ISO 8601 format) when the image was added to the collection.
  width: The width of the image in pixels.
  height: The height of the image in pixels.  */
  image?: Image;
  disjunctive?: boolean;
  rules?: Rule[];
};

export type CreditCard = {
  first_name?: string;
  last_name?: string;
  first_digits?: string;
  last_digits?: string;
  brand?: string;
  expiry_month?: number;
  expiry_year?: number;
  customer_id?: number;
};

export type NextAction = {
  redirect_url?: string;
};

export type AccessScope = {
  handle?: string;
  /** The access scopes associated to the access token.  */
  access_scopes?: AccessScope[];
};

export type UsageCharge = {
  /** The ID of the usage charge.  */
  id?: number;
  /** The name of the usage charge.  */
  description?: string;
  /** The price of the usage charge.  */
  price?: number;
  /** The date and time (ISO 8601 format) when the usage charge was created.  */
  created_at?: Date;
  billing_on?: string;
  balance_used?: number;
  balance_remaining?: number;
  risk_level?: number;
  /** The ID of the recurring application charge that the usage charge belongs to.  */
  recurring_application_charge_id?: number;
  /** The date and time (ISO 8601 format) when the usage charge was last updated.  */
  updated_at?: Date;
};

export type Fulfillment = {
  /** The ID for the fulfillment.  */
  id?: number;
  admin_graphql_api_id?: string;
  /** The date and time when the fulfillment was created. The API returns this value in ISO 8601 format.  */
  created_at?: Date;
  /** The unique identifier of the location that the fulfillment should be processed for.  To find the ID of the location, use the Location resource.  */
  location_id?: number;
  /** The uniquely identifying fulfillment name, consisting of two parts separated by a .. The first part represents the order name and the second part represents the fulfillment number. The fulfillment number automatically increments depending on how many fulfillments are in an order (e.g. #1001.1, #1001.2).  */
  name?: string;
  /** The unique numeric identifier for the order.  */
  order_id?: number;
  /** The address of the fulfillment location:
  address1: The street address of the fulfillment location.
  address2: The second line of the address. Typically the number of the apartment, suite, or unit.
  city: The city of the fulfillment location.
  country_code: The country of the fulfillment location.
  province_code: The province of the fulfillment location.
  zip: The zip code of the fulfillment location.  */
  origin_address?: OriginAddress;
  /** A text field that provides information about the receipt:
  testcase: Whether the fulfillment was a testcase.
  authorization: The authorization code.  */
  receipt?: Receipt;
  /** The type of service used.  */
  service?: string;
  /** The current shipment status of the fulfillment. Valid values:
  label_printed: A label for the shipment was purchased and printed.
  label_purchased: A label for the shipment was purchased, but not printed.
  attempted_delivery: Delivery of the shipment was attempted, but unable to be completed.
  ready_for_pickup: The shipment is ready for pickup at a shipping depot.
  confirmed: The carrier is aware of the shipment, but hasn't received it yet.
  in_transit: The shipment is being transported between shipping facilities on the way to its destination.
  out_for_delivery: The shipment is being delivered to its final destination.
  delivered: The shipment was succesfully delivered.
  failure: Something went wrong when pulling tracking information for the shipment, such as the tracking number was invalid or the shipment was canceled.  */
  shipment_status?: string;
  /** The status of the fulfillment. Valid values:
  pending: The fulfillment is pending.
  open: The fulfillment has been acknowledged by the service and is in processing.
  success: The fulfillment was successful.
  cancelled: The fulfillment was cancelled.
  error: There was an error with the fulfillment request.
  failure: The fulfillment request failed.  */
  status?: string;
  /** The name of the tracking company. The following tracking companies display for shops located in any country:
  4PX
  Amazon Logistics UK
  Amazon Logistics US
  Anjun Logistics
  APC
  Australia Post
  Bluedart
  Canada Post
  Canpar
  China Post
  Chukou1
  Correios
  Couriers Please
  Delhivery
  DHL eCommerce
  DHL eCommerce Asia
  DHL Express
  DPD
  DPD Local
  DPD UK
  Eagle
  FedEx
  FSC
  Globegistics
  GLS
  GLS (US)
  Japan Post
  La Poste
  New Zealand Post
  Newgistics
  PostNL
  PostNord
  Purolator
  Royal Mail
  Sagawa
  Sendle
  SF Express
  SFC Fulfilllment
  Singapore Post
  StarTrack
  TNT
  Toll IPEC
  UPS
  USPS
  Whistl
  Yamato
  YunExpress
  The following tracking companies are displayed for shops located in specific countries:
  Germany: Deutsche Post (DE), Deutsche Post (EN), DHL
  Ireland: An Post, Fastway
  Australia: Aramex Australia, Australia Post, Sendle
  Japan: エコ配, 西濃運輸, 西濃スーパーエキスプレス, 福山通運, 日本通運, 名鉄運輸, 第一貨物
  China: Anjun Logistics, China Post, DHL eCommerce Asia, FSC, SFC Fulfillment, WanbExpress, YunExpress
  Important
  When creating a fulfillment for a supported carrier, send the tracking_company exactly as written in the list above. If the tracking company doesn't match one of the supported entries, then the shipping status might not be updated properly during the fulfillment process.  */
  tracking_company?: string;
  tracking_number?: string;
  /** A list of tracking numbers, provided by the shipping company.
  Important
  It is highly recommended that you send the tracking company and the tracking URL as well. If neither one of these is sent, then the tracking company will be determined automatically. This can result in an invalid tracking URL.
  The tracking URL is displayed in the shipping confirmation email, which can optionally be sent to the customer. When accounts are enabled, it is also displayed in the customer's order history.  */
  tracking_numbers?: string[];
  tracking_url?: string;
  /** The URLs of tracking pages for the fulfillment.  */
  tracking_urls?: string[];
  /** The date and time (ISO 8601 format) when the fulfillment was last modified..  */
  updated_at?: Date;
  /** A historical record of each item in the fulfillment:
  id: The ID of the line item within the fulfillment.
  variant_id: The ID of the product variant being fulfilled.
  title: The title of the product.
  quantity: The number of items in the fulfillment.
  price: The price of the item.
  grams: The weight of the item in grams.
  sku: The unique identifier of the item in the fulfillment.
  variant_title: The title of the product variant being fulfilled.
  vendor: The name of the supplier of the item.
  fulfillment_service: The service provider who is doing the fulfillment.
  product_id: The unique numeric identifier for the product in the fulfillment.
  requires_shipping: Whether a customer needs to provide a shipping address when placing an order for this product variant.
  taxable: Whether the line item is taxable.
  gift_card: Whether the line item is a gift card.
  name: The name of the product variant.
  variant_inventory_management: The name of the inventory management system.
  properties: Any additional properties associated with the line item.
  product_exists: Whether the product exists.
  fulfillable_quantity: The amount available to fulfill. This is the quantity - max (refunded_quantity, fulfilled_quantity) - pending_fulfilled_quantity - open_fulfilled_quantity.
  total_discount: The total of any discounts applied to the line item.
  fulfillment_status: The status of an order in terms of the line items being fulfilled. Valid values: fulfilled, null, or partial.
  fulfillment_line_item_id: A unique identifier for a quantity of items within a single fulfillment. An order can have multiple fulfillment line items.
  tax_lines: The title, price, and rate of any taxes applied to the line item.
  duties: A list of duty objects, each containing information about a duty on the line item.  */
  line_items?: LineItem[];
  /** Whether the customer should be notified. If set to true, then an email will be sent when the fulfillment is created or updated. For orders that were initially created using the API, the default value is false. For all other orders, the default value is true.  */
  notify_customer?: boolean;
  /** The name of the inventory management service.  */
  variant_inventory_management?: string;
};

export type Transaction = {
  /** The ID for the transaction.  */
  id?: number;
  admin_graphql_api_id?: string;
  /** The amount of money included in the transaction. If you don't provide a value for `amount`, then it defaults to the total cost of the order (even if a previous transaction has been made towards it).  */
  amount?: string;
  /** The authorization code associated with the transaction.  */
  authorization?: string;
  /** The date and time (ISO 8601 format) when the transaction was created.  */
  created_at?: Date;
  /** The three-letter code (ISO 4217 format) for the currency used for the payment.  */
  currency?: string;
  /** The ID for the device.  */
  device_id?: number;
  /** A standardized error code, independent of the payment provider. Valid values:
  incorrect_number
  invalid_number
  invalid_expiry_date
  invalid_cvc
  expired_card
  incorrect_cvc
  incorrect_zip
  incorrect_address
  card_declined
  processing_error
  call_issuer
  pick_up_card  */
  error_code?: string;
  /** The name of the gateway the transaction was issued through. A list of gateways can be found on Shopify's payment gateways page.  */
  gateway?: string;
  /** The transaction's type. Valid values:
  authorization: Money that the customer has agreed to pay. The authorization period can be between 7 and 30 days (depending on your payment service) while a store waits for a payment to be captured.
  capture: A transfer of money that was reserved during the authorization of a shop.
  sale: The authorization and capture of a payment performed in one single step.
  void: The cancellation of a pending authorization or capture.
  refund: The partial or full return of captured money to the customer.  */
  kind?: string;
  /** The ID of the physical location where the transaction was processed.  */
  location_id?: object;
  /** A string generated by the payment provider with additional information about why the transaction succeeded or failed.  */
  message?: string;
  /** The ID for the order that the transaction is associated with.  */
  order_id?: number;
  /** The ID of an associated transaction.
  For capture transactions, the parent needs to be an authorization transaction.
  For void transactions, the parent needs to be an authorization transaction.
  For refund transactions, the parent needs to be a capture or sale transaction.  */
  parent_id?: number;
  /** The date and time (ISO 8601 format)
  when a transaction was processed. This value is the date that's used in the analytic reports. By default,
  it matches the created_at value. If you're importing transactions from an app or another
  platform, then you can set processed_at to a date and time in the past to match when the
  original transaction was processed.  */
  processed_at?: Date;
  /** A transaction receipt attached to the transaction by the gateway. The value of this field depends on which gateway the shop is using.  */
  receipt?: Receipt;
  /** The origin of the transaction. This is set by Shopify and can't be overridden. Example values: web, pos, iphone, and android.  */
  source_name?: string;
  /** The status of the transaction. Valid values: pending, failure, success, and error.  */
  status?: string;
  /** Whether the transaction is a test transaction.  */
  test?: boolean;
  /** The ID for the user who was logged into the Shopify POS device when the order was processed, if applicable.  */
  user_id?: number;
  maximum_refundable?: string;
  /** Information about the credit card used for this transaction. It has the following attributes:
  credit_card_bin: The issuer identification number (IIN), formerly known as bank identification number (BIN) of the customer's credit card. This is made up of the first few digits of the credit card number.
  avs_result_code: The response code from the address verification system. The code is always a single letter. Refer to this chart for the codes and their definitions.
  cvv_result_code: The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter or empty string; see this chart for the codes and their definitions.
  credit_card_number: The customer's credit card number, with most of the leading digits redacted.
  credit_card_company: The name of the company that issued the customer's credit card.  */
  payment_details?: PaymentDetail;
  /** An adjustment on the transaction showing the amount lost or gained due to fluctuations in the currency exchange rate. It has the following attributes:
  ID: The ID of the adjustment.
  adjustment: The difference between the amounts on the associated transaction and the parent transaction.
  original_amount: The amount of the parent transaction in the shop currency.
  final_amount: The amount of the associated transaction in the shop currency.
  currency: The shop currency.
  Requires the header X-Shopify-Api-Features = include-currency-exchange-adjustments.  */
  currency_exchange_adjustment?: object;
  /** The date and time (ISO 8601 format) when the Shopify Payments authorization expires.  */
  authorization_expires_at?: Date;
  /** The attributes associated with a Shopify Payments extended authorization period. It has the following attributes:
  standard_authorization_expires_at: The date and time (ISO 8601 format) when the standard authorization period expires. After expiry, an extended authorization fee is applied upon capturing the payment.
  extended_authorization_expires_at: The date and time (ISO 8601 format) when the extended authorization period expires. After expiry, the merchant can't capture the payment.
  extended_authorization_attributes are available on the Retrieve a specific transaction for an order endpoint only if the following criteria applies:
  The store is on a Shopify Plus plan.
  The store uses Shopify Payments.
  The transaction being retrieved is an extended authorization, which is determined by the capture_before date in the charge.
  If the criteria isn't met, then an empty JSON is returned for extended_authorization_attributes.
  To learn more about extended authorization periods, refer to Payment authorization.  */
  extended_authorization_attributes?: ExtendedAuthorizationAttribute;
  amount_in?: string;
  amount_out?: string;
  amount_rounding?: string;
  transaction_group_id?: number;
  /** The attributes associated with a Shopify Payments refund. It has the following attributes:
  status: The current status of the refund. Valid values: pending, failure, success, and error.
  acquirer_reference_number: A unique number associated with the transaction that can be used to track the refund. This property has a value only for transactions completed with Visa or Mastercard.
  payments_refund_attributes are available on any JSON serialization of the order transaction only if the following criteria apply:
  The store is on a Shopify Plus plan.
  The store uses Shopify Payments.
  The order transaction kind is either refund or void.
  If the criteria isn't met, then the payments_refund_attributes property is omitted.  */
  payments_refund_attributes?: object;
};

export type PaymentTerm = {
  amount?: number;
  currency?: string;
  due_in_days?: number;
  payment_schedules?: PaymentSchedule[];
  payment_terms_name?: string;
  payment_terms_type?: string;
};

export type OptionValue = {
  option_id?: number;
  name?: string;
  value?: string;
};

export type Destination = {
  id?: number;
  address1?: string;
  address2?: string;
  city?: string;
  company?: string;
  country?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  province?: string;
  zip?: string;
};

export type ClientDetail = {
  accept_language?: string;
  browser_height?: number;
  browser_ip?: string;
  browser_width?: number;
  session_hash?: string;
  /** The user agent string provided by the software used to create the comment (usually a browser).  */
  user_agent?: string;
};

export type DiscountCode = {
  /** The case-insensitive discount code that customers use at checkout. (maximum: 255 characters)
  Use the same value for code as the title property of the associated price rule.  */
  code?: string;
  amount?: string;
  type?: string;
  /** The ID for the discount code.  */
  id?: number;
  /** The ID for the price rule that this discount code belongs to.  */
  price_rule_id?: number;
  /** The number of times that the discount code has been redeemed.  */
  usage_count?: number;
  /** The date and time (ISO 8601 format) when the discount code was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the discount code was updated.  */
  updated_at?: Date;
  errors?: Error;
};

export type ShippingLine = {
  id?: number;
  carrier_identifier?: string;
  code?: string;
  delivery_category?: string;
  discounted_price?: string;
  discounted_price_set?: PriceSet;
  /** The user's phone number.  */
  phone?: string;
  price?: string;
  price_set?: PriceSet;
  requested_fulfillment_service_id?: number;
  source?: string;
  title?: string;
  tax_lines?: TaxLine[];
  discount_allocations?: DiscountAllocation[];
  applied_discounts?: AppliedDiscount[];
  custom?: boolean;
  handle?: string;
};

export type ShippingRate = {
  id?: string;
  price?: string;
  title?: string;
  checkout?: Checkout;
  phone_required?: boolean;
  delivery_range?: string;
  estimated_time_in_transit?: string;
  handle?: string;
};

export type ShippingZone = {
  /** The unique numeric identifier for the shipping zone.  */
  id?: number;
  /** The name of the shipping zone, specified by the user.  */
  name?: string;
  /** The ID of the shipping zone's delivery profile. Shipping profiles allow merchants  to create product-based or location-based shipping rates.  */
  profile_id?: string;
  /** The ID of the shipping zone's location group. Location groups allow merchants  to create shipping rates that apply only to the specific locations in the group.  */
  location_group_id?: string;
  admin_graphql_api_id?: string;
  /** A list of countries that belong to the shipping zone.
  id: The unique numeric identifier for the country.
  code: The ISO 3166-1 alpha-2 two-letter country code for the country. The code for a given country will be the same as the code for the same country in another shop.
  shipping_zone_id: The unique numeric identifier for the shipping zone.
  name: The full name of the country, in English.
  tax: The tax value in decimal format.
  tax_name: The name of the tax as it is referred to in the applicable province/state. For example, in Ontario, Canada the tax is referred to as HST.  */
  countries?: Country[];
  /** Information about a weight-based shipping rate.
  id: The unique numeric identifier for the shipping rate.
  name: The name of the shipping rate.
  price: The price of the shipping rate.
  shipping_zone_id: The unique numeric identifier for the associated shipping zone.
  weight_low: The minimum weight of an order for it to be eligible for the shipping rate.
  weight_high: The maximum weight of an order for it to be eligible for the shipping rate.  */
  weight_based_shipping_rates?: WeightBasedShippingRate[];
  /** Information about a price-based shipping rate.
  id: The unique numeric identifier for the shipping rate.
  name: The name of the shipping rate.
  price: The price of the shipping rate.
  shipping_zone_id: The unique numeric identifier for the associated shipping zone.
  min_order_subtotal: The minimum price of an order for it to be eligible for the shipping rate.
  max_order_subtotal: The maximum price of an order for it to be eligible for the shipping rate.  */
  price_based_shipping_rates?: WeightBasedShippingRate[];
  /** Information about carrier shipping providers and the rates used.  */
  carrier_shipping_rate_providers?: CarrierShippingRateProvider[];
};

export type NoteAttribute = {
  name?: string;
  value?: string;
  custom_engraving?: string;
  colour?: string;
};

export type OriginAddress = {
  zip?: string;
  city?: string;
  address1?: string;
  address2?: string;
  country_code?: string;
  province_code?: string;
};

export type PaymentDetail = {
  credit_card_bin?: string;
  avs_result_code?: string;
  cvv_result_code?: string;
  credit_card_number?: string;
  credit_card_company?: string;
  credit_card_name?: string;
  credit_card_wallet?: string;
  credit_card_expiration_month?: string;
  credit_card_expiration_year?: string;
};

export type InventoryItem = {
  /** The ID of the inventory item.  */
  id?: number;
  /** The unique SKU (stock keeping unit) of the inventory item.  */
  sku?: string;
  /** The date and time (ISO 8601 format) when the inventory item was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the inventory item was last modified.  */
  updated_at?: Date;
  /** Whether a customer needs to provide a shipping address when placing an order containing the inventory item.  */
  requires_shipping?: boolean;
  /** The unit cost of the inventory item.  */
  cost?: string;
  /** The two-digit code for the country where the inventory item was made.  */
  country_code_of_origin?: string;
  /** The two-digit code for the province where the inventory item was made. Used only if the shipping provider for the inventory item is Canada Post.  */
  province_code_of_origin?: string;
  /** The general Harmonized System (HS) code for the inventory item. Used if a country-specific HS code is not available.  */
  harmonized_system_code?: number;
  /** Whether the inventory item is tracked. If true, then inventory quantity changes are tracked by Shopify.  */
  tracked?: boolean;
  /** An array of country-specific Harmonized System (HS) codes for the item. Used to determine duties when shipping the inventory item to certain countries.  */
  country_harmonized_system_codes?: CountryHarmonizedSystemCode[];
  admin_graphql_api_id?: string;
};

export type UTMparameter = {
  marketing_event?: MarketingEvent;
};

export type RequestOption = {
  date?: Date;
  note?: string;
  shipping_method?: string;
  notify_customer?: boolean;
};

export type ServiceFilter = {
  "*"?: string;
};

export type CustomerInvite = {
  to?: string;
  from?: string;
  subject?: string;
  custom_message?: string;
  bcc?: string[];
};

export type RefundLineItem = {
  id?: number;
  line_item_id?: number;
  location_id?: number;
  quantity?: number;
  restock_type?: string;
  subtotal?: number;
  subtotal_set?: PriceSet;
  total_tax?: number;
  total_tax_set?: PriceSet;
  line_item?: LineItem;
  price?: string;
  discounted_price?: string;
  discounted_total_price?: string;
  total_cart_discount_amount?: string;
};

export type InventoryLevel = {
  /** The ID of the inventory item that the inventory level belongs to.  */
  inventory_item_id?: number;
  /** The ID of the location that the inventory level belongs to. To find the ID of the location, use the Location resource.  */
  location_id?: number;
  /** The quantity of inventory items available for sale. Returns null if the inventory item is not tracked.  */
  available?: number;
  /** The date and time (ISO 8601 format) when the inventory level was last modified.  */
  updated_at?: Date;
  admin_graphql_api_id?: string;
};

export type MarketingEvent = {
  id?: number;
  /** The type of marketing event. Valid values: ad, post, message, retargeting, transactional, affiliate, loyalty, newsletter, abandoned_cart.
  Note
  If there are values that you’d like to use for event_type that are not in the list above, then please post your request here. Our approach is to be more structured than using freeform text, but to still allow for categorization of most types of marketing actions.  */
  event_type?: string;
  /** An optional remote identifier for a marketing event. The remote identifier lets Shopify validate engagement data.  */
  remote_id?: string;
  /** The time when the marketing action was started.  */
  started_at?: Date;
  /** For events with a duration, the time when the event actually ended.  */
  ended_at?: Date;
  /** For events with a duration, the time when the event was scheduled to end.  */
  scheduled_to_end_at?: Date;
  /** The budget of the ad campaign.  */
  budget?: number;
  /** The currency for the budget. Required if budget is specified.  */
  currency?: string;
  /** A link to manage the marketing event. In most cases, this links to the app that created the event.  */
  manage_url?: string;
  /** A link to the live version of the event, or to a rendered preview in the app that created it.  */
  preview_url?: string;
  utm_campaign?: string;
  utm_source?: string;
  utm_medium?: string;
  /** The type of the budget. Required if budget is specified. Valid values: daily, lifetime.'  */
  budget_type?: string;
  /** A description of the marketing event.  */
  description?: string;
  /** The channel that your marketing event will use. Valid values: search, display, social, email, referral.  */
  marketing_channel?: string;
  /** Whether the event is paid or organic.  */
  paid?: boolean;
  /** The destination domain of the marketing event. Required if the marketing_channel is set to search or social.  */
  referring_domain?: string;
  breadcrumb_id?: number;
  marketing_activity_id?: number;
  admin_graphql_api_id?: string;
  /** A list of the items that were marketed in the marketing event. Includes the type and id of each item. Valid values for type are:
  product
  collection
  price_rule
  discount (Will be replaced by price_rule after April 20, 2017.)
  page
  article
  homepage (Doesn't have an id.)  */
  marketed_resources?: MarketedResource[];
  /** The UTM parameters used in the links provided in the marketing event. Values must be unique and should not be url-encoded.
  To do traffic or order attribution you must at least define utm_campaign, utm_source, and utm_medium.  */
  UTM_parameters?: UTMparameter;
};

export type ProductListing = {
  /** The unique identifer of the product this listing is for. The primary key for this resource.  */
  product_id?: number;
  /** The date and time when the product was created. The API returns this in ISO 8601.  */
  created_at?: Date;
  /** The date and time when the product was last modified. The API returns this in ISO 8601.  */
  updated_at?: Date;
  /** The description of the product, complete with HTML formatting.  */
  body_html?: string;
  /** A human-friendly unique string for the Product automatically generated from its title.  */
  handle?: string;
  /** A categorization that a product can be tagged with, commonly used for filtering.  */
  product_type?: string;
  /** The name of the product.  */
  title?: string;
  /** The name of the vendor of the product.  */
  vendor?: string;
  available?: boolean;
  /** A categorization that a product can be tagged with, commonly used for filtering.  */
  tags?: string;
  /** The date and time when the product was published. The API returns this in ISO 8601.  */
  published_at?: Date;
  /** A list of variant objects, each one representing a slightly different version of the product. For example, if a product comes in different sizes and colors, each size and color permutation (such as "small black", "medium black", "large blue"), would be a variant.
  To reorder variants, update the product with the variants in the desired order. The position attribute on the variant will be ignored.
  barcode: The barcode, UPC or ISBN number for the product.
  compare_at_price: The competitor's price for the same item.
  created_at: The date and time when the product variant was created. The API returns this in ISO 8601.
  fulfillment_service: Service which is handling fulfillment. Valid values are: manual, gift_card, or the handle of a FulfillmentService.
  grams: The weight of the product variant in grams.
  weight: The weight of the product variant in the unit system specified with weight_unit.
  weight_unit: The unit system that the product variant's weight is measure in. The weight_unit can be either "g", "kg, "oz", or "lb".
  id: The unique numeric identifier for the product variant.
  inventory_management: Specifies whether or not Shopify tracks the number of items in stock for this product variant.
  inventory_policy: Specifies whether or not customers are allowed to place an order for a product variant when it's out of stock.
  inventory_quantity: The number of items in stock for this product variant.
  metafield: Attaches additional information to a shop's resources.
  option: Custom properties that a shop owner can use to define product variants. Multiple options can exist. Options are represented as: option1, option2, option3, etc.
  position: The order of the product variant in the list of product variants. 1 is the first position. To reorder variants, update the product with the variants in the desired order. The position attribute on the variant will be ignored.
  price: The price of the product variant.
  product_id: The unique numeric identifier for the product.
  requires_shipping: Specifies whether or not a customer needs to provide a shipping address when placing an order for this product variant.
  sku: A unique identifier for the product in the shop.
  taxable: Specifies whether or not a tax is charged when the product variant is sold.
  title: The title of the product variant.
  updated_at: The date and time when the product variant was last modified. The API returns this in ISO 8601.  */
  variants?: Variant[];
  /** A list of image objects, each one representing an image associated with the product.  */
  images?: Image[];
  /** Custom product property names like "Size", "Color", and "Material".  */
  options?: Option[];
};

export type CarrierService = {
  /** The ID of the carrier service.  */
  id?: number;
  /** The name of the shipping service as seen by merchants and their customers.  */
  name?: string;
  /** Whether this carrier service is active.  */
  active?: boolean;
  /** Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.  */
  service_discovery?: boolean;
  /** Distinguishes between API or legacy carrier services.  */
  carrier_service_type?: string;
  /** The GraphQL unique identifier for the carrier service.  */
  admin_graphql_api_id?: string;
  /** The format of the data returned by the URL endpoint. Valid values: json and xml. Default value: json.  */
  format?: string;
  /** The URL endpoint that Shopify needs to retrieve shipping rates. This must be a public URL.  */
  callback_url?: string;
};

export type DeliveryMethod = {
  id?: number;
  method_type?: string;
};

export type ShippingAddress = {
  first_name?: string;
  address1?: string;
  phone?: string;
  city?: string;
  zip?: string;
  province?: string;
  country?: string;
  last_name?: string;
  address2?: string;
  company?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  country_code?: string;
  province_code?: string;
  id?: number;
  customer_id?: number;
  country_name?: string;
  default?: boolean;
};

export type AppliedDiscount = {
  title?: string;
  value?: string;
  amount?: string;
  applicable?: boolean;
  value_type?: string;
  description?: string;
  application_type?: string;
  non_applicable_reason?: string;
};

export type PaymentSchedule = {
  amount?: number;
  due_at?: Date;
  currency?: string;
  issued_at?: Date;
  completed_at?: string;
  expected_payment_method?: string;
};

export type OrderAdjustment = {
  id?: number;
  amount?: string;
  amount_set?: PriceSet;
  kind?: string;
  order_id?: number;
  reason?: string;
  refund_id?: number;
  tax_amount?: string;
  tax_amount_set?: PriceSet;
};

export type FulfillmentHold = {
  reason?: string;
  reason_notes?: string;
};

export type MerchantRequest = {
  kind?: string;
  message?: string;
  request_options?: RequestOption;
};

export type OutgoingRequest = {
  message?: string;
  request_options?: RequestOption;
  sent_at?: Date;
  kind?: string;
};

export type MarketedResource = {
  id?: number;
  type?: string;
};

export type CustomCollection = {
  /** The ID for the custom collection.  */
  id?: number;
  /** A human-friendly unique string for the custom collection automatically generated from its title. This is used in shop themes by the Liquid templating language to refer to the custom collection. (limit: 255 characters)  */
  handle?: string;
  /** The name of the custom collection. (limit: 255 characters)  */
  title?: string;
  /** The date and time (ISO 8601 format) when the custom collection was last modified.  */
  updated_at?: Date;
  /** The description of the custom collection, complete with HTML markup. Many templates display this on their custom collection pages.  */
  body_html?: string;
  /** The time and date (ISO 8601 format) when the collection was made visible. Returns null for a hidden custom collection.  */
  published_at?: Date;
  /** The order in which products in the custom collection appear. Valid values:
  alpha-asc: Alphabetically, in ascending order (A - Z).
  alpha-desc: Alphabetically, in descending order (Z - A).
  best-selling: By best-selling products.
  created: By date created, in ascending order (oldest - newest).
  created-desc: By date created, in descending order (newest - oldest).
  manual: Order created by the shop owner.
  price-asc: By price, in ascending order (lowest - highest).
  price-desc: By price, in descending order (highest - lowest).  */
  sort_order?: string;
  /** The suffix of the liquid template being used. For example, if the value is custom, then the collection is using the collection.custom.liquid template. If the value is null, then the collection is using the default collection.liquid.  */
  template_suffix?: string;
  /** Whether the collection is published to the Point of Sale channel. Valid values:
  web: The custom collection is published to the Online Store channel but not published to
  the Point of Sale channel.
  global: The custom collection is published to both the Online Store channel and the Point
  of Sale channel.  */
  published_scope?: string;
  admin_graphql_api_id?: string;
  /** Image associated with the custom collection. Valid values are:
  attachment: An image attached to a custom collection returned as Base64-encoded binary data.
  src: The source URL that specifies the location of the image.
  alt: Alternative text that describes the collection image.
  created_at: The time and date (ISO 8601 format) when the image was added to the collection.
  width: The width of the image in pixels.
  height: The height of the image in pixels.  */
  image?: Image;
  products_count?: number;
  /** Whether the custom collection is published to the Online Store channel.  */
  published?: boolean;
};

export type PresentmentPrice = {
  price?: Price;
  compare_at_price?: Price;
  presentment_prices?: PresentmentPrice[];
};

export type ResourceFeedback = {
  /** DateTime when the resource feedback record was stored by Shopify.
  Type: ISO 8601 UTC DateTime as string with year, month (or week), day, hour, minute, second, time zone.  */
  created_at?: string;
  /** DateTime when the resource feedback record was last updated by Shopify.
  Type: ISO 8601 UTC DateTime as string with year, month (or week), day, hour, minute, second, time zone.  */
  updated_at?: string;
  /** Unique id of the resource.  */
  resource_id?: number;
  /** Type of resource for which feedback is returned. eg. Shop, Product.  */
  resource_type?: string;
  /** The forwarded updated_at timestamp of the product. Used only for versioned resources, where the updated_at timestamp changes
  based on merchant actions.
  When required, it is used along with feedback_generated_at to help determine whether incoming
  feedback is outdated compared to feedback already received, and if it should be ignored upon arrival.  */
  resource_updated_at?: string;
  /** A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app
  encounters when trying to make use of their Shop and its resources.
  Required only when state is requires_action. Disallowed when state is success.
  Content restrictions for product feedback:
  four messages up to 100 characters long.  */
  messages?: string[];
  /** The time at which the payload is constructed. Used to help determine whether incoming feedback is
  outdated compared to feedback already received, and if it should be ignored upon arrival.
  Type: ISO 8601 UTC DateTime as string
  with year, month [or week], day, hour, minute, second, millisecond, and time zone.
  Note
  If you queue a Feedback API payload for delivery at a later time, do not update this value
  when the API call is actually made; ensure that the current time is set when building the payload.  */
  feedback_generated_at?: string;
  /** Indicates the state that the Shop or resource is in, from the perspective of your app.  */
  state?: string;
};

export type FulfillmentOrder = {
  /** The ID of the fulfillment order.  */
  id?: number;
  /** The ID of the shop that's associated with the fulfillment order.  */
  shop_id?: number;
  /** The ID of the order that's associated with the fulfillment order.  */
  order_id?: number;
  /** The ID of the location that has been assigned to do the work.  */
  assigned_location_id?: number;
  /** The request status of the fulfillment order. Valid values:
  unsubmitted:
  The initial state for newly created fulfillment orders. This is the only valid
  state for fulfillment orders not assigned to a fulfillment service.
  submitted: The merchant requested fulfillment for this fulfillment order.
  accepted: The fulfillment service accepted the merchant's fulfillment request.
  rejected: The fulfillment service rejected the merchant's fulfillment request.
  cancellation_requested: The merchant requested a cancellation of the fulfillment request for this fulfillment order.
  cancellation_accepted: The fulfillment service accepted the merchant's fulfillment cancellation request.
  cancellation_rejected: The fulfillment service rejected the merchant's fulfillment cancellation request.
  closed: The fulfillment service closed the fulfillment order without completing it.  */
  request_status?: string;
  /** The status of the fulfillment order. Valid values:
  open: Default state for newly created fulfillment orders.
  in_progress: The fulfillment order is being processed.
  cancelled: The fulfillment order has been cancelled by the merchant.
  incomplete: The fulfillment order cannot be completed as requested.
  closed: The fulfillment order has been completed and closed.  */
  status?: string;
  /** The actions that can be performed on this fulfillment order.  */
  supported_actions?: string[];
  /** The destination where the items should be sent.
  id: The ID of the fulfillment order destination.
  address1: The first line of the address of the destination.
  address2: The second line of the address of the destination.
  city: The city of the destination.
  company: The company of the destination.
  country: The country of the destination.
  email: The email of the customer at the destination.
  first_name: The first name of the customer at the destination.
  last_name: The last name of the customer at the destination.
  phone: The phone number of the customer at the destination.
  province: The province of the destination.
  zip: The ZIP code of the destination.  */
  destination?: Destination;
  /** Represents line items belonging to a fulfillment order:
  id: The ID of the fulfillment order line item.
  shop_id: The ID of the shop associated with the fulfillment order line item.
  fulfillment_order_id: The ID of the fulfillment order associated with this line item.
  line_item_id: The ID of the line item associated with this fulfillment order line item.
  inventory_item_id: The ID of the inventory item associated with this fulfillment order line item.
  quantity: The total number of units to be fulfilled.
  fulfillable_quantity: The number of units remaining to be fulfilled.  */
  line_items?: LineItem[];
  outgoing_requests?: OutgoingRequest[];
  fulfillment_service_handle?: string;
  /** The fulfillment order's assigned location. This is the location expected to perform fulfillment.
  address1: The street address of the assigned location.
  address2: An optional additional field for the street address of the assigned location.
  city: The city of the assigned location.
  country_code: The two-letter code for the country of the assigned location.
  location_id: The ID of the assigned location.
  name: The name of the assigned location.
  phone: The phone number of the assigned location.
  province: The province of the assigned location.
  zip: The ZIP code of the assigned location.  */
  assigned_location?: Origin;
  origin?: Origin;
  /** A list of requests sent by the merchant to the fulfillment service for this fulfillment order.
  message: The message returned by the merchant, if any.
  request_options: The request options returned by the merchant, if any.
  kind: The kind of request. Valid values: fulfillment_request, cancellation_request, or legacy_fulfill_request.  */
  merchant_requests?: MerchantRequest[];
  /** The datetime (in UTC) when the fulfillment order is ready for fulfillment.
  When this datetime is reached, a scheduled fulfillment order is automatically transitioned to open.
  For more information about fulfillment statuses, refer to the status property.  */
  fulfill_at?: string;
  /** The international duties relevant to the fulfillment order.
  incoterm: The method of duties payment. Valid values:
  DAP: Delivered at place.
  DDP: Delivered duty paid.  */
  international_duties?: InternationalDuty;
  /** Represents the fulfillment holds applied on the fulfillment order.
  reason: The reason for the fulfillment hold.
  reason_notes: Additional information about the fulfillment hold reason.  */
  fulfillment_holds?: FulfillmentHold[];
  /** The type of method used to transfer a product or service to a customer.
  id: The ID of the delivery method.
  method_type: The type of delivery method. Valid values:
  local: A delivery to a customer's doorstep.
  none: No delivery method.
  pick_up: A delivery that a customer picks up at your retail store, curbside, or any location that you choose.
  retail: A delivery to a retail store.
  shipping: A delivery to a customer using a shipping carrier.  */
  delivery_method?: DeliveryMethod;
};

export type FulfillmentEvent = {
  /** An ID for the fulfillment event.  */
  id?: number;
  /** An ID for the fulfillment that's associated with the fulfillment event.  */
  fulfillment_id?: number;
  /** The status of the fulfillment event. Valid values:
  label_printed: A label for the shipment was purchased and printed.
  label_purchased: A label for the shipment was purchased, but not printed.
  attempted_delivery: Delivery of the shipment was attempted, but unable to be completed.
  ready_for_pickup: The shipment is ready for pickup at a shipping depot.
  picked_up: The fulfillment was successfully picked up.
  confirmed: The carrier is aware of the shipment, but hasn't received it yet.
  in_transit: The shipment is being transported between shipping facilities on the way to its destination.
  out_for_delivery: The shipment is being delivered to its final destination.
  delivered: The shipment was successfully delivered.
  failure: Something went wrong when pulling tracking information for the shipment, such as the tracking number was invalid or the shipment was canceled.  */
  status?: string;
  /** An arbitrary message describing the status. Can be provided by a shipping carrier.  */
  message?: string;
  /** The date and time (ISO 8601 format)  when the fulfillment event occurred.  */
  happened_at?: Date;
  /** The city where the fulfillment event occurred.  */
  city?: string;
  /** The province where the fulfillment event occurred.  */
  province?: string;
  /** The country where the fulfillment event occurred.  */
  country?: string;
  /** The zip code of the location where the fulfillment event occurred.  */
  zip?: string;
  /** The street address where the fulfillment event occurred.  */
  address1?: string;
  /** A geographic coordinate specifying the latitude of the fulfillment event.  */
  latitude?: number;
  /** A geographic coordinate specifying the longitude of the fulfillment event.  */
  longitude?: number;
  /** An ID for the shop that's associated with the fulfillment event.  */
  shop_id?: number;
  /** The date and time (ISO 8601 format) when the fulfillment event was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the fulfillment event was updated.  */
  updated_at?: Date;
  /** The estimated delivery date based on the fulfillment's tracking number, as long as it's provided by one of the following carriers: USPS, FedEx, UPS, or Canada Post (Canada only). Value is null if no tracking number is available or if the tracking number is from an unsupported carrier. This property is available only when carrier calculated rates are in use.'  */
  estimated_delivery_at?: Date;
  /** The ID of the order that's associated with the fulfillment event.  */
  order_id?: number;
  admin_graphql_api_id?: string;
};

export type LocationsForMove = {
  location?: Location;
  message?: string;
  movable?: boolean;
  /** A list of locations that a fulfillment order can potentially move to.
  location: The location being considered as the fulfillment order's new assigned location.
  movable: Whether the fulfillment order can be moved to the location.
  message: A human-readable string with the reason why the fulfillment order,
  or some of its line items, can't be moved to the location.  */
  locations_for_move?: LocationsForMove[];
};

export type ApplicationCharge = {
  /** The ID of the application charge.  */
  id?: number;
  /** The application charge name.  */
  name?: string;
  api_client_id?: number;
  /** The price of the application charge. The minimum price is 0.50, and maximum price is 10,000.  */
  price?: string;
  /** The status of the application charge. Valid values:
  pending: The application charge is pending approval by the merchant.
  accepted: Removed in version 2021-01. The application charge has been accepted by the merchant and is ready to be activated by the app. At this point it will appear on the merchant's invoice. As of API version 2021-01, when a merchant accepts a charge, the charge immediately transitions from pending to active.
  active: The application charge has been activated by the app and will be paid out to the Partner.
  declined: The application charge was declined by the merchant.
  expired: The application charge was not accepted within 2 days of being created.  */
  status?: string;
  /** The URL where the merchant is redirected after accepting a charge.  */
  return_url?: string;
  /** Whether the application charge is a test transaction. Valid values:true,null.  */
  test?: boolean;
  /** The date and time (ISO 8601 format) when the application charge was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the charge was last updated.  */
  updated_at?: Date;
  charge_type?: string;
  decorated_return_url?: string;
  /** The URL where the merchant accepts or declines the application charge.  */
  confirmation_url?: string;
};

export type ApplicationCredit = {
  /** The ID of the application credit.  */
  id?: number;
  /** The amount refunded by the application credit.  */
  amount?: string;
  /** The description of the application credit.  */
  description?: string;
  /** Whether the application credit is a test transaction. Valid values: true,null  */
  test?: boolean;
};

export type EntitledCountryId = {
  _entitled_country_ids?: number[];
};

export type CollectionListing = {
  /** Identifies which collection this listing is for.  */
  collection_id?: number;
  /** The date and time when the collection was last modified. The API returns this in ISO_8601.  */
  updated_at?: Date;
  /** The description of the collection, complete with HTML formatting.  */
  body_html?: string;
  /** The default product image for a collection.  */
  default_product_image?: DefaultProductImage;
  /** A human-friendly unique string for the Collection automatically generated from its title.  */
  handle?: string;
  /** The image for a collection.  */
  image?: Image;
  /** The name of the collection.  */
  title?: string;
  /** The order in which products in the collection appear. Valid values are:
  alpha-asc: Alphabetically, in ascending order (A - Z).
  alpha-desc: Alphabetically, in descending order (Z - A).
  best-selling: By best-selling products.
  created: By date created, in ascending order (oldest - newest).
  created-desc: By date created, in descending order (newest - oldest).
  manual: Order created by the shop owner.
  price-asc: By price, in ascending order (lowest - highest).
  price-desc: By price, in descending order (highest - lowest).  */
  sort_order?: string;
  /** The date and time when the collection was published. The API returns this in ISO_8601.  */
  published_at?: Date;
};

export type InternationalDuty = {
  incoterm?: string;
};

export type TenderTransaction = {
  /** The ID of the transaction.  */
  id?: number;
  /** The ID of the order that the tender transaction belongs to.  */
  order_id?: number;
  /** The amount of the tender transaction in the shop's currency.  */
  amount?: string;
  /** The three-letter code (ISO 4217 format) for the currency used for the tender transaction.  */
  currency?: string;
  /** The ID of the user logged into the Shopify POS device that processed the tender transaction, if applicable.  */
  user_id?: number;
  /** Whether the tender transaction is a test transaction.  */
  test?: boolean;
  /** The date and time (ISO 8601 format) when the tender transaction was processed.  */
  processed_at?: Date;
  /** The remote (gateway) reference associated with the tender.  */
  remote_reference?: string;
  /** Information about the payment instrument used for this transaction. It has the following properties:
  credit_card_company: The name of the company that issued the customer's credit card.
  credit_card_number: The customer's credit card number, with most of the leading digits redacted.  */
  payment_details?: PaymentDetail;
  /** Information about the payment method used for this transaction. Valid values:
  credit_card
  cash
  android_pay
  apple_pay
  google_pay
  samsung_pay
  shopify_pay
  amazon
  klarna
  paypal
  unknown
  other  */
  payment_method?: string;
};

export type DiscountAllocation = {
  amount?: string;
  amount_set?: PriceSet;
  discount_application_index?: number;
  /** A unique numeric identifier for the blog.  */
  id?: number;
  /** A human readable description of the event.  */
  description?: string;
  /** The date and time when the blog was created. The API returns this value in ISO 8601 format.  */
  created_at?: Date;
  application_type?: string;
};

export type DeprecatedApiCalls = {
  api_type?: string;
  description?: string;
  documentation_url?: string;
  endpoint?: string;
  last_call_at?: string;
  migration_deadline?: string;
  graphql_schema_name?: string;
  version?: string;
  /** The date and time (ISO 8601 format) when the data was last updated.  */
  data_updated_at?: string;
  /** A list of deprecated API calls made by the authenticated app in the past 30 days. Each object has the following properties:
  api_type: The type of API that the call was made to. Valid values: REST, Webhook, GraphQL.
  description: A description of the deprecation and any required migration steps.
  documentation_url: The documentation URL to the deprecated change.
  endpoint: A description of the REST endpoint, webhook topic, or GraphQL field called.
  last_call_at: The timestamp (ISO 4217 format) when the last deprecated API call was made.
  migration_deadline: The time (ISO 4217 format) when the deprecated API call will be removed.
  graphql_schema_name: The name of the GraphQL schema. If the call wasn't made to a GraphQL API, then this value is null.
  version: The earliest API version to migrate to in order to avoid making the deprecated API calls.  */
  deprecated_api_calls?: DeprecatedApiCalls;
};

export type FulfillmentService = {
  id?: number;
  /** The name of the fulfillment service as seen by merchants and their customers.  */
  name?: string;
  /** The user's email address.  */
  email?: string;
  service_name?: string;
  /** A human-friendly unique string for the fulfillment service generated from its title.  */
  handle?: string;
  /** Whether the fulfillment service wants to register for APIs related to fulfillment orders. To manage fulfillments using fulfillment orders, see Manage fulfillments with Fulfillment and FulfillmentOrder resources.  */
  fulfillment_orders_opt_in?: boolean;
  include_pending_stock?: boolean;
  /** A unique identifier for the fulfillment service provider.  */
  provider_id?: null;
  /** The unique identifier of the location tied to the fulfillment service  */
  location_id?: number;
  /** States the URL endpoint that Shopify needs to retrieve inventory and tracking updates.
  If the Fulfillment Service has opted in to use fulfillment orders, then the callback_url/fulfillment_order_notification endpoint is also used to send fulfillment and cancellation requests.The callback_url field is required if inventory_management, tracking_support, or fulfillment_orders_opt_in is set to true.  */
  callback_url?: string;
  /** States if the fulfillment service provides tracking numbers for packages. Valid values are "true" and "false".  */
  tracking_support?: boolean;
  /** States if the fulfillment service tracks product inventory and provides updates to Shopify. Valid values are "true" and "false".  */
  inventory_management?: boolean;
  /** The GraphQL GID for this fulfillment service.  */
  admin_graphql_api_id?: string;
  /** Specifies the format of the API output. Valid values are json and xml.  */
  format?: string;
  /** States if the fulfillment service requires products to be physically shipped. Valid values are "true" and "false".  */
  requires_shipping_method?: boolean;
};

export type SmsMarketingConsent = {
  state?: string;
  opt_in_level?: string;
  consent_updated_at?: Date;
  consent_collected_from?: string;
};

export type DiscountApplication = {
  target_type?: string;
  type?: string;
  value?: string;
  value_type?: string;
  allocation_method?: string;
  target_selection?: string;
  code?: string;
  title?: string;
  description?: string;
};

export type CustomerSavedSearch = {
  /** A unique identifier for the customer saved search.  */
  id?: number;
  /** The name given by the shop owner to the customer saved search.  */
  name?: string;
  /** The date and time (ISO 8601  format) when the customer saved search was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601  format) when the customer saved search was last modified.  */
  updated_at?: Date;
  /** The set of conditions that determines which customers are returned by the saved search. For more information, see Customer saved search queries.  */
  query?: string;
};

export type DefaultProductImage = {
  id?: number;
  created_at?: Date;
  position?: number;
  updated_at?: Date;
  product_id?: number;
  src?: string;
  /** An array of variant ids associated with the image.  */
  variant_ids?: number[];
  width?: number;
  height?: number;
};

export type DiscountCodeCreation = {
  id?: number;
  price_rule_id?: number;
  /** The time when the marketing action was started.  */
  started_at?: Date;
  /** The date and time (ISO 8601 format) when the checkout was completed. For abandoned checkouts, this value is null until a customer completes the checkout using the recovery URL.  */
  completed_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  status?: string;
  codes_count?: number;
  imported_count?: number;
  failed_count?: number;
  logs?: unknown[];
};

export type StorefrontAccessToken = {
  /** The issued public access token.  */
  access_token?: string;
  /** An application-dependant, comma separated list of permissions associated with the token.  */
  access_scope?: string;
  /** The date and time when the public access token was created. The API returns this value in ISO 8601 format.  */
  created_at?: Date;
  /** Unique id that identifies a token and is used to perform operations on it.  */
  id?: number;
  admin_graphql_api_id?: string;
  /** An arbitrary title for each token determined by the developer/application, used for reference purposes.
  Note
  No constraint on uniqueness.  */
  title?: string;
};

export type MovedFulfillmentOrder = {
  id?: number;
  shop_id?: number;
  order_id?: number;
  assigned_location_id?: number;
  request_status?: string;
  status?: string;
  supported_actions?: string[];
  destination?: Destination;
  line_items?: LineItem[];
  fulfillment_service_handle?: string;
  assigned_location?: Origin;
  /** A list of requests sent by the merchant to the fulfillment service for this fulfillment order.
  message: The message returned by the merchant, if any.
  request_options: The request options returned by the merchant, if any.
  kind: The kind of request. Valid values: fulfillment_request, cancellation_request, or legacy_fulfill_request.  */
  merchant_requests?: MerchantRequest[];
  origin?: Origin;
  outgoing_requests?: OutgoingRequest[];
};

export type WeightBasedShippingRate = {
  id?: number;
  name?: string;
  price?: string;
  shipping_zone_id?: number;
  weight_low?: number;
  weight_high?: number;
  min_order_subtotal?: string;
  max_order_subtotal?: string;
};

export type OriginalFulfillmentOrder = {
  id?: number;
  shop_id?: number;
  order_id?: number;
  assigned_location_id?: number;
  request_status?: string;
  status?: string;
  supported_actions?: string[];
  destination?: Destination;
  line_items?: LineItem[];
  fulfillment_service_handle?: string;
  assigned_location?: Origin;
  /** A list of requests sent by the merchant to the fulfillment service for this fulfillment order.
  message: The message returned by the merchant, if any.
  request_options: The request options returned by the merchant, if any.
  kind: The kind of request. Valid values: fulfillment_request, cancellation_request, or legacy_fulfill_request.  */
  merchant_requests?: MerchantRequest[];
  origin?: Origin;
  outgoing_requests?: OutgoingRequest[];
};

export type PrerequisiteSubtotalRange = {
  greater_than_or_equal_to?: string;
};

export type MobilePlatformApplication = {
  /** Unique numeric identifier for the mobile platform application.  */
  id?: number;
  /** iOS App ID or Android application ID of the application.  */
  application_id?: string;
  /** The platform of the application.  */
  platform?: string;
  created_at?: Date;
  updated_at?: Date;
  /** The SHA256 fingerprints of the app’s signing certificate. (Android only)  */
  sha256_cert_fingerprints?: string[];
  /** Whether the application supports iOS universal links and Android App Links. If true, then URLs can be set up to link directly to the application. If false, then URLs can't link directly to the application.  */
  enabled_universal_or_app_links?: boolean;
  /** Whether the application supports iOS shared web credentials.  */
  enabled_shared_webcredentials?: boolean;
};

export type ShopifyPaymentTransaction = {
  /** The unique identifier of the transaction.  */
  id?: number;
  /** The type of the balance transaction. The value will be one of the following:
  charge
  refund
  dispute
  reserve
  adjustment
  credit
  debit
  payout
  payout_failure
  payout_cancellation  */
  type?: string;
  /** If the transaction was created for a test mode Order or payment.  */
  test?: boolean;
  /** The id of the payout the transaction was paid out in.  */
  payout_id?: number;
  /** The status of the payout the transaction was paid out in, or `pending`
  if the transaction has not yet been included in a payout.  */
  payout_status?: string;
  /** The ISO 4217 currency code of the transaction.  */
  currency?: string;
  /** The gross amount of the transaction, in a decimal formatted string.  */
  amount?: string;
  /** The total amount of fees deducted from the transaction amount.  */
  fee?: string;
  /** The net amount of the transaction.  */
  net?: string;
  /** The id of the resource leading to the transaction.  */
  source_id?: number;
  /** The type of the resource leading to the transaction.
  charge
  refund
  dispute
  reserve
  adjustment
  payout  */
  source_type?: string;
  /** The id of the Order that this transaction ultimately originated from.  */
  source_order_id?: number;
  /** The id of the Order Transaction
  that resulted in this balance transaction.  */
  source_order_transaction_id?: number;
  /** The time the transaction was processed.  */
  processed_at?: Date;
};

export type RecurringApplicationCharge = {
  /** The ID of the recurring application charge.  */
  id?: number;
  /** The name of the recurring application charge.  */
  name?: string;
  api_client_id?: number;
  /** The price of the recurring application charge. The maximum price is 10,000.  */
  price?: string;
  /** The status of the recurring charge. Valid values:
  pending: The recurring charge is pending.
  accepted: Removed in version 2021-01. The recurring charge has been accepted. As of API version 2021-01, when a merchant accepts a charge, the charge immediately transitions from pending to active.
  active: The recurring charge is activated. This is the only status that actually causes a merchant to be charged. As of API version 2021-01, when a merchant accepts a charge, the charge immediately transitions from pending to active.
  declined: The recurring charge has been declined.
  expired: The recurring charge was not accepted within 2 days of being created.
  frozen: The recurring charge is on hold due to a shop subscription non-payment. The charge will re-activate once subscription payments resume.
  cancelled: The developer cancelled the charge.  */
  status?: string;
  /** The URL where the merchant is redirected after accepting the charge.  */
  return_url?: string;
  /** The date and time (ISO 8601 format) when the customer is billed.Note: The recurring application charge must be accepted or the returned value is null.  */
  billing_on?: string;
  /** The date and time (ISO 8601 format) when the recurring application charge was created.  */
  created_at?: Date;
  /** The date and time (ISO 8601 format) when the recurring application charge was last updated.  */
  updated_at?: Date;
  /** Whether the application charge is a test transaction. Valid values: true,null.  */
  test?: boolean;
  /** The date and time (ISO 8601 format) when the customer activated the recurring application charge.Note: The recurring application charge must be activated or the returned value is null.  */
  activated_on?: string;
  /** The date and time (ISO 8601 format) when the merchant canceled their recurring application charge.Note: Returns null when the recurring application charge is not canceled.  */
  cancelled_on?: null;
  /** The number of days that the customer is eligible for a free trial.  */
  trial_days?: number;
  /** The date and time (ISO 8601 format) when the free trial ends.  */
  trial_ends_on?: string;
  decorated_return_url?: string;
  /** The URL where the merchant accepts or declines the recurring application charge.  */
  confirmation_url?: string;
  /** The limit a customer can be charged for usage based billing. If this property is provided, then you must also provide the terms property. See usage charges for more information.  */
  capped_amount?: string;
  balance_used?: number;
  balance_remaining?: number;
  risk_level?: number;
  update_capped_amount_url?: string;
  /** The terms and conditions of usage based billing charges. Must be present in order to create usage charges, for example when the capped_amount property is provided.
  Presented to the merchant when they approve an app's usage charges.  */
  terms?: string;
};

export type CountryHarmonizedSystemCode = {
  country_code?: string;
  harmonized_system_code?: string;
};

export type ReplacementFulfillmentOrder = {
  id?: number;
  shop_id?: number;
  order_id?: number;
  assigned_location_id?: number;
  request_status?: string;
  status?: string;
  supported_actions?: string[];
  destination?: Destination;
  line_items?: LineItem[];
  fulfillment_service_handle?: string;
  assigned_location?: Origin;
  /** A list of requests sent by the merchant to the fulfillment service for this fulfillment order.
  message: The message returned by the merchant, if any.
  request_options: The request options returned by the merchant, if any.
  kind: The kind of request. Valid values: fulfillment_request, cancellation_request, or legacy_fulfill_request.  */
  merchant_requests?: MerchantRequest[];
  origin?: Origin;
  outgoing_requests?: OutgoingRequest[];
};

export type CarrierShippingRateProvider = {
  id?: number;
  carrier_service_id?: number;
  flat_modifier?: string;
  percent_modifier?: string;
  service_filter?: ServiceFilter;
  shipping_zone_id?: number;
};

export type PrerequisiteShippingPriceRange = {
  less_than_or_equal_to?: string;
};

export type ExtendedAuthorizationAttribute = {
  [T: string]: unknown;
};

export type PrerequisiteToEntitlementPurchase = {
  prerequisite_amount?: string;
};

export type PrerequisiteToEntitlementQuantityRatio = {
  prerequisite_quantity?: number;
  entitled_quantity?: number;
};

export type CheckoutGiftCard = {
  id?: number;
  balance?: string;
  amount_used?: string;
  last_characters?: string;
};
