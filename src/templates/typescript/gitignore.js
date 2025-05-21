"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitignore = getGitignore;
function getGitignore() {
    return "node_modules/\ndist/\n*.log\n.env\n.DS_Store\n";
}
