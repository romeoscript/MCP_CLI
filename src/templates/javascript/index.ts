import { TemplateFile } from "../../types/index.js";
import { getPackageJson } from "./package.json.js";
import { getServerTemplate } from "./server.js.js";
import { getGitignore } from "./gitignore.js";
import { getReadme } from "./readme.js";

export function getJavaScriptTemplate(projectName: string): TemplateFile[] {
  return [
    {
      path: "package.json",
      content: getPackageJson(projectName),
    },
    {
      path: "index.js",
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
