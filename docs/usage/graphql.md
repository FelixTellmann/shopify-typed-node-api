# Make a GraphQL API call

Once OAuth is complete, we can use the library's `GraphqlClient` to make requests to the GraphQL Admin API in a similar way. To do that, create an instance of `GraphqlClient` using the current shop URL and session `accessToken` in your app's endpoint.

The `GraphQLClient`'s main method is `query`, which accepts a `GraphQLParams` object as its argument. `GraphQLParams` only requires the `data` parameter, but also optionally accepts `query`, `extraHeaders`, and `tries`:

| Parameter      | Type                                | Required? | Default Value | Notes                                                                                 |
| -------------- | ----------------------------------- | :-------: | :-----------: | ------------------------------------------------------------------------------------- |
| `data`         | `Record<string, unknown> \| string` |   True    |     none      | Takes in either the query as a string, and an object containing a query and variables |
| `query`        | `Record<string, string \| number>`  |   False   |     none      | An optional query object to be appended to the request                                |
| `extraHeaders` | `Record<string, string \| number>`  |   False   |     none      | Any additional headers you want to send with your request                             |
| `tries`        | `number`                            |   False   |      `1`      | The maximum number of times to retry the request _(must be >= 0)_                     |

```ts
// Load the current session to get the `accessToken`
const session = await Shopify.Utils.loadCurrentSession(req, res);
// GraphQLClient takes in the shop url and the accessToken for that shop.
const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);
// Use client.query and pass your query as `data`
const products = await client.query({
  data: `{
      products (first: 10) {
        edges {
          node {
            id
            title
            descriptionHtml
          }
        }
      }
    }`,
});

// do something with the returned data
```

## With TypeScript

The easiest way to get started with TypeScript and the Shopify Graphql endpoints is by 
utilizing Codegen to create Types automatically from your queries.



### Setting up Codegen
To add Codegen to your Project simply run 
```bash
yarn add --dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations

or 

npm install --dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations
```

Next, we need a `.graphql.yml` config to setup codegen for our project. Make sure to 
add the `.graphql.yml` to your `.gitignore` as you will need access to a live endpoint.
Alternatively, 

Add the following config into your `.graphql.yml` file:
```yaml
overwrite: true
schema:
  - https://{{DOMAIN_TO_A_SHOPIFY_STORE}}.myshopify.com/admin/api/2022-01/graphql:
      headers:
        X-Shopify-Access-Token: {{SHOPIFY_API_KEY}}
documents: "shopify/graphql/**/*.{ts,js}"
generates:
  shopify\graphql\types.ts:
    plugins:
      - typescript
      - typescript-operations
    config:
      onlyOperationTypes: true
      skipTypeNameForRoot: true
      skipTypename: true
      enumsAsTypes: true
```

You can simply create a development store from your Partner Dashboard and create a new 
Private App with all Access Scopes and replace the `DOMAIN_TO_A_SHOPIFY_STORE` and 
`SHOPIFY_API_KEY` with your newly created access details. _You do not have to use any 
live Store to generate the Graphql types._

Once Codegen is fully setup, you can save your Graphql queries in `./shopify/graphql/` 
as `.ts` or `.js` files.

Example `./shopify/graphql/appSubscriptionCreateMutation.ts`
```ts
export const appSubscriptionCreateMutation = /* GraphQL*/ `
  mutation appSubscriptionCreate($name: String!, $price: Decimal!, $returnUrl: URL!, $test: Boolean, $trialDays: Int) {
    appSubscriptionCreate(
      name: $name, 
      lineItems: [{
        plan: {
          appRecurringPricingDetails: {
            price: { amount: $price, currencyCode: USD }
            interval: EVERY_30_DAYS
          }
        }
      }],
      returnUrl: $returnUrl,
      test: $test,
      trialDays: $trialDays) {
      appSubscription {
        createdAt
        currentPeriodEnd
        id
        name
        returnUrl
        status
        test
        trialDays
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }`;
```

Finally, you can run `graphql-codegen --config .graphql.yml` from you terminal or add 
it as a script to your `package.json`. Make sure to run the script each time that you 
create or update a query in your `./shopify/graphql/` folder.

```json
{
  ...
  "scripts": {
    ...
    "codegen": "graphql-codegen --config .graphql.yml"
  },
  ...
}
```

You can also change the folder as you like. Just make sure that the config matches 
where your queries are saved.

### Making use of your types with the Shopify Graphql Client

```ts
import { AppSubscriptionCreateMutation, AppSubscriptionCreateMutationVariables } from  "shopify/graphql/types";

// Load the current session to get the `accessToken`
const session = await Shopify.Utils.loadCurrentSession(req, res);
// GraphQLClient takes in the shop url and the accessToken for that shop.
const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);
// Use client.query and pass your query as `data`

const appSubscription = await client.query<{ response: { data: AppSubscriptionCreateMutation };  variables: ppSubscriptionCreateMutationVariables;  }>({
  data: {
    query: appSubscriptionCreateMutation,
    variables: {
      name: "MyAppSubscription",
      price: 19.99,
      returnUrl: `https://myapp.com/?shop=${shop}`,
    },
  },
});
```


### Combining multiple Queries or multiple Mutations

You can now merge multiple queries with the Graphql Client. Simply add the request 
query as an array of strings. If you want to utilize query variables, ensure that 
variables are unique for each graphql query. **It is only possible to merge Query 
requests with Query requests and Mutations with Mutations. It is not possible to 
combine Query and Mutation requests in a single batch request.**

`./shopify/graphql/webhookSubscriptionQuery.ts`
```ts
export const webhookSubscriptionQuery = /* GraphQL*/ `
  query getWebhookSubscriptions($webhookCount: Int!, $webhookTopics: [WebhookSubscriptionTopic!]) {
    webhookSubscriptions(first: $webhookCount, topics: $webhookTopics) {
      edges {
        node {
          id
          topic
          endpoint {
            ... on WebhookHttpEndpoint {
              callbackUrl
            }
            ... on WebhookEventBridgeEndpoint {
              arn
            }
          }
        }
      }
    }
  }
`;

```

`./shopify/graphql/appInstallationQuery.ts`
```ts
export const appInstallationQuery = /* GraphQL */ `
  query getAppInstallation {
    appInstallation {
      accessScopes {
        handle
      }
      activeSubscriptions {
        createdAt
        currentPeriodEnd
        id
        name
        returnUrl
        status
        test
        trialDays
      }
    }
  }
`;

```

Make sure that `graphql-codegen --config .graphql.yml` is run after creating the queries.

```ts

import { GetAppInstallationQuery, GetWebhookSubscriptionsQuery, GetWebhookSubscriptionsQueryVariables } from  
    "shopify/graphql/types";

// Load the current session to get the `accessToken`
const session = await Shopify.Utils.loadCurrentSession(req, res);
// GraphQLClient takes in the shop url and the accessToken for that shop.
const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);
// Use client.query and pass your query as `data`

const {} = await client.query<{
    response: { data: GetAppInstallationQuery & GetWebhookSubscriptionsQuery };
    variables: GetWebhookSubscriptionsQueryVariables;
  }>({
    data: {
      query: [webhookSubscriptionQuery, appInstallationQuery],
      variables: {
        webhookCount: 5,
        webhookTopics: ["APP_UNINSTALLED"],
      },
    },
  });

const authDetails = await getShopifyAuthDetails(shop, accessToken);

const { appInstallation, webhookSubscriptions } = authDetails.body.data;
// do something with the returned data
```


[Back to guide index](../README.md)
