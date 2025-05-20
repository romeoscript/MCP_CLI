import fs from "fs-extra";
import * as path from "path";
import { logger } from "./logger.js";
import { TemplateFile } from "../types/index.js";

export async function createProjectDirectory(targetDir: string): Promise<void> {
  if (await fs.pathExists(targetDir)) {
    throw new Error(`Directory already exists: ${targetDir}`);
  }
  await fs.mkdirp(targetDir);
}

export async function writeTemplateFile(
  targetDir: string,
  file: TemplateFile
): Promise<void> {
  const filePath = path.join(targetDir, file.path);
  const dir = path.dirname(filePath);

  await fs.mkdirp(dir);

  let content: string;
  if (typeof file.content === "object") {
    content = JSON.stringify(file.content, null, 2);
  } else {
    content = file.content;
  }

  await fs.writeFile(filePath, content, "utf-8");
  logger.success(`✓ Created ${file.path}`);
}
