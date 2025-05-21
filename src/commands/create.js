"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommand = createCommand;
var inquirer_1 = require("inquirer");
var path = require("path");
var logger_js_1 = require("../utils/logger.js");
var validator_js_1 = require("../utils/validator.js");
var file_generator_js_1 = require("../utils/file-generator.js");
var index_js_1 = require("../templates/typescript/index.js");
var index_js_2 = require("../templates/javascript/index.js");
function createCommand(projectName, options) {
    return __awaiter(this, void 0, void 0, function () {
        var config, answers, targetDir, templateFiles, _i, templateFiles_1, file, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger_js_1.logger.header("\n🚀 MCP CLI - Create MCP Server\n");
                    config = {
                        projectName: projectName || "my-mcp-server",
                        template: options.template || "typescript",
                    };
                    if (!!options.yes) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "input",
                                name: "projectName",
                                message: "Project name:",
                                default: config.projectName,
                                when: !projectName,
                                validate: function (input) {
                                    if (!input.trim())
                                        return "Project name is required";
                                    if (!(0, validator_js_1.isValidProjectName)(input)) {
                                        return "Project name can only contain letters, numbers, hyphens, and underscores";
                                    }
                                    return true;
                                },
                            },
                            {
                                type: "list",
                                name: "template",
                                message: "Select a template:",
                                choices: [
                                    { name: "TypeScript (recommended)", value: "typescript" },
                                    { name: "JavaScript", value: "javascript" },
                                ],
                                default: config.template,
                                when: !options.template,
                            },
                        ])];
                case 1:
                    answers = _a.sent();
                    config = __assign(__assign({}, config), answers);
                    _a.label = 2;
                case 2:
                    // Sanitize project name
                    config.projectName = (0, validator_js_1.sanitizeProjectName)(config.projectName);
                    targetDir = path.join(process.cwd(), config.projectName);
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 9, , 10]);
                    // Create project directory
                    logger_js_1.logger.info("\n\uD83D\uDCC1 Creating project in ".concat(targetDir, "...\n"));
                    return [4 /*yield*/, (0, file_generator_js_1.createProjectDirectory)(targetDir)];
                case 4:
                    _a.sent();
                    templateFiles = config.template === "typescript"
                        ? (0, index_js_1.getTypeScriptTemplate)(config.projectName)
                        : (0, index_js_2.getJavaScriptTemplate)(config.projectName);
                    _i = 0, templateFiles_1 = templateFiles;
                    _a.label = 5;
                case 5:
                    if (!(_i < templateFiles_1.length)) return [3 /*break*/, 8];
                    file = templateFiles_1[_i];
                    return [4 /*yield*/, (0, file_generator_js_1.writeTemplateFile)(targetDir, file)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 5];
                case 8:
                    // Success message
                    logger_js_1.logger.success("\n✨ Project created successfully!\n");
                    logger_js_1.logger.info("Next steps:\n");
                    logger_js_1.logger.muted("  cd ".concat(config.projectName));
                    logger_js_1.logger.muted("  npm install");
                    logger_js_1.logger.muted("  npm run dev\n");
                    logger_js_1.logger.header("Happy coding! 🎉\n");
                    return [3 /*break*/, 10];
                case 9:
                    error_1 = _a.sent();
                    logger_js_1.logger.error("\n\u274C Error: ".concat(error_1 instanceof Error ? error_1.message : "Unknown error", "\n"));
                    process.exit(1);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
