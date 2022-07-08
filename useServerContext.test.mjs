import { cleanup, renderHook } from "@testing-library/react-hooks/lib/pure.js";
import { strictEqual } from "assert";
import React from "react";

import ServerContextContext from "./ServerContextContext.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";
import useServerContext from "./useServerContext.mjs";

export default (tests) => {
  tests.add("`useServerContext` bundle size.", async () => {
    await assertBundleSize(
      new URL("./useServerContext.mjs", import.meta.url),
      150
    );
  });

  tests.add("`useServerContext` with server context context missing.", () => {
    try {
      const { result } = renderHook(() => useServerContext());

      strictEqual(result.all.length, 1);
      strictEqual(result.current, undefined);
      strictEqual(result.error, undefined);
    } finally {
      cleanup();
    }
  });

  tests.add("`useServerContext` getting the server context.", () => {
    try {
      const wrapper = ({ serverContext, children }) =>
        React.createElement(
          ServerContextContext.Provider,
          { value: serverContext },
          children
        );

      const serverContextA = {};

      const { result, rerender } = renderHook(() => useServerContext(), {
        wrapper,
        initialProps: {
          serverContext: serverContextA,
        },
      });

      strictEqual(result.all.length, 1);
      strictEqual(result.current, serverContextA);
      strictEqual(result.error, undefined);

      // The server context shouldn’t change, but it’s good to test the normal
      // React context and hooks behavior anyway.

      const serverContextB = {};

      rerender({ serverContext: serverContextB });

      strictEqual(result.all.length, 2);
      strictEqual(result.current, serverContextB);
      strictEqual(result.error, undefined);
    } finally {
      cleanup();
    }
  });
};
