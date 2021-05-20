# next-server-context

[![npm version](https://badgen.net/npm/v/next-server-context)](https://npm.im/next-server-context) [![CI status](https://github.com/jaydenseric/next-server-context/workflows/CI/badge.svg)](https://github.com/jaydenseric/next-server-context/actions)

A [Next.js](https://nextjs.org) [`App` or page decorator](#function-withservercontext), [React context object](#constant-servercontextcontext), and [React hook](#function-useservercontext) to access Node.js HTTP server context when rendering components.

Some uses:

- Setting the HTTP response status code for the server side rendered page according to [GraphQL](https://graphql.org) query results in components.
- Isomorphically accessing cookies within components.

## Setup

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install next-server-context
```

Decorate either the entire [Next.js](https://nextjs.org) app or individual pages using [`withServerContext`](#function-withservercontext) to be able to use the [`useServerContext`](#function-useservercontext) [React](https://reactjs.org) hook.

## Support

- [Node.js](https://nodejs.org): `^12.20 || >= 14.13`
- [Browsers](https://npm.im/browserslist): `> 0.5%, not OperaMini all, not IE > 0, not dead`

## API

- [function useServerContext](#function-useservercontext)
- [function withServerContext](#function-withservercontext)
- [constant ServerContextContext](#constant-servercontextcontext)
- [type ServerContext](#type-servercontext)

### function useServerContext

A [React](https://reactjs.org) hook to access the [server context](#constant-servercontextcontext).

**Returns:** [ServerContext](#type-servercontext) | `undefined` — [Node.js](https://nodejs.org) HTTP server context, or `undefined` if client rendering.

#### Examples

_Ways to `import`._

> ```js
> import { useServerContext } from 'next-server-context';
> ```
>
> ```js
> import useServerContext from 'next-server-context/public/useServerContext.js';
> ```

_Ways to `require`._

> ```js
> const { useServerContext } = require('next-server-context');
> ```
>
> ```js
> const useServerContext = require('next-server-context/public/useServerContext.js');
> ```

_A [React](https://reactjs.org) component that sets the [Next.js](https://nextjs.org) page’s HTTP status code when server side rendered._

> ```jsx
> import { useServerContext } from 'next-server-context';
>
> export default function ErrorMissing() {
>   const serverContext = useServerContext();
>   if (serverContext) serverContext.response.statusCode = 404;
>   return (
>     <section>
>       <h1>Error 404</h1>
>       <p>Something is missing.</p>
>     </section>
>   );
> }
> ```

---

### function withServerContext

A higher-order [React](https://reactjs.org) component to decorate a [Next.js](https://nextjs.org) custom `App` or page component, to provide [server context](#constant-servercontextcontext).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `Component` | object | [Next.js](https://nextjs.org) custom `App` or page component. |

**Returns:** WithServerContext — Higher-order [React](https://reactjs.org) component.

#### Examples

_Ways to `import`._

> ```js
> import { withServerContext } from 'next-server-context';
> ```
>
> ```js
> import withServerContext from 'next-server-context/public/withServerContext.js';
> ```

_Ways to `require`._

> ```js
> const { withServerContext } = require('next-server-context');
> ```
>
> ```js
> const withServerContext = require('next-server-context/public/withServerContext.js');
> ```

_A [Next.js](https://nextjs.org) custom `App`._

> In `pages/_app.js`:
>
> ```jsx
> import { withServerContext } from 'next-server-context';
> import App from 'next/app';
>
> export default withServerContext(App);
> ```

---

### constant ServerContextContext

[React context object](https://reactjs.org/docs/context#api) for a [`ServerContext`](#type-servercontext) object. Chances are you won’t have to interact with this directly.

**Type:** object

| Property | Type | Description |
| :-- | :-- | :-- |
| `Provider` | Function | [React context provider component](https://reactjs.org/docs/context#contextprovider). |
| `Consumer` | Function | [React context consumer component](https://reactjs.org/docs/context#contextconsumer). |

#### Examples

_Ways to `import`._

> ```js
> import { ServerContextContext } from 'next-server-context';
> ```
>
> ```js
> import ServerContextContext from 'next-server-context/public/ServerContextContext.js';
> ```

_Ways to `require`._

> ```js
> const { ServerContextContext } = require('next-server-context');
> ```
>
> ```js
> const ServerContextContext = require('next-server-context/public/ServerContextContext.js');
> ```

---

### type ServerContext

[Node.js](https://nodejs.org) HTTP server context.

**Type:** object

| Property | Type | Description |
| :-- | :-- | :-- |
| `request` | IncomingMessage | [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage). |
| `response` | ServerResponse | [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse). |
