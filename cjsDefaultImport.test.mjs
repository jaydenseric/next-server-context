// @ts-check

import { deepStrictEqual, strictEqual } from "node:assert";
import { describe, it } from "node:test";

import cjsDefaultImport from "./cjsDefaultImport.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

describe("Function `cjsDefaultImport`.", { concurrency: true }, () => {
  it("Bundle size.", async () => {
    await assertBundleSize(
      new URL("./cjsDefaultImport.mjs", import.meta.url),
      120,
    );
  });

  describe("Argument 1 `value`.", { concurrency: true }, () => {
    it("Non object.", () => {
      const value = false;

      strictEqual(cjsDefaultImport(value), value);
    });

    describe("Object.", { concurrency: true }, () => {
      it("Property `default` absent.", () => {
        const value = Object.freeze({ a: 1 });

        deepStrictEqual(cjsDefaultImport(value), value);
      });

      it("Property `default` present.", () => {
        const value = Object.freeze({
          default: Object.freeze({ a: 1 }),
        });

        deepStrictEqual(cjsDefaultImport(value), value.default);
      });
    });
  });
});
