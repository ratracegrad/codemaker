const testPass = 'testPass';
const testError = 'testError';

export default async function testRunner(userCode, tests) {
    const testEvaluator = new Worker('/js/workers/test-evaluator.js');
    let unresolvedTests = tests.length;
    const testResults = [];
    testEvaluator.onmessage = function onMessage(e) {
        switch (e.data.type) {
            case testPass:
            case testError: {
                console.log(e);
                testResults.push(e.data);
                unresolvedTests--;
                break;
            }
            case 'console-proxy': {
                const { consoleMethod, args } = e.data;
                console[consoleMethod](...args);
                break;
            }
        }
    };
    tests.forEach(test => testEvaluator.postMessage({ code: userCode, test }));

    while (unresolvedTests !== 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    testEvaluator.terminate();
    return testResults;
}
