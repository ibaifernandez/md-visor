// archivo app.js
const fileList = document.getElementById('file-list');
const content = document.getElementById('content');

// Cargar lista de archivos organizada por carpetas
fetch('fileList.json')
  .then((res) => res.json())
  .then((folders) => {
    Object.entries(folders).forEach(([folder, files]) => {
      const folderContainer = document.createElement('div');
      folderContainer.classList.add('folder');

      const folderButton = document.createElement('button');
      folderButton.textContent = folder;
      folderButton.classList.add('folder-title');
      folderButton.setAttribute('aria-expanded', 'false');

      const fileContainer = document.createElement('div');
      fileContainer.classList.add('folder-content');

      files.forEach((filename) => {
        const displayName = filename.replace(/\.md$/i, '');
        const fileItem = document.createElement('div');
        fileItem.textContent = displayName;
        fileItem.classList.add('file-item');
        fileItem.addEventListener('click', () => {
          loadMarkdown(`${folder}/${filename}`);
        });
        fileContainer.appendChild(fileItem);
      });

      // Toggle del acordeón
      folderButton.addEventListener('click', () => {
        folderContainer.classList.toggle('open');
        const expanded = folderButton.getAttribute('aria-expanded') === 'true';
        folderButton.setAttribute('aria-expanded', String(!expanded));
      });

      folderContainer.appendChild(folderButton);
      folderContainer.appendChild(fileContainer);
      fileList.appendChild(folderContainer);
    });
  });

function loadMarkdown(filename) {
  fetch(`docs/${encodeURIComponent(filename)}`)
    .then((res) => res.text())
    .then((markdown) => {
      content.innerHTML = `<div class="markdown-container">${marked.parse(markdown)}</div>`;
    })
    .catch((err) => {
      content.innerHTML = `<p style="color:red;">Error al cargar ${filename}: ${err.message}</p>`;
    });
}

// Permitir cerrar el disclaimer
const disclaimer = document.getElementById('disclaimer');
const dismissBtn = document.getElementById('dismiss-disclaimer');

dismissBtn.addEventListener('click', () => {
  disclaimer.style.display = 'none';
});
