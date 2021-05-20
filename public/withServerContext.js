'use strict';

const { default: NextApp } = require('next/app');
const { jsx } = require('react/jsx-runtime');
const ServerContextContext = require('./ServerContextContext');

/**
 * A React higher-order component to decorate a Next.js custom `App` or page
 * component, to [provide server context]{@link ServerContextContext}.
 * @kind function
 * @name withServerContext
 * @param {object} Component Next.js custom `App` or page component.
 * @returns {WithServerContext} React higher-order component.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { withServerContext } from 'next-server-context';
 * ```
 *
 * ```js
 * import withServerContext from 'next-server-context/public/withServerContext.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { withServerContext } = require('next-server-context');
 * ```
 *
 * ```js
 * const withServerContext = require('next-server-context/public/withServerContext');
 * ```
 * @example <caption>A custom `App`.</caption>
 * In `pages/_app.js`:
 *
 * ```jsx
 * import { withServerContext } from 'next-server-context';
 * import App from 'next/app';
 *
 * export default withServerContext(App);
 * ```
 */
module.exports = function withServerContext(Component) {
  const WithServerContext = ({ serverContext, ...props }) =>
    jsx(ServerContextContext.Provider, {
      value: serverContext,
      children: jsx(Component, props),
    });

  if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
    WithServerContext.displayName = `withServerContext(${
      Component.displayName || Component.name || 'Component'
    })`;

  WithServerContext.getInitialProps = async (context) => {
    const isApp = 'ctx' in context;
    const { req, res } = isApp ? context.ctx : context;
    const props = Component.getInitialProps
      ? await Component.getInitialProps(context)
      : isApp
      ? await NextApp.getInitialProps(context)
      : {};

    if (req)
      props.serverContext = {
        request: req,
        response: res,

        // This prevents the server attempting to serialize the server context
        // object to JSON for hydration on the client.
        toJSON: () => undefined,
      };

    return props;
  };

  return WithServerContext;
};
