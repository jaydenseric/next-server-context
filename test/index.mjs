import TestDirector from 'test-director';
import testBundle from './bundle.test.mjs';
import testServerContextContext from './public/ServerContextContext.test.mjs';
import testUseServerContext from './public/useServerContext.test.mjs';
import testWithServerContext from './public/withServerContext.test.mjs';

const tests = new TestDirector();

testServerContextContext(tests);
testUseServerContext(tests);
testWithServerContext(tests);
testBundle(tests);

tests.run();
