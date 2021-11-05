import React from 'react';

/**
 * [React context object](https://reactjs.org/docs/context#api) for a
 * [`ServerContext`]{@link ServerContext} object. Chances are you won’t have to
 * interact with this directly.
 * @kind constant
 * @name ServerContextContext
 * @type {object}
 * @prop {Function} Provider [React context provider component](https://reactjs.org/docs/context#contextprovider).
 * @prop {Function} Consumer [React context consumer component](https://reactjs.org/docs/context#contextconsumer).
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { ServerContextContext } from 'next-server-context';
 * ```
 *
 * ```js
 * import ServerContextContext from 'next-server-context/public/ServerContextContext.mjs';
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
