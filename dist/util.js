"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalTimestamp = exports.removeLoggersBelowLevel = exports.isAtLevelOrAbove = void 0;
const log_formatter_1 = require("@mojule/log-formatter");
const isAtLevelOrAbove = (level, minLevel) => {
    const levelIndex = log_formatter_1.logLevels.indexOf(level);
    const minIndex = log_formatter_1.logLevels.indexOf(minLevel);
    return levelIndex >= minIndex;
};
exports.isAtLevelOrAbove = isAtLevelOrAbove;
const removeLoggersBelowLevel = (minLevel, logger) => {
    const noops = {};
    log_formatter_1.logLevels.forEach(current => {
        if (!exports.isAtLevelOrAbove(current, minLevel)) {
            noops[current] = () => { };
        }
    });
    return Object.assign({}, logger, noops);
};
exports.removeLoggersBelowLevel = removeLoggersBelowLevel;
const getLocalTimestamp = () => {
    const date = new Date();
    const localTime = date.getTime() - (date.getTimezoneOffset() * 60000);
    return new Date(localTime).toJSON();
};
exports.getLocalTimestamp = getLocalTimestamp;
//# sourceMappingURL=util.js.map