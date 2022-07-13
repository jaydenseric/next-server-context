// @ts-check

import React from "react";

/**
 * [Node.js](https://nodejs.org) HTTP server context.
 * @typedef {object} ServerContext
 * @prop {import("http").IncomingMessage} request
 *   [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 * @prop {import("http").ServerResponse} response
 *   [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse).
 */

/**
 * [React context](https://reactjs.org/docs/context.html) for a
 * {@linkcode ServerContext} object. Chances are you won’t have to interact with
 * this directly.
 */
const ServerContextContext = React.createContext(
  /** @type {ServerContext | undefined} */ (undefined)
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  /**
   * The display name.
   * @see [React display name conventions](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging).
   */
  ServerContextContext.displayName = "ServerContextContext";

export default ServerContextContext;
