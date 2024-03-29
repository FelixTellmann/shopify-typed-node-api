# Make a REST API call

Once OAuth is complete, we can use the library's `RestClient` to make an API call. To do that, you can create an instance of `RestClient` using the current shop URL and session `accessToken` to make requests to the Admin API.

## Methods

The `RestClient` offers the 4 core request methods: `get`, `delete`, `post`, and `put`, . These methods each take in an associated `<method>RequestParams` object as their argument, each with a set of required and optional parameters. The tables below outline these params objects.

### Get and Delete:

- The `get` method accepts a `GetRequestParams` object, which accepts the following parameters: `path`, `type`, `data`, `query`, `extraHeaders`, and `tries`.
- The `delete` method accepts a `DeleteRequestParams` object, **which has an identical strucuture to `GetRequestParams`**.

**`GetRequestParams` / `DeleteRequestParams`:**
| Parameter | Type | Required? | Default Value | Notes |
| -------------- | ----------------------------------- | :-------: | :-----------: | ---------------------------------------------------------------------------------------- |
| `path` | `string` | True | none | The requested API endpoint path. This can be one of two formats:<ul><li>The path starting after the `/admin/api/{version}/` prefix, such as `'products'`, which executes `/admin/api/{version}/products.json`</li><li>The full path, such as `/admin/oauth/access_scopes.json`</li></ul> |
| `data` | `Record<string, unknown> \| string` | False | none | The body of the request |
| `type` | `DataType` | False | none | The type of data being sent in the body of the request (`JSON`, `GraphQL`, `URLEncoded`) |
| `query` | `Record<string, string \| number>` | False | none | An optional query object to be appended to the request |
| `extraHeaders` | `Record<string, string \| number>` | False | none | Any additional headers you want to send with your request |
| `tries` | `number` | False | `1` | The maximum number of times to retry the request _(must be >= 0)_ |

### Post and Put:

- The `post` method accepts a `PostRequestParams` object, which differs from `get` in that both the `type` and `data` parameters are required, in addition to the `path`.
- The `put` method accepts a `PutRequestParams` object, **which has an identical structure to `PostRequestParams`**.

**`PostRequestParams` / `PutRequestParams`:**
| Parameter | Type | Required? | Default Value | Notes |
| -------------- | ----------------------------------- | :-------: | :-----------: | ---------------------------------------------------------------------------------------- |
| `path` | `string` | True | none | The requested API endpoint path. This can be one of two formats:<ul><li>The path starting after the `/admin/api/{version}/` prefix, such as `'products'`, which executes `/admin/api/{version}/products.json`</li><li>The full path, such as `/admin/oauth/access_scopes.json`</li></ul> |
| `data` | `Record<string, unknown> \| string` | True | none | The body of the request |
| `type` | `DataType` | True | none | The type of data being sent in the body of the request (`JSON`, `GraphQL`, `URLEncoded`) |
| `query` | `Record<string, string \| number>` | False | none | An optional query object to be appended to the request |
| `extraHeaders` | `Record<string, string \| number>` | False | none | Any additional headers you want to send with your request |
| `tries` | `number` | False | `1` | The maximum number of times to retry the request _(must be >= 0)_ |

## Usage Examples:

We can run the code below in any endpoint where we have access to the request and response objects.

### Perform a `GET` request:

```ts
// Load the current session to get the `accessToken`.
const session = await Shopify.Utils.loadCurrentSession(req, res);
// Create a new client for the specified shop.
const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
// Use `client.get` to request the specified Shopify REST API endpoint, in this case `products`.
const products = await client.get({
  path: 'products',
});

// do something with the returned data
```

### Perform a `POST` request:

```ts
// Load the current session to get the `accessToken`.
const session = await Shopify.Utils.loadCurrentSession(req, res);
// Create a new client for the specified shop.
const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
// Build your post request body.
const body = {
  ...
};
// Use `client.post` to send your request to the specified Shopify REST API endpoint.
await client.post({
  path: 'products',
  data: body,
  type: DataType.JSON,
});
```

## With TypeScript

We can optionally utilize the TypeScript types to get static type validation during 
development.

### Perform a `GET` request:

```ts
import { Product } from "shopify-node-api/dist/clients/rest/request_types";

const client = new Shopify.Clients.Rest(session.shop, session.accessToken);

const products = client.get<Product.Get>({
  path: "products",
  query: {
    limit: "250",
  },
});

const singleProduct = client.get<Product.GetById>({
  path: "products/1234567890",
  query: {
    fields: "variants,handle",
  },
});

// do something with the returned data
```

### Perform a `POST` request:

```ts
import { Product } from "shopify-node-api/dist/clients/rest/request_types";

const client = new Shopify.Clients.Rest(session.shop, session.accessToken);

const newProduct = await client.post<Product.Create>({
  path: "products",
  data: {
    product: {
      title: "My new product",
    },
  },
  type: DataType.JSON
})
```


### Optional use with only return Types

All return types are prefixed with `_` to avoid namespace collision.

```ts
import { _Product } from "shopify-node-api/dist/clients/rest/request_types";

const client = new Shopify.Clients.Rest(session.shop, session.accessToken);

const products: { products: _Product } = client.get({
  path: "products",
  query: {
    limit: "250",
  },
});

const singleProduct: { product: _Product } = client.get({
  path: "products/1234567890",
  query: {
    fields: "variants,handle",
  },
});

// do something with the returned data
```

_for more information on the `products` endpoint, [check out our API reference guide](https://shopify.dev/docs/admin-api/rest/reference/products/product#create-2021-01)._

[Back to guide index](../README.md)
