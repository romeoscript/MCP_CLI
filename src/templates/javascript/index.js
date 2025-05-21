"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJavaScriptTemplate = getJavaScriptTemplate;
var package_json_js_1 = require("./package.json.js");
var server_js_js_1 = require("./server.js.js");
var gitignore_js_1 = require("./gitignore.js");
var readme_js_1 = require("./readme.js");
function getJavaScriptTemplate(projectName) {
    return [
        {
            path: "package.json",
            content: (0, package_json_js_1.getPackageJson)(projectName),
        },
        {
            path: "index.js",
            content: (0, server_js_js_1.getServerTemplate)(),
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
