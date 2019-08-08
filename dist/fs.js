"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const log_formatter_1 = require("@mojule/log-formatter");
exports.fsLogger = (directory) => {
    ensureDirectory(directory);
    const date = (new Date()).toJSON().replace(/[:\.]/g, '-');
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
        trace, debug, time, info, warn, error, fatal
    };
    const logger = log_formatter_1.createLogger(options);
    return logger;
};
const ensureDirectory = (directory) => {
    if (fs_1.statSync(directory).isDirectory)
        return;
    fs_1.mkdirSync(directory);
};
const append = (path, data) => fs_1.appendFile(path, data + '\n', 'utf8', err => {
    if (err)
        console.error(err);
});
//# sourceMappingURL=fs.js.map