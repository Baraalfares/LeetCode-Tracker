import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const cliPath = path.join(projectDir, "src", "cli.js");

function runCli(...args) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [cliPath, ...args], { cwd: projectDir });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("close", (code) => resolve({ code, stdout, stderr }));
  });
}

test("CLI displays help", async () => {
  const result = await runCli("--help");
  assert.equal(result.code, 0);
  assert.match(result.stdout, /Usage:/);
});

test("CLI rejects unknown options", async () => {
  const result = await runCli("--unknown");
  assert.equal(result.code, 3);
  assert.match(result.stderr, /Unknown option/);
});
