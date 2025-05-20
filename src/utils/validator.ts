export function isValidProjectName(name: string): boolean {
  return /^[a-z0-9-_]+$/i.test(name);
}

export function sanitizeProjectName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
}
