import { fileURLToPath } from 'url';
import esbuild from 'esbuild';
import gzipSize from 'gzip-size';

/**
 * Gets the bundle size of a module, using ESBuild.
 * @param {URL} moduleUrl Module URL.
 * @returns {number} Bundle size (kB).
 */
export default async function getBundleSize(moduleUrl) {
  const {
    outputFiles: [bundle],
  } = await esbuild.build({
    entryPoints: [fileURLToPath(moduleUrl)],
    external:
      // Package peer dependencies.
      ['next', 'react'],
    write: false,
    bundle: true,
    minify: true,
    legalComments: 'none',
  });

  const kB = (await gzipSize(bundle.contents)) / 1000;

  console.info(`${kB} kB minified and gzipped bundle.`);

  return kB;
}
