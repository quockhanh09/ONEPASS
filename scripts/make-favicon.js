import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
const require = createRequire(import.meta.url);
const pkg = require('png-to-ico');
const pngToIco = pkg.default || pkg;

const inputPath = path.resolve('src/assets/img/favicon-trắng-viền-đen.png');
const outputPath = path.resolve('public/favicon.ico');

(async () => {
  try {
    const buf = await pngToIco([inputPath]);
    fs.writeFileSync(outputPath, buf);
    console.log('favicon.ico created at', outputPath);
  } catch (err) {
    console.error('Error creating favicon.ico:', err);
    process.exit(1);
  }
})();
