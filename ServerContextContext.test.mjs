// @ts-check

import { strictEqual } from "node:assert";

import React from "react";
import ReactTestRenderer from "react-test-renderer";

import ServerContextContext from "./ServerContextContext.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `ServerContextContext` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`ServerContextContext` bundle size.", async () => {
    await assertBundleSize(
      new URL("./ServerContextContext.mjs", import.meta.url),
      100,
    );
  });

  tests.add("`ServerContextContext` used as a React context.", () => {
    let contextValue;

    function TestComponent() {
      contextValue = React.useContext(ServerContextContext);
      return null;
    }

    const value =
      /** @type {import("./ServerContextContext.mjs").ServerContext} */ ({});

    ReactTestRenderer.act(() => {
      ReactTestRenderer.create(
        React.createElement(
          ServerContextContext.Provider,
          { value },
          React.createElement(TestComponent),
        ),
      );
    });

    strictEqual(contextValue, value);
  });
};
