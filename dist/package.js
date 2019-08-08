"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.loadPackageJSON = () => {
    const packagePath = path_1.join(process.cwd(), 'package.json');
    const json = fs_1.readFileSync(packagePath, 'utf8');
    const packageInfo = JSON.parse(json);
    return packageInfo;
};
//# sourceMappingURL=package.js.map