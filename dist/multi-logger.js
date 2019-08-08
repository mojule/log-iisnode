"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_formatter_1 = require("@mojule/log-formatter");
exports.multiLogger = (...loggers) => {
    const logMany = (logLevel) => (content) => {
        loggers.forEach(logger => {
            logger[logLevel](content);
        });
    };
    const trace = logMany('trace');
    const debug = logMany('debug');
    const time = logMany('time');
    const info = logMany('info');
    const warn = logMany('warn');
    const error = logMany('error');
    const fatal = logMany('fatal');
    const options = {
        trace, debug, time, info, warn, error, fatal
    };
    return log_formatter_1.createLogger(options);
};
//# sourceMappingURL=multi-logger.js.map