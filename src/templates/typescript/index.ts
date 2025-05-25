import { TemplateFile } from "../../types/index.js";
import { getPackageJson } from "./package.json.js";
import { getTsConfig } from "./tsconfig.json.js";
import { getServerTemplate } from "./server.ts.js";
import { getGitignore } from "./gitignore.js";
import { getReadme } from "./readme.js";

export function getTypeScriptTemplate(projectName: string): TemplateFile[] {
  return [
    {
      path: "package.json",
      content: getPackageJson(projectName),
    },
    {
      path: "tsconfig.json",
      content: getTsConfig(),
    },
    {
      path: "src/index.ts",
      content: getServerTemplate(),
    },
    {
      path: ".gitignore",
      content: getGitignore(),
    },
    {
      path: "README.md",
      content: getReadme(projectName),
    },
  ];
}
