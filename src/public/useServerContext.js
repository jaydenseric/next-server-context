'use strict';

const React = require('react');
const ServerContextContext = require('./ServerContextContext');

/**
 * A React hook to access the [server context]{@link ServerContextContext}.
 * @kind function
 * @name useServerContext
 * @returns {ServerContext|undefined} Node.js HTTP server context, or `undefined` if client rendering.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { useServerContext } from 'next-server-context';
 * ```
 *
 * ```js
 * import useServerContext from 'next-server-context/public/useServerContext.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { useServerContext } = require('next-server-context');
 * ```
 *
 * ```js
 * const useServerContext = require('next-server-context/public/useServerContext');
 * ```
 * @example <caption>A React component that sets the Next.js page’s HTTP status code when server side rendered.</caption>
 * ```jsx
 * import { useServerContext } from 'next-server-context';
 *
 * export default function ErrorMissing() {
 *   const serverContext = useServerContext();
 *   if (serverContext) serverContext.response.statusCode = 404;
 *   return (
 *     <section>
 *       <h1>Error 404</h1>
 *       <p>Something is missing.</p>
 *     </section>
 *   );
 * }
 * ```
 */
module.exports = function useServerContext() {
  return React.useContext(ServerContextContext);
};
