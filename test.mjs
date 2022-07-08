import TestDirector from "test-director";

import test_ServerContextContext from "./ServerContextContext.test.mjs";
import test_useServerContext from "./useServerContext.test.mjs";
import test_withServerContext from "./withServerContext.test.mjs";

const tests = new TestDirector();

test_ServerContextContext(tests);
test_useServerContext(tests);
test_withServerContext(tests);

tests.run();
