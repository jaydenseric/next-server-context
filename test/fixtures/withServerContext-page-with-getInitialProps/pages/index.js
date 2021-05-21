'use strict';

const useServerContext = require('../../../../public/useServerContext.js');
const withServerContext = require('../../../../public/withServerContext.js');

function IndexPage({ pageCustomProp }) {
  const serverContext = useServerContext();

  if (serverContext) serverContext.response.statusCode = 403;

  return pageCustomProp;
}

IndexPage.getInitialProps = async () => ({
  // Add the value together so the test assertion that the HTML contains
  // `pageCustomProp_value` will only be true if the value rendered correctly.
  pageCustomProp: 'pageCustomProp' + '_value',
});

module.exports = withServerContext(IndexPage);
