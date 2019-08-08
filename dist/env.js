"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArgs = require("yargs-parser");
const log_formatter_1 = require("@mojule/log-formatter");
const argv = parseArgs(process.argv.slice(2));
exports.logLevelKey = 'LOG_LEVEL';
exports.defaultLogLevel = 'debug';
const isLogLevel = (value) => typeof value === 'string' && log_formatter_1.logLevels.includes(value);
exports.runtimeEnv = process.env.NODE_ENV || 'development';
exports.isHostedInIISNode = process.env.IISNODE_VERSION !== undefined;
exports.isLoggingEnabledIISNode = (exports.isHostedInIISNode && process.env.IISNODE_LOGGINGENABLED === '1');
exports.loggingDirectory = (exports.isHostedInIISNode && typeof process.env.IISNODE_LOGDIRECTORY === 'string' ?
    process.env.IISNODE_LOGDIRECTORY :
    './logs');
exports.badArgLevel = '';
exports.badEnvLevel = '';
exports.isArgLevel = false;
exports.isEnvLevel = false;
exports.logLevel = exports.defaultLogLevel;
exports.argSource = `cmd --${exports.logLevelKey}`;
exports.envSource = `process.env[ "${exports.logLevelKey}" ]`;
exports.argLevel = argv[exports.logLevelKey];
exports.envLevel = process.env[exports.logLevelKey];
if (typeof exports.argLevel === 'string') {
    if (isLogLevel(exports.argLevel)) {
        exports.logLevel = exports.argLevel;
        exports.isArgLevel = true;
    }
    else {
        exports.badArgLevel = exports.argLevel;
    }
}
else if (typeof exports.envLevel === 'string') {
    if (isLogLevel(exports.envLevel)) {
        exports.logLevel = exports.envLevel;
        exports.isEnvLevel = true;
    }
    else {
        exports.badEnvLevel = exports.envLevel;
    }
}
exports.levelSource = (exports.isArgLevel ?
    exports.argSource :
    exports.isEnvLevel ?
        exports.envSource :
        'default');
exports.logName = exports.isLoggingEnabledIISNode ? 'iisnode-stdout' : 'fs';
//# sourceMappingURL=env.js.map