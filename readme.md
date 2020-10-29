# next-server-context

[![npm version](https://badgen.net/npm/v/next-server-context)](https://npm.im/next-server-context) [![CI status](https://github.com/jaydenseric/next-server-context/workflows/CI/badge.svg)](https://github.com/jaydenseric/next-server-context/actions)

A [Next.js `App` or page decorator](#function-withservercontext), [React context object](#constant-servercontextcontext), and [React hook](#function-useservercontext) to access Node.js HTTP server context when rendering components.

Some uses:

- Setting the HTTP response status code for the server side rendered page according to GraphQL query results in components.
- Isomorphically access a cookie within components.

## Setup

To install from [npm](https://npmjs.com) run:

```sh
npm install next-server-context
```

## Support

- Node.js v10+
- Browsers [`> 0.5%, not OperaMini all, not dead`](https://browserl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead)

## API

### Table of contents

- [function useServerContext](#function-useservercontext)
- [function withServerContext](#function-withservercontext)
- [constant ServerContextContext](#constant-servercontextcontext)
- [type ServerContext](#type-servercontext)

### function useServerContext

A React hook to access the [server context](#constant-servercontextcontext).

**Returns:** [ServerContext](#type-servercontext) | `undefined` — Node.js HTTP server context, or `undefined` if client rendering.

#### Examples

_How React component that sets the Next.js page’s HTTP status code when server side rendered._

> ```jsx
> import { useServerContext } from 'next-server-context';
>
> export default function ErrorMissing() {
>   serverContext = useServerContext();
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

A React higher-order component to decorate a Next.js custom `App` or page component, to [provide server context](#constant-servercontextcontext).

| Parameter   | Type   | Description                             |
| :---------- | :----- | :-------------------------------------- |
| `Component` | object | Next.js custom `App` or page component. |

**Returns:** WithServerContext — React higher-order component.

#### Examples

_A custom `App`._

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

_How to import._

> ```js
> import { ServerContextContext } from 'next-server-context';
> ```

---

### type ServerContext

Node.js HTTP server context.

**Type:** object

| Property | Type | Description |
| :-- | :-- | :-- |
| `request` | IncomingMessage | [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage). |
| `response` | ServerResponse | [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse). |
