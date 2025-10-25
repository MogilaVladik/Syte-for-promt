const fs = require("fs");
const path = require("path");

function removeDataOid(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    const originalLength = content.length;

    // Remove data-oid attributes
    content = content.replace(/\s*data-oid="[^"]*"/g, "");

    const newLength = content.length;
    const removed = originalLength - newLength;

    if (removed > 0) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✓ ${path.basename(filePath)}: removed ${removed} chars`);
    }
  } catch (error) {
    console.error(`✗ ${filePath}: ${error.message}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.includes("node_modules") &&
      !file.includes(".next")
    ) {
      walkDir(filePath);
    } else if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
      removeDataOid(filePath);
    }
  });
}

console.log("🧹 Removing data-oid attributes...\n");
walkDir("src");
console.log("\n✅ Done!");
