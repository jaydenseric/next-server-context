import { strictEqual } from 'assert';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import execFilePromise from '../execFilePromise.mjs';
import fsPathRemove from '../fsPathRemove.mjs';
import startNext from '../startNext.mjs';

export default (tests) => {
  tests.add(
    '`withServerContext` decorating the app, no `getInitialProps`.',
    async () => {
      const nextProjectUrl = new URL(
        '../fixtures/withServerContext-app-no-getInitialProps/',
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise('npx', ['next', 'build'], {
        cwd: nextProjectPath,
      });

      strictEqual(buildOutput.stdout.includes('Compiled successfully'), true);

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = 'custom-header_value';
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              'custom-header': customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          strictEqual(html.includes(customHeaderValue), true);
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL('.next', nextProjectUrl)));
      }
    }
  );

  tests.add(
    '`withServerContext` decorating the app, with `getInitialProps`.',
    async () => {
      const nextProjectUrl = new URL(
        '../fixtures/withServerContext-app-with-getInitialProps/',
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise('npx', ['next', 'build'], {
        cwd: nextProjectPath,
      });

      strictEqual(buildOutput.stdout.includes('Compiled successfully'), true);

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = 'custom-header_value';
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              'custom-header': customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          strictEqual(html.includes(customHeaderValue), true);
          strictEqual(html.includes('appCustomProp_value'), true);
          strictEqual(html.includes('pageCustomProp_value'), true);
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL('.next', nextProjectUrl)));
      }
    }
  );

  tests.add(
    '`withServerContext` decorating a page, no `getInitialProps`.',
    async () => {
      const nextProjectUrl = new URL(
        '../fixtures/withServerContext-page-no-getInitialProps/',
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise('npx', ['next', 'build'], {
        cwd: nextProjectPath,
      });

      strictEqual(buildOutput.stdout.includes('Compiled successfully'), true);

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = 'custom-header_value';
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              'custom-header': customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          strictEqual(html.includes(customHeaderValue), true);
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL('.next', nextProjectUrl)));
      }
    }
  );

  tests.add(
    '`withServerContext` decorating a page, with `getInitialProps`.',
    async () => {
      const nextProjectUrl = new URL(
        '../fixtures/withServerContext-page-with-getInitialProps/',
        import.meta.url
      );
      const nextProjectPath = fileURLToPath(nextProjectUrl);
      const buildOutput = await execFilePromise('npx', ['next', 'build'], {
        cwd: nextProjectPath,
      });

      strictEqual(buildOutput.stdout.includes('Compiled successfully'), true);

      try {
        const { port, close } = await startNext(nextProjectPath);

        try {
          const customHeaderValue = 'custom-header_value';
          const response = await fetch(`http://localhost:${port}`, {
            headers: {
              'custom-header': customHeaderValue,
            },
          });

          strictEqual(response.status, 418);

          const html = await response.text();

          strictEqual(html.includes(customHeaderValue), true);
          strictEqual(html.includes('pageCustomProp_value'), true);
        } finally {
          close();
        }
      } finally {
        fsPathRemove(fileURLToPath(new URL('.next', nextProjectUrl)));
      }
    }
  );
};
