"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    const logger = {
        trace, debug, time, info, warn, error, fatal
    };
    return logger;
};
//# sourceMappingURL=multi-logger.js.map