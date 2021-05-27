import TestDirector from 'test-director';
import test_bundle from './bundle.test.mjs';
import test_ServerContextContext from './public/ServerContextContext.test.mjs';
import test_useServerContext from './public/useServerContext.test.mjs';
import test_withServerContext from './public/withServerContext.test.mjs';

const tests = new TestDirector();

test_ServerContextContext(tests);
test_useServerContext(tests);
test_withServerContext(tests);
test_bundle(tests);

tests.run();
