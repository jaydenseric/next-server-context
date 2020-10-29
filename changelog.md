# next-server-context changelog

## Next

### Major

- Updated the package `engines.node` field to `^10.17.0 || ^12.0.0 || >= 13.7.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.

### Patch

- Update the [`next`](https://npm.im/next) peer dependency to `9.0.3 - 10`.
- Updated the [`react`](https://npm.im/react) peer dependency to `16.8 - 17`.
- Updated dependencies.
- Ensure GitHub Actions run on pull request.
- Also run GitHub Actions with Node.js v14 and v15, and not v13.
- Simplified the GitHub Actions CI config with the [`npm install-test`](https://docs.npmjs.com/cli/install-test.html) command.
- Configured Prettier option `semi` to the default, `true`.
- Lint fixes.

## 1.0.0

Initial release.
