import inquirer from "inquirer";
import * as path from "path";
import { logger } from "../utils/logger.js";
import { isValidProjectName, sanitizeProjectName } from "../utils/validator.js";
import {
  createProjectDirectory,
  writeTemplateFile,
} from "../utils/file-generator.js";
import { ProjectConfig } from "../types/index.js";
import { getTypeScriptTemplate } from "../templates/typescript/index.js";
import { getJavaScriptTemplate } from "../templates/javascript/index.js";

export async function createCommand(
  projectName: string | undefined,
  options: { template?: string; yes?: boolean }
) {
  logger.header("\n🚀 MCP CLI - Create MCP Server\n");

  let config: ProjectConfig = {
    projectName: projectName || "my-mcp-server",
    template: (options.template as "typescript" | "javascript") || "typescript",
  };

  // Interactive prompts if not using --yes flag
  if (!options.yes) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Project name:",
        default: config.projectName,
        when: !projectName,
        validate: (input: string) => {
          if (!input.trim()) return "Project name is required";
          if (!isValidProjectName(input)) {
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
    ]);

    config = { ...config, ...answers };
  }

  // Sanitize project name
  config.projectName = sanitizeProjectName(config.projectName);

  const targetDir = path.join(process.cwd(), config.projectName);

  try {
    // Create project directory
    logger.info(`\n📁 Creating project in ${targetDir}...\n`);
    await createProjectDirectory(targetDir);

    // Get template files
    const templateFiles =
      config.template === "typescript"
        ? getTypeScriptTemplate(config.projectName)
        : getJavaScriptTemplate(config.projectName);

    // Write all files
    for (const file of templateFiles) {
      await writeTemplateFile(targetDir, file);
    }

    // Success message
    logger.success("\n✨ Project created successfully!\n");
    logger.info("Next steps:\n");
    logger.muted(`  cd ${config.projectName}`);
    logger.muted("  npm install");
    logger.muted("  npm run dev\n");
    logger.header("Happy coding! 🎉\n");
  } catch (error) {
    logger.error(
      `\n❌ Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }\n`
    );
    process.exit(1);
  }
}
