import NextApp from 'next/app.js';
import React from 'react';
import withServerContext from '../../../../withServerContext.mjs';

function App({ Component, pageProps = {}, appCustomProp }) {
  return React.createElement(
    React.Fragment,
    null,
    appCustomProp,
    React.createElement(Component, pageProps)
  );
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
