const proxyConsoleHandler = {
    get: function(_, consoleMethod) {
        return (...args) =>
            self.postMessage({ type: 'console-proxy', consoleMethod, args });
    }
};

function proxyTheConsole(self) {
    const proxyConsole = new Proxy({}, proxyConsoleHandler);
    self.console = proxyConsole;
}

function proxyAlert(self) {
    self.alert = (...args) => postMessage({ type: 'alert', args });
}

const proxies = [proxyTheConsole, proxyAlert];

module.exports = () => proxies.forEach(fn => fn(self));
