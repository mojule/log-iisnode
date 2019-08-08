"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const log_formatter_1 = require("@mojule/log-formatter");
const fs_1 = require("./fs");
const util_1 = require("./util");
const env_1 = require("./env");
const log_init_message_1 = require("./log-init-message");
const directory = path_1.join(process.cwd(), env_1.loggingDirectory);
const iisNodeLogger = env_1.isLoggingEnabledIISNode ? log_formatter_1.logger : fs_1.fsLogger(directory);
exports.log = util_1.removeLoggersBelowLevel(env_1.logLevel, iisNodeLogger);
exports.log.info('Logging initiated', log_init_message_1.logInitMessage);
//# sourceMappingURL=index.js.map