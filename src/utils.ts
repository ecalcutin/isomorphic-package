export function isomorphicFunction(): string {
    if (typeof window !== "undefined") {
      return "Running in the browser";
    } else if (typeof globalThis !== "undefined" && (globalThis as any).process && (globalThis as any).process.versions && (globalThis as any).process.versions.node) {
      return "Running in Node.js";
    }
    return "Unknown environment";
  }