"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_1 = require("./package");
const env_1 = require("./env");
const logInitInfo = [
    ['Logger name', env_1.logName],
    ['Level', env_1.logLevel],
    ['Level set by', env_1.levelSource]
];
if (env_1.isArgLevel || env_1.isEnvLevel) {
    logInitInfo.push(['Level overrides default', env_1.defaultLogLevel]);
}
else if (env_1.badArgLevel) {
    logInitInfo.push([`Using default level, unexpected ${env_1.argSource}`, env_1.badArgLevel]);
}
else if (env_1.badEnvLevel) {
    logInitInfo.push([`Using default level, unexpected ${env_1.envSource}`, env_1.badEnvLevel]);
}
if (env_1.isHostedInIISNode) {
    logInitInfo.push('Hosted by IISNode');
    Object.keys(process.env).forEach(key => {
        if (!key.startsWith('IISNODE_'))
            return;
        const value = String(process.env[key]);
        logInitInfo.push([key, value]);
    });
}
logInitInfo.push(['Platform', process.arch], ['Node Version', process.version], ['Node Environment', env_1.runtimeEnv]);
try {
    const { name, version } = package_1.loadPackageJSON();
    logInitInfo.push(['Package Name', name], ['Package Version', String(version)]);
}
catch (err) {
    logInitInfo.push(['Error', 'package.json not present']);
}
exports.logInitMessage = logInitInfo.map(entry => {
    if (typeof entry === 'string')
        return entry;
    return entry.join(': ');
}).join('\n');
//# sourceMappingURL=log-init-message.js.map