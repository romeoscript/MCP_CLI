#!/usr/bin/env node

import { Command } from "commander";
import { createCommand } from "./commands/create.js";
import chalk from "chalk";

const program = new Command();

program
  .name("mcp")
  .description("CLI tool to scaffold MCP servers in seconds")
  .version("1.0.0");

// Create command
program
  .command("create [project-name]")
  .description("Create a new MCP server project")
  .option(
    "-t, --template <template>",
    "Template to use (typescript|javascript)",
    "typescript"
  )
  .option("-y, --yes", "Skip prompts and use defaults")
  .action(createCommand);

// Help command
program.on("--help", () => {
  console.log("");
  console.log(chalk.cyan("Examples:"));
  console.log("  $ mcp create my-server");
  console.log("  $ mcp create my-server --template javascript");
  console.log("  $ mcp create my-server --yes");
  console.log("");
});

program.parse();
