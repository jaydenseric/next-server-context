// @ts-check

import React from "react";

import ServerContextContext from "./ServerContextContext.mjs";

/**
 * React hook to use the {@linkcode ServerContextContext}.
 * @example
 * A React component that sets the Next.js page’s HTTP status code when server
 * side rendered:
 *
 * ```jsx
 * import useServerContext from "next-server-context/useServerContext.mjs";
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
