#!/usr/bin/env node

const args = new Set(process.argv.slice(2));
const supportedModes = new Set(["--dry-run", "--init", "--backfill"]);

if (args.has("--help") || args.has("-h")) {
  console.log("Usage: npm start [--dry-run|--init|--backfill]");
  process.exit(0);
}

const unknown = [...args].filter((arg) => !supportedModes.has(arg));
if (unknown.length > 0) {
  console.error(`Unknown option: ${unknown.join(", ")}`);
  process.exit(3);
}

console.log("LeetCode Tracker CLI scaffold is ready.");
console.log(`Mode: ${[...args][0] ?? "sync"}`);
