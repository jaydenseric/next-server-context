import React from 'react'

/**
 * [React context object](https://reactjs.org/docs/context#api) for a
 * [`ServerContext`]{@link ServerContext} object. Chances are you won’t have to
 * interact with this directly.
 * @kind constant
 * @name ServerContextContext
 * @type {object}
 * @prop {Function} Provider [React context provider component](https://reactjs.org/docs/context#contextprovider).
 * @prop {Function} Consumer [React context consumer component](https://reactjs.org/docs/context#contextconsumer).
 * @example <caption>How to import.</caption>
 * ```js
 * import { ServerContextContext } from 'next-server-context'
 * ```
 */
export const ServerContextContext = React.createContext()

ServerContextContext.displayName = 'ServerContextContext'
