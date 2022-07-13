# next-server-context

[![npm version](https://badgen.net/npm/v/next-server-context)](https://npm.im/next-server-context) [![CI status](https://github.com/jaydenseric/next-server-context/workflows/CI/badge.svg)](https://github.com/jaydenseric/next-server-context/actions)

A [Next.js](https://nextjs.org) [`App` or page decorator](./withServerContext.mjs), [React context object](./ServerContextContext.mjs), and [React hook](./useServerContext.mjs) to access [Node.js](https://nodejs.org) HTTP server context when rendering components.

Some uses:

- Setting the HTTP response status code for the server side rendered page according to [GraphQL](https://graphql.org) query results in components.
- Isomorphically accessing cookies within components.

## Installation

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install next-server-context
```

Decorate either the entire [Next.js](https://nextjs.org) app or individual pages using [`withServerContext`](./withServerContext.mjs) to be able to use the [`useServerContext`](./useServerContext.mjs) [React](https://reactjs.org) hook.

## Requirements

- [Node.js](https://nodejs.org): `^14.17.0 || ^16.0.0 || >= 18.0.0`
- [Browsers](https://npm.im/browserslist): `> 0.5%, not OperaMini all, not IE > 0, not dead`

## Exports

These ECMAScript modules are published to [npm](https://npmjs.com) and exported via the [`package.json`](./package.json) `exports` field:

- [`ServerContextContext.mjs`](./ServerContextContext.mjs)
- [`useServerContext.mjs`](./useServerContext.mjs)
- [`withServerContext.mjs`](./withServerContext.mjs)
