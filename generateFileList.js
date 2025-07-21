const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const outputFile = path.join(__dirname, 'fileList.json');

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\-_.]/g, '-') // ya no necesitas Ñ mayúscula
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function safeRename(oldPath, newPath) {
  if (!fs.existsSync(newPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`🔁 Renombrado: "${path.basename(oldPath)}" → "${path.basename(newPath)}"`);
  } else {
    console.warn(`⚠️ Ya existe: ${newPath} — no renombrado.`);
  }
}

function getFilesAndRename(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let result = {};

  entries.forEach((entry) => {
    const cleanedName = slugify(entry.name);
    const currentPath = path.join(dir, entry.name);
    const renamedPath = path.join(dir, cleanedName);

    if (entry.name !== cleanedName) {
      safeRename(currentPath, renamedPath);
    }

    const fullPath = path.join(dir, cleanedName);
    const newBase = path.join(base, cleanedName);

    if (fs.lstatSync(fullPath).isDirectory()) {
      const sub = getFilesAndRename(fullPath, newBase);
      result = { ...result, ...sub };
    } else if (cleanedName.endsWith('.md')) {
      const folder = base || '.';
      result[folder] = result[folder] || [];
      result[folder].push(cleanedName);
    }
  });

  return result;
}

const fileMap = getFilesAndRename(docsDir);

fs.writeFile(outputFile, JSON.stringify(fileMap, null, 2), (err) => {
  if (err) {
    console.error('❌ Error escribiendo fileList.json:', err);
  } else {
    console.log(`✅ Archivo fileList.json generado con carpetas y archivos limpias.`);
  }
});
