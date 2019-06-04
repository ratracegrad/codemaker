/* eslint-disable no-undef */
importScripts('https://www.chaijs.com/chai.js');

const { expect, assert } = chai;
/* eslint-enable no-undef */

// lockDownProperties is a list of properties we do not want a user
// to be able to access
// They should remain undefined in the userCode scope
const lockDownProperties = [
    'importScripts',
    'onmessage',
    'postMessage',
    'onerror'
];

function runTest(testCode, userCode) {
    const code = userCode.slice();

    try {
        new Function(
            'code',
            'expect',
            'assert',
            ...lockDownProperties,
            userCode + ';' + testCode
        )(code, expect, assert);
        return { type: 'testPass' };
    } catch (e) {
        return { type: 'testError', error: e.message };
    }
}

function getUserCode({ data: { code = '' } }) {
    return code;
}
function getTestCode({ data: { test = '' } }) {
    return test;
}

module.exports = function runUserCodeWithTest(event) {
    const userCode = getUserCode(event);
    const testCode = getTestCode(event);

    return runTest(testCode, userCode);
};
