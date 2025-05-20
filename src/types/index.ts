export interface ProjectConfig {
  projectName: string;
  template: "typescript" | "javascript";
}

export interface TemplateFile {
  path: string;
  content: string | object;
}

export type TemplateGenerator = (projectName: string) => string | object;
