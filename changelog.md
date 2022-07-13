# next-server-context changelog

## Next

### Major

- Updated Node.js support to `^14.17.0 || ^16.0.0 || >= 18.0.0`.
- Implemented TypeScript types via JSDoc comments, fixing [#1](https://github.com/jaydenseric/next-server-context/issues/1).

### Patch

- Updated dev dependencies.
- Simplified dev dependencies and config for ESLint.
- Removed the [`jsdoc-md`](https://npm.im/jsdoc-md) dev dependency and the package `docs-update` and `docs-check` scripts, replacing the readme “API” section with a manually written “Exports” section.
- Check TypeScript types via a new package `types` script.
- Updated GitHub Actions CI config:
  - Run tests with Node.js v14, v16, v18.
  - Updated `actions/checkout` to v3.
  - Updated `actions/setup-node` to v3.
- Use the `.mjs` file extension for Next.js pages in test fixtures.
- Added a `license.md` MIT License file.

## 4.0.0

### Major

- Updated Node.js support to `^12.22.0 || ^14.17.0 || >= 16.0.0`.
- Updated the [`next`](https://npm.im/next) peer dependency to `^12.0.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.
- Public modules are now individually listed in the package `files` and `exports` fields.
- Removed `./package` from the package `exports` field; the full `package.json` filename must be used in a `require` path.
- Removed the package main index module; deep imports must be used.
- Shortened public module deep import paths, removing the `/public/`.
- The API is now ESM in `.mjs` files instead of CJS in `.js` files, [accessible via `import` but not `require`](https://nodejs.org/dist/latest/docs/api/esm.html#require).
- Switched back to using `React.createElement` instead of the [the new React JSX runtime](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).

### Patch

- Also run GitHub Actions CI with Node.js v17.
- Simplified package scripts.
- Reorganized the test file structure.
- Test the bundle sizes for public modules individually.
- Use a new `assertBundleSize` function to assert module bundle size in tests:
  - Failure message contains details about the bundle size and how much the limit was exceeded.
  - Errors when the surplus is greater than 25% of the limit, suggesting the limit should be reduced.
  - Resolves the minified bundle and its gzipped size for debugging in tests.
- Use Node.js `ok` assertions instead of `strictEqual` where possible.
- Updated the ESLint config.
- Removed a redundant prepare step that’s a no-op in current Next.js versions when programmatically starting Next.js in tests.
- Fixed internal JSDoc types.
- Configured Prettier option `singleQuote` to the default, `false`.
- Documentation tweaks.

## 3.0.1

### Patch

- Updated the [`next`](https://npm.im/next) peer dependency to `9.0.3 - 11`.
- Updated dev dependencies.
- Added the [`eslint-config-next`](https://npm.im/eslint-config-next) dev dependency for [`next`](https://npm.im/next) v11.
- Renamed imports in the test index module.
- Amended the changelog entries for v2.0.0 and v3.0.0.

## 3.0.0

### Major

- Updated Node.js support to `^12.20 || >= 14.13`.
- Updated browser support to the Browserslist query `> 0.5%, not OperaMini all, not IE > 0, not dead`.
- Updated the [`react`](https://npm.im/react) peer dependency to `16.14 - 17`.
- Updated dev dependencies, some of which require newer Node.js versions than were previously supported.
- Replaced the the `package.json` `exports` field public [subpath folder mapping](https://nodejs.org/api/packages.html#packages_subpath_folder_mappings) (deprecated by Node.js) with a [subpath pattern](https://nodejs.org/api/packages.html#packages_subpath_patterns). Deep `require` paths within `next-server-context/public/` must now include the `.js` file extension.
- Use [the new React JSX runtime](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).
- Removed Babel related dev dependencies, config, and scripts. Published modules now contain more modern ES syntax.
- Published modules now contain JSDoc comments, which might affect TypeScript projects.
- Added a package `test:api` script to test the API, using ESM in `.mjs` files and new dev dependencies:
  - [`@testing-library/react-hooks`](https://npm.im/@testing-library/react-hooks)
  - [`coverage-node`](https://npm.im/coverage-node)
  - [`node-fetch`](https://npm.im/node-fetch)
  - [`react-test-renderer`](https://npm.im/react-test-renderer)
  - [`test-director`](https://npm.im/test-director)

### Patch

- Updated GitHub Actions CI config:
  - Run tests with Node.js v12, v14, v16.
  - Updated `actions/checkout` to v2.
  - Updated `actions/setup-node` to v2.
  - Don’t specify the `CI` environment variable as it’s set by default.
- Simplified JSDoc related package scripts now that [`jsdoc-md`](https://npm.im/jsdoc-md) v10+ automatically generates a Prettier formatted readme.
- Added a package `test:jsdoc` script that checks the readme API docs are up to date with the source JSDoc.
- Test the bundle size manually using [`esbuild`](https://npm.im/esbuild) and [`gzip-size`](https://npm.im/gzip-size), removing [`size-limit`](https://npm.im/size-limit) related dev dependencies, config, and scripts.
- Use the `.js` file extension in internal `require` paths.
- Refactored an arrow function to a regular function within the function `withServerContext`.
- Removed `npm-debug.log` from the `.gitignore` file as npm [v4.2.0](https://github.com/npm/npm/releases/tag/v4.2.0)+ doesn’t create it in the current working directory.
- Improved documentation.
- Updated a URL in the v2.0.0 changelog entry.
- The file `changelog.md` is no longer published.

## 2.0.0

### Major

- Updated the package `engines.node` field to `^10.17.0 || ^12.0.0 || >= 13.7.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.
- Added a [package `exports` field](https://nodejs.org/api/packages.html#packages_exports) with [conditional exports](https://nodejs.org/api/packages.html#packages_conditional_exports) to support native ESM in Node.js and keep internal code private, whilst avoiding [the dual package hazard](https://nodejs.org/api/packages.html#packages_dual_package_hazard). Published files have been reorganized, so previously undocumented deep imports will need to be rewritten according to the newly documented paths.
- Removed the package `module` field.

### Patch

- Updated the [`next`](https://npm.im/next) peer dependency to `9.0.3 - 10`.
- Updated the [`react`](https://npm.im/react) peer dependency to `16.8 - 17`.
- Updated dependencies.
- Removed the redundant [`object-assign`](https://npm.im/object-assign) dependency and related [`size-limit`](https://npm.im/size-limit) config.
- Updated the package `keywords` field.
- Ensure GitHub Actions run on pull request.
- Also run GitHub Actions with Node.js v14 and v15, and not v13.
- Simplified the GitHub Actions CI config with the [`npm install-test`](https://docs.npmjs.com/cli/v7/commands/npm-install-test) command.
- Updated EditorConfig.
- Simplified the Babel config and scripts:
  - Removed the [`babel-plugin-transform-require-extensions`](https://npm.im/babel-plugin-transform-require-extensions) dev dependency.
  - Replaced the `prepare:mjs` and `prepare:js` package scripts with a `prepare:babel` script.
  - Use `.json` instead of `.js` config.
  - Moved Browserslist config to the package `browserslist` field.
  - Ensure `.js` files are parsed as scripts.
- Updated test scripts.
- Configured Prettier option `semi` to the default, `true`.
- Lint fixes.
- Fixed typos in `useServerContext` examples.
- Documented all the ways to `import` and `require` the public API.
- Misc. readme improvements.
- Allow `displayName` for React components to be eliminated in production builds.

## 1.0.0

Initial release.
