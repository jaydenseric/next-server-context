import { strictEqual } from "assert";
import React from "react";
import ReactTestRenderer from "react-test-renderer";
import ServerContextContext from "./ServerContextContext.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`ServerContextContext` bundle size.", async () => {
    await assertBundleSize(
      new URL("./ServerContextContext.mjs", import.meta.url),
      100
    );
  });

  tests.add("`ServerContextContext` used as a React context.", () => {
    const TestComponent = () => React.useContext(ServerContextContext);
    const contextValue = "a";
    const testRenderer = ReactTestRenderer.create(
      React.createElement(
        ServerContextContext.Provider,
        { value: contextValue },
        React.createElement(TestComponent)
      )
    );

    strictEqual(testRenderer.toJSON(), contextValue);
  });
};
