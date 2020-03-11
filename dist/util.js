"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_formatter_1 = require("@mojule/log-formatter");
exports.isAtLevelOrAbove = (level, minLevel) => {
    const levelIndex = log_formatter_1.logLevels.indexOf(level);
    const minIndex = log_formatter_1.logLevels.indexOf(minLevel);
    return levelIndex >= minIndex;
};
exports.removeLoggersBelowLevel = (minLevel, logger) => {
    const noops = {};
    log_formatter_1.logLevels.forEach(current => {
        if (!exports.isAtLevelOrAbove(current, minLevel)) {
            noops[current] = () => { };
        }
    });
    return Object.assign({}, logger, noops);
};
exports.getLocalTimestamp = () => {
    const date = new Date();
    const localTime = date.getTime() - (date.getTimezoneOffset() * 60000);
    return new Date(localTime).toJSON();
};
//# sourceMappingURL=util.js.map