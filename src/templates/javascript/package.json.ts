export function getPackageJson(name: string) {
  return {
    name,
    version: "1.0.0",
    type: "module",
    description: "MCP Server scaffolded with mcp-cli",
    main: "index.js",
    scripts: {
      dev: "node --watch index.js",
      start: "node index.js",
    },
    dependencies: {
      "@modelcontextprotocol/sdk": "^1.0.0",
    },
  };
}
