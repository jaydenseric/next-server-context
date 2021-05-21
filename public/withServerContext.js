'use strict';

const { default: NextApp } = require('next/app');
const { jsx } = require('react/jsx-runtime');
const ServerContextContext = require('./ServerContextContext.js');

/**
 * A higher-order [React](https://reactjs.org) component to decorate a
 * [Next.js](https://nextjs.org) custom `App` or page component, to provide
 * [server context]{@link ServerContextContext}.
 * @kind function
 * @name withServerContext
 * @param {object} Component [Next.js](https://nextjs.org) custom `App` or page component.
 * @returns {WithServerContext} Higher-order [React](https://reactjs.org) component.
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
 * const withServerContext = require('next-server-context/public/withServerContext.js');
 * ```
 * @example <caption>A [Next.js](https://nextjs.org) custom `App`.</caption>
 * In `pages/_app.js`:
 *
 * ```jsx
 * import withServerContext from 'next-server-context/public/withServerContext.js';
 * import App from 'next/app';
 *
 * export default withServerContext(App);
 * ```
 */
module.exports = function withServerContext(Component) {
  /**
   * [Next.js](https://nextjs.org) custom `App` or page higher-order
   * [React](https://reactjs.org) component.
   * @kind function
   * @name withServerContext~WithServerContext
   * @param {object} props Props.
   * @param {ServerContext} [props.serverContext] [Node.js](https://nodejs.org) HTTP server context.
   * @returns {ReactElement} [React](https://reactjs.org) virtual DOM element.
   * @ignore
   */
  function WithServerContext({ serverContext, ...props }) {
    return jsx(ServerContextContext.Provider, {
      value: serverContext,
      children: jsx(Component, props),
    });
  }

  if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
    /**
     * The display name.
     * @kind member
     * @name withServerContext~WithServerContext.displayName
     * @type {string}
     * @see [React display name conventions](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging).
     * @ignore
     */
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
