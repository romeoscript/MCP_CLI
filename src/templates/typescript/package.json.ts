export function getPackageJson(name: string) {
  return {
    name,
    version: "1.0.0",
    type: "module",
    description: "MCP Server scaffolded with mcp-cli",
    main: "dist/index.js",
    scripts: {
      build: "tsc",
      dev: "tsx watch src/index.ts",
      start: "node dist/index.js",
      prepare: "npm run build",
    },
    dependencies: {
      "@modelcontextprotocol/sdk": "^1.0.0",
    },
    devDependencies: {
      "@types/node": "^20.0.0",
      typescript: "^5.0.0",
      tsx: "^4.0.0",
    },
  };
}
