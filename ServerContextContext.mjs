import React from 'react';

/**
 * [Node.js](https://nodejs.org) HTTP server context.
 * @kind typedef
 * @name ServerContext
 * @type {object}
 * @prop {IncomingMessage} request [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 * @prop {ServerResponse} response [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse).
 */

/**
 * [React context object](https://reactjs.org/docs/context#api) for a
 * [`ServerContext`]{@link ServerContext} object. Chances are you won’t have to
 * interact with this directly.
 * @kind constant
 * @name ServerContextContext
 * @type {object}
 * @prop {Function} Provider [React context provider component](https://reactjs.org/docs/context#contextprovider).
 * @prop {Function} Consumer [React context consumer component](https://reactjs.org/docs/context#contextconsumer).
 * @example <caption>How to `import`.</caption>
 * ```js
 * import ServerContextContext from 'next-server-context/ServerContextContext.mjs';
 * ```
 */
const ServerContextContext = React.createContext();

if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
  /**
   * The display name.
   * @kind member
   * @name ServerContextContext.displayName
   * @type {string}
   * @see [React display name conventions](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging).
   * @ignore
   */
  ServerContextContext.displayName = 'ServerContextContext';

export default ServerContextContext;
