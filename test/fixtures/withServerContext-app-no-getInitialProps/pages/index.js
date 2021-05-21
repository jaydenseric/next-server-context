'use strict';

const useServerContext = require('../../../../public/useServerContext.js');

module.exports = function IndexPage() {
  const serverContext = useServerContext();

  if (serverContext) serverContext.response.statusCode = 403;

  return null;
};
