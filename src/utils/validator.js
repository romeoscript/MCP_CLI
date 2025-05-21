"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidProjectName = isValidProjectName;
exports.sanitizeProjectName = sanitizeProjectName;
function isValidProjectName(name) {
    return /^[a-z0-9-_]+$/i.test(name);
}
function sanitizeProjectName(name) {
    return name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-_]/g, "");
}
