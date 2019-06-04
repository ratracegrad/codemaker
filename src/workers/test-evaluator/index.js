const proxyGlobals = require('./proxyGlobals');
const runUserCodeWithTest = require('./runTests');

proxyGlobals();

self.onmessage = e => {
    const result = runUserCodeWithTest(e);
    return self.postMessage(result);
};
