"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadme = getReadme;
function getReadme(name) {
    return "# ".concat(name, "\n\nMCP Server scaffolded with mcp-cli\n\n## Getting Started\n\n### Install dependencies\n```bash\nnpm install\n```\n\n### Development\n```bash\nnpm run dev\n```\n\n### Run\n```bash\nnpm start\n```\n\n## Features\n\nThis MCP server includes:\n\n- **Tools**: Pre-configured example tools (echo, get_time)\n- **Resources**: Example resource endpoints\n- **JavaScript**: Modern ES modules\n- **Hot Reload**: Development mode with auto-restart (Node 18+)\n\n## Customization\n\nEdit `index.js` to add your own tools and resources.\n\n## Learn More\n\n- [MCP Documentation](https://modelcontextprotocol.io)\n- [MCP Specification](https://spec.modelcontextprotocol.io)\n");
}
