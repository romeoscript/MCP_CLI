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

### Build
\`\`\`bash
npm run build
\`\`\`

### Run
\`\`\`bash
npm start
\`\`\`

## Features

This MCP server includes:

- **Tools**: Pre-configured example tools (echo, get_time)
- **Resources**: Example resource endpoints
- **TypeScript**: Full TypeScript support with strict mode
- **Hot Reload**: Development mode with auto-restart

## Customization

Edit \`src/index.ts\` to add your own tools and resources.

### Adding a Tool

\`\`\`typescript
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      // ... existing tools
      {
        name: 'my_tool',
        description: 'My custom tool',
        inputSchema: {
          type: 'object',
          properties: {
            param: { type: 'string' }
          },
          required: ['param'],
        },
      },
    ],
  };
});
\`\`\`

### Adding a Resource

\`\`\`typescript
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      // ... existing resources
      {
        uri: 'custom://resource',
        name: 'My Resource',
        description: 'Custom resource',
        mimeType: 'text/plain',
      },
    ],
  };
});
\`\`\`

## Learn More

- [MCP Documentation](https://modelcontextprotocol.io)
- [MCP Specification](https://spec.modelcontextprotocol.io)
`;
}
