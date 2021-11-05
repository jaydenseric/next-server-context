export { default as ServerContextContext } from './ServerContextContext.mjs';
export { default as useServerContext } from './useServerContext.mjs';
export { default as withServerContext } from './withServerContext.mjs';

/**
 * [Node.js](https://nodejs.org) HTTP server context.
 * @kind typedef
 * @name ServerContext
 * @type {object}
 * @prop {IncomingMessage} request [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 * @prop {ServerResponse} response [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse).
 */
