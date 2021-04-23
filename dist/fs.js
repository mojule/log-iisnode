"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsLogger = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const log_formatter_1 = require("@mojule/log-formatter");
const util_1 = require("./util");
const fsLogger = (directory, useLocalTime = false) => {
    ensureDirectory(directory);
    const getTimestamp = (useLocalTime ? util_1.getLocalTimestamp : () => (new Date()).toJSON());
    const date = getTimestamp().replace(/[:\.]/g, '-');
    const stdOut = path_1.join(directory, `stdout-${date}.txt`);
    const stdErr = path_1.join(directory, `stderr-${date}.txt`);
    const writeOut = (content) => append(stdOut, content);
    const writeErr = (content) => append(stdErr, content);
    const trace = writeOut;
    const debug = writeOut;
    const time = writeOut;
    const info = writeOut;
    const warn = writeErr;
    const error = writeErr;
    const fatal = writeErr;
    const options = {
        trace, debug, time, info, warn, error, fatal, getTimestamp
    };
    const logger = log_formatter_1.createLogger(options);
    return logger;
};
exports.fsLogger = fsLogger;
const ensureDirectory = (directory) => {
    try {
        if (fs_1.statSync(directory).isDirectory())
            return;
    }
    catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }
    fs_1.mkdirSync(directory);
};
const append = (path, data) => fs_1.appendFileSync(path, data + '\n', 'utf8');
//# sourceMappingURL=fs.js.map