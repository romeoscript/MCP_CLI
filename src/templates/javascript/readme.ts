export function getReadme(name: string) {
  return `# ${name}

MCP Server scaffolded with mcp-cli

## Getting Started

### Install dependencies
\`\`\`bash
npm install
\`\`\`

### Development
\`\`\`bash
npm run dev
\`\`\`

### Run
\`\`\`bash
npm start
\`\`\`

## Features

This MCP server includes:

- **Tools**: Pre-configured example tools (echo, get_time)
- **Resources**: Example resource endpoints
- **JavaScript**: Modern ES modules
- **Hot Reload**: Development mode with auto-restart (Node 18+)

## Customization

Edit \`index.js\` to add your own tools and resources.

## Learn More

- [MCP Documentation](https://modelcontextprotocol.io)
- [MCP Specification](https://spec.modelcontextprotocol.io)
`;
}
