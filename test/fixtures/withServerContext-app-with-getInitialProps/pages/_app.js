import NextApp from 'next/app.js';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime.js';
import withServerContext from '../../../../public/withServerContext.mjs';

function App({ Component, pageProps = {}, appCustomProp }) {
  return jsxs(Fragment, {
    children: [appCustomProp, jsx(Component, pageProps)],
  });
}

App.getInitialProps = async (context) => {
  const props = await NextApp.getInitialProps(context);

  return {
    ...props,
    // Add the value together so the test assertion that the HTML contains
    // `appCustomProp_value` will only be true if the value rendered correctly.
    appCustomProp: 'appCustomProp' + '_value',
  };
};

export default withServerContext(App);
