// @ts-check

import { ok, strictEqual } from "node:assert";
import { rm } from "node:fs/promises";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

import assertBundleSize from "./test/assertBundleSize.mjs";
import execFilePromise from "./test/execFilePromise.mjs";
import startNext from "./test/startNext.mjs";

describe("Function `withServerContext`.", { concurrency: true }, () => {
  it("Bundle size.", async () => {
    await assertBundleSize(
      new URL("./withServerContext.mjs", import.meta.url),
      350,
    );
  });

  describe("Decorating the app.", { concurrency: true }, () => {
    it("`getInitialProps` absent.", async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-app-getInitialProps-absent/",
        import.meta.url,
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
        await rm(new URL(".next", nextProjectUrl), {
          force: true,
          recursive: true,
        });
      }
    });

    it("`getInitialProps` present.", async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-app-getInitialProps-present/",
        import.meta.url,
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
        await rm(new URL(".next", nextProjectUrl), {
          force: true,
          recursive: true,
        });
      }
    });
  });

  describe("Decorating a page.", { concurrency: true }, () => {
    it("`getInitialProps` absent.", async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-page-getInitialProps-absent/",
        import.meta.url,
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
        await rm(new URL(".next", nextProjectUrl), {
          force: true,
          recursive: true,
        });
      }
    });

    it("`getInitialProps` present.", async () => {
      const nextProjectUrl = new URL(
        "./test/fixtures/withServerContext-page-getInitialProps-present/",
        import.meta.url,
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
        await rm(new URL(".next", nextProjectUrl), {
          force: true,
          recursive: true,
        });
      }
    });
  });
});
