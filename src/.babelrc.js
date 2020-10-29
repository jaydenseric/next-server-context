'use strict';

module.exports = {
  comments: false,
  presets: [
    [
      '@babel/env',
      {
        targets: 'Node >= 10, > 0.5%, not OperaMini all, not dead',
        modules: process.env.BABEL_ESM ? false : 'cjs',
        shippedProposals: true,
        loose: true,
      },
    ],
    ['@babel/react', { useBuiltIns: true }],
  ],
  plugins: [
    ['transform-async-to-promises', { inlineHelpers: true }],
    '@babel/transform-runtime',
    'transform-require-extensions',
  ],
};
