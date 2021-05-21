'use strict';

const { default: NextApp } = require('next/app');
const { Fragment, jsx, jsxs } = require('react/jsx-runtime');
const withServerContext = require('../../../../public/withServerContext.js');

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

module.exports = withServerContext(App);
