import React from 'react';
import { ServerContextContext } from './ServerContextContext.mjs';

/**
 * A React hook to access the [server context]{@link ServerContextContext}.
 * @kind function
 * @name useServerContext
 * @returns {ServerContext|undefined} Node.js HTTP server context, or `undefined` if client rendering.
 * @example <caption>How React component that sets the Next.js page’s HTTP status code when server side rendered.</caption>
 * ```jsx
 * import { useServerContext } from 'next-server-context';
 *
 * export default function ErrorMissing() {
 *   serverContext = useServerContext();
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
export const useServerContext = () => React.useContext(ServerContextContext);
