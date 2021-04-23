"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const path_1 = require("path");
const log_formatter_1 = require("@mojule/log-formatter");
const fs_1 = require("./fs");
const util_1 = require("./util");
const env_1 = require("./env");
const log_init_message_1 = require("./log-init-message");
const multi_logger_1 = require("./multi-logger");
const directory = path_1.join(process.cwd(), env_1.loggingDirectory);
const createLog = (useLocalTime = true) => {
    const getTimestamp = (useLocalTime ? util_1.getLocalTimestamp : () => (new Date()).toJSON());
    const logger = log_formatter_1.createLogger({ getTimestamp });
    const iisNodeLogger = (env_1.isLoggingEnabledIISNode ?
        logger :
        multi_logger_1.multiLogger(logger, fs_1.fsLogger(directory)));
    const log = util_1.removeLoggersBelowLevel(env_1.logLevel, iisNodeLogger);
    return log;
};
exports.log = createLog();
exports.log.info('Logging initiated', log_init_message_1.logInitMessage);
//# sourceMappingURL=index.js.map