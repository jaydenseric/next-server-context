# next-server-context

A [Next.js](https://nextjs.org) [`App` or page decorator](./withServerContext.mjs), [React context object](./ServerContextContext.mjs), and [React hook](./useServerContext.mjs) to access [Node.js](https://nodejs.org) HTTP server context when rendering components.

Some uses:

- Setting the HTTP response status code for the server side rendered page according to [GraphQL](https://graphql.org) query results in components.
- Isomorphically accessing cookies within components.

## Installation

To install [`next-server-context`](https://npm.im/next-server-context) with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), run:

```sh
npm install next-server-context
```

Decorate either the entire [Next.js](https://nextjs.org) app or individual pages using the function [`withServerContext`](./withServerContext.mjs) to be able to use the [React](https://reactjs.org) hook [`useServerContext`](./useServerContext.mjs).

## Requirements

Supported runtime environments:

- [Node.js](https://nodejs.org) versions `^18.17.0 || >=20.4.0`.
- Browsers matching the [Browserslist](https://browsersl.ist) query [`> 0.5%, not OperaMini all, not dead`](https://browsersl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead).

Projects must configure [TypeScript](https://www.typescriptlang.org) to use types from the ECMAScript modules that have a `// @ts-check` comment:

- [`compilerOptions.allowJs`](https://www.typescriptlang.org/tsconfig#allowJs) should be `true`.
- [`compilerOptions.maxNodeModuleJsDepth`](https://www.typescriptlang.org/tsconfig#maxNodeModuleJsDepth) should be reasonably large, e.g. `10`.
- [`compilerOptions.module`](https://www.typescriptlang.org/tsconfig#module) should be `"node16"` or `"nodenext"`.

## Exports

The [npm](https://npmjs.com) package [`next-server-context`](https://npm.im/next-server-context) features [optimal JavaScript module design](https://jaydenseric.com/blog/optimal-javascript-module-design). It doesn’t have a main index module, so use deep imports from the ECMAScript modules that are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`ServerContextContext.mjs`](./ServerContextContext.mjs)
- [`useServerContext.mjs`](./useServerContext.mjs)
- [`withServerContext.mjs`](./withServerContext.mjs)
