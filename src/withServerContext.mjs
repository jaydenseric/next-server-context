import React from 'react'
import { App } from '../workarounds/next-app.mjs'
import { ServerContextContext } from './ServerContextContext.mjs'

/**
 * A React higher-order component to decorate a Next.js custom `App` or page
 * component, to [provide server context]{@link ServerContextContext}.
 * @kind function
 * @name withServerContext
 * @param {object} Component Next.js custom `App` or page component.
 * @returns {WithServerContext} React higher-order component.
 * @example <caption>A custom `App`.</caption>
 * In `pages/_app.js`:
 *
 * ```jsx
 * import { withServerContext } from 'next-server-context'
 * import App from 'next/app'
 *
 * export default withServerContext(App)
 * ```
 */
export const withServerContext = Component => {
  // No prop type checks as the props are not exposed to consumers.
  // eslint-disable-next-line react/prop-types
  const WithServerContext = ({ serverContext, ...props }) => (
    <ServerContextContext.Provider value={serverContext}>
      <Component {...props} />
    </ServerContextContext.Provider>
  )

  if (process.env.NODE_ENV !== 'production')
    WithServerContext.displayName = `withServerContext(${Component.displayName ||
      Component.name ||
      'Component'})`

  WithServerContext.getInitialProps = async context => {
    const isApp = 'ctx' in context
    const { req, res } = isApp ? context.ctx : context
    const props = Component.getInitialProps
      ? await Component.getInitialProps(context)
      : isApp
      ? await App.getInitialProps(context)
      : {}

    if (req)
      props.serverContext = {
        request: req,
        response: res,

        // This prevents the server attempting to serialize the server context
        // object to JSON for hydration on the client.
        toJSON: () => undefined
      }

    return props
  }

  return WithServerContext
}
