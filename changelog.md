# next-server-context changelog

## Next

### Major

- Updated the package `engines.node` field to `^10.17.0 || ^12.0.0 || >= 13.7.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.
- Added a [package `exports` field](https://nodejs.org/api/packages.html#packages_exports) with [conditional exports](https://nodejs.org/api/packages.html#packages_conditional_exports) to support native ESM in Node.js and keep internal code private, whilst avoiding [the dual package hazard](https://nodejs.org/api/packages.html#packages_dual_package_hazard). Published files have been reorganized, so previously undocumented deep imports will need to be rewritten according to the newly documented paths.
- Removed the package `module` field.

### Patch

- Update the [`next`](https://npm.im/next) peer dependency to `9.0.3 - 10`.
- Updated the [`react`](https://npm.im/react) peer dependency to `16.8 - 17`.
- Updated dependencies.
- Updated the package `keywords` field.
- Ensure GitHub Actions run on pull request.
- Also run GitHub Actions with Node.js v14 and v15, and not v13.
- Simplified the GitHub Actions CI config with the [`npm install-test`](https://docs.npmjs.com/cli/install-test.html) command.
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
- Fixed the `useServerContext` code example.
- Documented all the ways to `import` and `require` the public API.

## 1.0.0

Initial release.
