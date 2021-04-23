"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiLogger = void 0;
const multiLogger = (...loggers) => {
    const logMany = (logLevel) => (message, ...args) => {
        loggers.forEach(logger => {
            logger[logLevel](message, ...args);
        });
    };
    const trace = logMany('trace');
    const debug = logMany('debug');
    const time = logMany('time');
    const info = logMany('info');
    const warn = logMany('warn');
    const error = logMany('error');
    const fatal = logMany('fatal');
    const logger = {
        trace, debug, time, info, warn, error, fatal
    };
    return logger;
};
exports.multiLogger = multiLogger;
//# sourceMappingURL=multi-logger.js.map