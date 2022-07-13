// @ts-check

import React from "react";

import useServerContext from "../../../../useServerContext.mjs";
import withServerContext from "../../../../withServerContext.mjs";

function IndexPage() {
  const serverContext = useServerContext();

  let requestCustomHeader = null;

  if (serverContext) {
    requestCustomHeader = serverContext.request.headers["custom-header"];
    serverContext.response.statusCode = 418;
  }

  return typeof requestCustomHeader === "string"
    ? React.createElement("span", null, requestCustomHeader)
    : null;
}

export default withServerContext(IndexPage);
