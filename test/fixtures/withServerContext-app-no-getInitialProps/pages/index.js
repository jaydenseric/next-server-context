'use strict';

const useServerContext = require('../../../../public/useServerContext.js');

module.exports = function IndexPage() {
  const serverContext = useServerContext();

  let requestCustomHeader = null;

  if (serverContext) {
    requestCustomHeader = serverContext.request.headers['custom-header'];
    serverContext.response.statusCode = 418;
  }

  return requestCustomHeader;
};
