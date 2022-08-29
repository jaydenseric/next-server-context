// @ts-check

import { ok, strictEqual } from "node:assert";
import { fileURLToPath } from "node:url";
import fetch from "node-fetch";

import assertBundleSize from "./test/assertBundleSize.mjs";
import execFilePromise from "./test/execFilePromise.mjs";
import fsPathRemove from "./test/fsPathRemove.mjs";
import startNext from "./test/startNext.mjs";

/**
 * Adds `withServerContext` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`withServerContext` bundle size.", async () => {
    await assertBundleSize(
      new URL("./withServerContext.mjs", import.meta.url),
      300
    );
  });

  tests.add(
    "`withServerContext` decorating the app, no `getInitialProps`.",
    async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-app-no-getInitialProps/",
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise("npx", ["next", "build"], {
        cwd: nextProjectPath,
      });

      ok(buildOutput.stdout.includes("Compiled successfully"));

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = "custom-header_value";
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              "custom-header": customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          ok(html.includes(customHeaderValue));
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL(".next", nextProjectUrl)));
      }
    }
  );

  tests.add(
    "`withServerContext` decorating the app, with `getInitialProps`.",
    async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-app-with-getInitialProps/",
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise("npx", ["next", "build"], {
        cwd: nextProjectPath,
      });

      ok(buildOutput.stdout.includes("Compiled successfully"));

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = "custom-header_value";
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              "custom-header": customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          ok(html.includes(customHeaderValue));
          ok(html.includes("appCustomProp_value"));
          ok(html.includes("pageCustomProp_value"));
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL(".next", nextProjectUrl)));
      }
    }
  );

  tests.add(
    "`withServerContext` decorating a page, no `getInitialProps`.",
    async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-page-no-getInitialProps/",
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise("npx", ["next", "build"], {
        cwd: nextProjectPath,
      });

      ok(buildOutput.stdout.includes("Compiled successfully"));

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = "custom-header_value";
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              "custom-header": customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          ok(html.includes(customHeaderValue));
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL(".next", nextProjectUrl)));
      }
    }
  );

  tests.add(
    "`withServerContext` decorating a page, with `getInitialProps`.",
    async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-page-with-getInitialProps/",
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise("npx", ["next", "build"], {
        cwd: nextProjectPath,
      });

      ok(buildOutput.stdout.includes("Compiled successfully"));

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = "custom-header_value";
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              "custom-header": customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          ok(html.includes(customHeaderValue));
          ok(html.includes("pageCustomProp_value"));
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL(".next", nextProjectUrl)));
      }
    }
  );
};
