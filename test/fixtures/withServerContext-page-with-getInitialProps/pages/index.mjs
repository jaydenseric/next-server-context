// @ts-check

import React from "react";

import useServerContext from "../../../../useServerContext.mjs";
import withServerContext from "../../../../withServerContext.mjs";

/** @type {import("next").NextPage<{ pageCustomProp: string }>} */
const IndexPage = ({ pageCustomProp }) => {
  const serverContext = useServerContext();

  let requestCustomHeader = null;

  if (serverContext) {
    requestCustomHeader = serverContext.request.headers["custom-header"];
    serverContext.response.statusCode = 418;
  }

  return React.createElement(
    "span",
    null,
    `${requestCustomHeader} ${pageCustomProp}`,
  );
};

IndexPage.getInitialProps = async () => ({
  // Add the value together so the test assertion that the HTML contains
  // `pageCustomProp_value` will only be true if the value rendered correctly.
  pageCustomProp: "pageCustomProp" + "_value",
});

export default withServerContext(IndexPage);
