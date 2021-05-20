import TestDirector from 'test-director';
import testBundle from './bundle.test.mjs';

const tests = new TestDirector();

testBundle(tests);

tests.run();
