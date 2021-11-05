import React from 'react';
import ServerContextContext from './ServerContextContext.mjs';

/**
 * A [React](https://reactjs.org) hook to access the
 * [server context]{@link ServerContextContext}.
 * @kind function
 * @name useServerContext
 * @returns {ServerContext|undefined} [Node.js](https://nodejs.org) HTTP server context, or `undefined` if client rendering.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { useServerContext } from 'next-server-context';
 * ```
 *
 * ```js
 * import useServerContext from 'next-server-context/public/useServerContext.mjs';
 * ```
 * @example <caption>A [React](https://reactjs.org) component that sets the [Next.js](https://nextjs.org) page’s HTTP status code when server side rendered.</caption>
 * ```jsx
 * import useServerContext from 'next-server-context/public/useServerContext.mjs';
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
export default function useServerContext() {
  return React.useContext(ServerContextContext);
}
