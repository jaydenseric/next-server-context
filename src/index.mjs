export { ServerContextContext } from './ServerContextContext.mjs';
export { useServerContext } from './useServerContext.mjs';
export { withServerContext } from './withServerContext.mjs';

/**
 * Node.js HTTP server context.
 * @kind typedef
 * @name ServerContext
 * @type {object}
 * @prop {IncomingMessage} request [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 * @prop {ServerResponse} response [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse).
 */
