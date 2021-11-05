import { ok, strictEqual } from 'assert';
import { useContext } from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { jsx } from 'react/jsx-runtime.js';
import ServerContextContext from '../ServerContextContext.mjs';
import getBundleSize from './getBundleSize.mjs';

export default (tests) => {
  tests.add('`ServerContextContext` used as a React context.', () => {
    const TestComponent = () => useContext(ServerContextContext);
    const contextValue = 'a';
    const testRenderer = ReactTestRenderer.create(
      jsx(ServerContextContext.Provider, {
        value: contextValue,
        children: jsx(TestComponent, {}),
      })
    );

    strictEqual(testRenderer.toJSON(), contextValue);
  });

  tests.add('`ServerContextContext` bundle size.', async () => {
    const kB = await getBundleSize(
      new URL('../ServerContextContext.mjs', import.meta.url)
    );
    ok(kB < 0.5);
  });
};