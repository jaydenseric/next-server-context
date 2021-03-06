'use strict';

const useServerContext = require('../../../../public/useServerContext.js');
const withServerContext = require('../../../../public/withServerContext.js');

function IndexPage({ pageCustomProp }) {
  const serverContext = useServerContext();

  let requestCustomHeader = null;

  if (serverContext) {
    requestCustomHeader = serverContext.request.headers['custom-header'];
    serverContext.response.statusCode = 418;
  }

  return `${requestCustomHeader} ${pageCustomProp}`;
}

IndexPage.getInitialProps = async () => ({
  // Add the value together so the test assertion that the HTML contains
  // `pageCustomProp_value` will only be true if the value rendered correctly.
  pageCustomProp: 'pageCustomProp' + '_value',
});

module.exports = withServerContext(IndexPage);
