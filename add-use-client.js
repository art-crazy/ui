const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'dist', 'Header.js'),
  // Если потребуется, добавьте сюда другие клиентские компоненты
];

files.forEach((file) => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (!content.startsWith("'use client';")) {
      fs.writeFileSync(file, `'use client';\n${content}`);
      console.log(`'use client' добавлен в ${file}`);
    }
  }
});
