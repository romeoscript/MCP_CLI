"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeScriptTemplate = getTypeScriptTemplate;
var package_json_js_1 = require("./package.json.js");
var tsconfig_json_js_1 = require("./tsconfig.json.js");
var server_ts_js_1 = require("./server.ts.js");
var gitignore_js_1 = require("./gitignore.js");
var readme_js_1 = require("./readme.js");
function getTypeScriptTemplate(projectName) {
    return [
        {
            path: "package.json",
            content: (0, package_json_js_1.getPackageJson)(projectName),
        },
        {
            path: "tsconfig.json",
            content: (0, tsconfig_json_js_1.getTsConfig)(),
        },
        {
            path: "src/index.ts",
            content: (0, server_ts_js_1.getServerTemplate)(),
        },
        {
            path: ".gitignore",
            content: (0, gitignore_js_1.getGitignore)(),
        },
        {
            path: "README.md",
            content: (0, readme_js_1.getReadme)(projectName),
        },
    ];
}
