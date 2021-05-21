'use strict';

const useServerContext = require('../../../../public/useServerContext.js');
const withServerContext = require('../../../../public/withServerContext.js');

function IndexPage() {
  const serverContext = useServerContext();

  let requestCustomHeader = null;

  if (serverContext) {
    requestCustomHeader = serverContext.request.headers['custom-header'];
    serverContext.response.statusCode = 418;
  }

  return requestCustomHeader;
}

module.exports = withServerContext(IndexPage);
