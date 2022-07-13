// @ts-check

import NextApp from "next/app.js";
import React from "react";

import ServerContextContext from "./ServerContextContext.mjs";

/**
 * Decorates a Next.js custom `App` or page React component, to provide
 * {@link ServerContextContext server context}.
 * @param {import("next").NextComponentType<
 *   import("next/app.js").AppContext | import("next").NextPageContext,
 *   any,
 *   any
 * >} Component Next.js custom `App` or page React component.
 * @returns Next.js custom `App` or page higher-order React component.
 * @example
 * A Next.js custom `App` in `pages/_app.js`:
 *
 * ```jsx
 * import withServerContext from "next-server-context/withServerContext.mjs";
 * import App from "next/app";
 *
 * export default withServerContext(App);
 * ```
 */
export default function withServerContext(Component) {
  /**
   * Next.js custom `App` or page higher-order React component.
   * @type {import("next").NextComponentType<
   *   import("next/app.js").AppContext | import("next").NextPageContext,
   *   {
   *     serverContext?: import("./ServerContextContext.mjs").ServerContext,
   *     [key: string]: unknown,
   *   },
   *   {
   *     serverContext?: import("./ServerContextContext.mjs").ServerContext,
   *     [key: string]: unknown,
   *   }
   * >}
   */
  const WithServerContext = ({ serverContext, ...props }) => {
    return React.createElement(
      ServerContextContext.Provider,
      { value: serverContext },
      React.createElement(Component, props)
    );
  };

  if (typeof process === "object" && process.env.NODE_ENV !== "production")
    /**
     * The display name.
     * @see [React display name conventions](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging).
     */
    WithServerContext.displayName = `WithServerContext(${
      Component.displayName || Component.name || "Component"
    })`;

  WithServerContext.getInitialProps = async (context) => {
    const isApp = "ctx" in context;
    const { req, res } = isApp ? context.ctx : context;
    const props = Component.getInitialProps
      ? await Component.getInitialProps(context)
      : isApp
      ? await NextApp.default.getInitialProps(context)
      : {};

    return req
      ? {
          ...props,
          serverContext: {
            request: req,
            response: res,

            // This prevents the server attempting to serialize the server
            // context object to JSON for hydration on the client.
            toJSON: () => undefined,
          },
        }
      : props;
  };

  return WithServerContext;
}
