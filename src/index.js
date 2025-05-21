"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var create_js_1 = require("./commands/create.js");
var chalk_1 = require("chalk");
var program = new commander_1.Command();
program
    .name("mcp")
    .description("CLI tool to scaffold MCP servers in seconds")
    .version("1.0.0");
// Create command
program
    .command("create [project-name]")
    .description("Create a new MCP server project")
    .option("-t, --template <template>", "Template to use (typescript|javascript)", "typescript")
    .option("-y, --yes", "Skip prompts and use defaults")
    .action(create_js_1.createCommand);
// Help command
program.on("--help", function () {
    console.log("");
    console.log(chalk_1.default.cyan("Examples:"));
    console.log("  $ mcp create my-server");
    console.log("  $ mcp create my-server --template javascript");
    console.log("  $ mcp create my-server --yes");
    console.log("");
});
program.parse();
