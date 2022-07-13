// @ts-check

import NextApp from "next/app.js";
import React from "react";

import withServerContext from "../../../../withServerContext.mjs";

/**
 * @type {import("next").NextComponentType<
 *   import("next/app.js").AppContext,
 *   import("next/app.js").AppInitialProps & { appCustomProp: string },
 *   import("next/app.js").AppProps & { appCustomProp: string }
 * >}
 */
const App = ({ Component, pageProps, appCustomProp }) => {
  return React.createElement(
    React.Fragment,
    null,
    appCustomProp,
    React.createElement(Component, pageProps)
  );
};

App.getInitialProps = async (context) => {
  const props = await NextApp.default.getInitialProps(context);

  return {
    ...props,
    // Add the value together so the test assertion that the HTML contains
    // `appCustomProp_value` will only be true if the value rendered correctly.
    appCustomProp: "appCustomProp" + "_value",
  };
};

export default withServerContext(App);
