// @ts-check

import { createServer } from "node:http";

import next from "next";

import listen from "./listen.mjs";

/**
 * Starts Next.js.
 * @param {string} dir Next.js project directory path.
 * @returns Resolves the port the server is listening on, and a function to
 *   close the server.
 */
export default async function startNext(dir) {
  const nextServer = next.default({ dir });
  const server = createServer(nextServer.getRequestHandler());

  return await listen(server);
}
