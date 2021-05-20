import { strictEqual } from 'assert';
import { useContext } from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { jsx } from 'react/jsx-runtime.js';
import ServerContextContext from '../../public/ServerContextContext.js';

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
};
