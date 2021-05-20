'use strict';

exports.ServerContextContext = require('./ServerContextContext');
exports.useServerContext = require('./useServerContext');
exports.withServerContext = require('./withServerContext');

/**
 * Node.js HTTP server context.
 * @kind typedef
 * @name ServerContext
 * @type {object}
 * @prop {IncomingMessage} request [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 * @prop {ServerResponse} response [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse).
 */
