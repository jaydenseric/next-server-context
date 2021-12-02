import { ok, strictEqual } from "assert";
import React from "react";
import ReactTestRenderer from "react-test-renderer";
import ServerContextContext from "../ServerContextContext.mjs";
import getBundleSize from "./getBundleSize.mjs";

export default (tests) => {
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

  tests.add("`ServerContextContext` bundle size.", async () => {
    const kB = await getBundleSize(
      new URL("../ServerContextContext.mjs", import.meta.url)
    );
    ok(kB < 0.5);
  });
};
