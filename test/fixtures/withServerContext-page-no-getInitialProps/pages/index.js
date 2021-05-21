'use strict';

const useServerContext = require('../../../../public/useServerContext.js');
const withServerContext = require('../../../../public/withServerContext.js');

function IndexPage() {
  const serverContext = useServerContext();

  if (serverContext) serverContext.response.statusCode = 403;

  return null;
}

module.exports = withServerContext(IndexPage);
