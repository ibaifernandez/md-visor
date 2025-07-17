// generateFileList.js
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const outputFile = path.join(__dirname, 'fileList.json');

function getFilesRecursively(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let result = {};

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(base, entry.name);

    if (entry.isDirectory()) {
      const sub = getFilesRecursively(fullPath, relativePath);
      result = { ...result, ...sub };
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const folder = base || '.';
      result[folder] = result[folder] || [];
      result[folder].push(entry.name);
    }
  });

  return result;
}

const fileMap = getFilesRecursively(docsDir);

fs.writeFile(outputFile, JSON.stringify(fileMap, null, 2), (err) => {
  if (err) {
    console.error('❌ Error escribiendo fileList.json:', err);
  } else {
    console.log(`✅ Archivo fileList.json generado con estructura por carpetas.`);
  }
});
