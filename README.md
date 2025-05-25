# MCP CLI Toolkit

MCP CLI Toolkit scaffolds a fully working MCP server in seconds — with TypeScript or JavaScript, built-in tools, resources, and dev commands. Think of it as CRA, but for MCP servers.

## Quick Start

```bash
npx mcp-scaffold create my-server
```

## Features

- **Instant Setup** - Get a working MCP server in seconds
- **Built-in Examples** - Pre-configured tools and resources
- **Hot Reload** - Development mode with auto-restart
- **TypeScript & JavaScript** - Choose your preferred language
- **Best Practices** - Production-ready project structure
- **Clean Architecture** - Well-organized, maintainable code

## Installation

### Global Installation

```bash
npm install -g mcp-scaffold
```

Then use:

```bash
mcp create my-server
```

or

```bash
mcp-cli create my-server
```

### NPX (No Installation)

```bash
npx mcp-scaffold create my-server
```

## Usage

### Interactive Mode

```bash
mcp create
```

### Quick Create

```bash
mcp create my-server
```

### With Options

```bash
# TypeScript template
mcp create my-server --template typescript

# JavaScript template
mcp create my-server --template javascript

# Skip prompts
mcp create my-server --yes
```

## What's Included

Every generated project includes:

- ✅ Example Tools: echo and get_time implementations
- ✅ Example Resources: Server configuration endpoint
- ✅ Development Server: Hot reload with file watching
- ✅ Build Scripts: TypeScript compilation (when applicable)
- ✅ Documentation: Comprehensive README with examples
- ✅ Type Safety: Full TypeScript support (optional)

## Templates

### TypeScript (Recommended)

- Full type safety with strict mode
- Hot reload with tsx
- Automatic compilation
- Source maps for debugging

### JavaScript

- Modern ES modules
- Node 18+ native watch mode
- Zero build step
- Faster iteration

## Project Structure

Generated projects follow this structure:

**TypeScript:**

```
my-server/
├── src/
│   └── index.ts       # Main server file (TypeScript)
├── package.json
├── tsconfig.json      # TypeScript only
├── .gitignore
└── README.md
```

**JavaScript:**

```
my-server/
├── index.js           # Main server file (JavaScript)
├── package.json
├── .gitignore
└── README.md
```

## Requirements

- Node.js >= 18.0.0
- npm >= 9.0.0

## Development

```bash
# Clone the repo
git clone https://github.com/veri5ied/mcp-cli.git
cd mcp-cli

# Install dependencies
pnpm install

# Build
pnpm run build

# Link for local testing
pnpm link

# Test the CLI
mcp create test-project
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
