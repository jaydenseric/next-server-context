// @ts-check

import { strictEqual } from "node:assert";

import React from "react";
import ReactTestRenderer from "react-test-renderer";

import ServerContextContext from "./ServerContextContext.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";
import ReactHookTest from "./test/ReactHookTest.mjs";
import useServerContext from "./useServerContext.mjs";

/**
 * Adds `useServerContext` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`useServerContext` bundle size.", async () => {
    await assertBundleSize(
      new URL("./useServerContext.mjs", import.meta.url),
      150,
    );
  });

  tests.add("`useServerContext` with server context context missing.", () => {
    /** @type {Array<unknown>} */
    const results = [];

    ReactTestRenderer.act(() => {
      ReactTestRenderer.create(
        React.createElement(ReactHookTest, { hook: useServerContext, results }),
      );
    });

    strictEqual(results.length, 1);
    strictEqual(results[0], undefined);
  });

  tests.add("`useServerContext` getting the server context.", () => {
    /** @type {Array<unknown>} */
    const results = [];

    /** @type {import("react-test-renderer").ReactTestRenderer | undefined} */
    let testRenderer;

    const serverContextA =
      /** @type {import("./ServerContextContext.mjs").ServerContext} */ ({});

    ReactTestRenderer.act(() => {
      testRenderer = ReactTestRenderer.create(
        React.createElement(
          ServerContextContext.Provider,
          { value: serverContextA },
          React.createElement(ReactHookTest, {
            hook: useServerContext,
            results,
          }),
        ),
      );
    });

    strictEqual(results.length, 1);
    strictEqual(results[0], serverContextA);

    const tr =
      /** @type {import("react-test-renderer").ReactTestRenderer} */
      (testRenderer);

    // The server context shouldn’t change, but it’s good to test the normal
    // React context and hooks behavior anyway.

    const serverContextB =
      /** @type {import("./ServerContextContext.mjs").ServerContext} */ ({});

    ReactTestRenderer.act(() => {
      tr.update(
        React.createElement(
          ServerContextContext.Provider,
          { value: serverContextB },
          React.createElement(ReactHookTest, {
            hook: useServerContext,
            results,
          }),
        ),
      );
    });

    strictEqual(results.length, 2);
    strictEqual(results[1], serverContextB);
  });
};
