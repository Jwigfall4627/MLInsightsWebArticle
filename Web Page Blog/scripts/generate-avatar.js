const path = require('path');
const sharp = require('sharp');

const input = path.join(__dirname, '..', 'JohnathenWigfall.jpg');
const outputs = [
  { size: 512, name: 'JohnathenWigfall-avatar-512.jpg' },
  { size: 1024, name: 'JohnathenWigfall-avatar-1024.jpg' }
];

(async () => {
  try {
    for (const o of outputs) {
      const outPath = path.join(__dirname, '..', o.name);
      console.log(`Generating ${o.name} (${o.size}x${o.size}) -> ${outPath}`);
      await sharp(input)
        .resize(o.size, o.size, { fit: 'cover', position: 'entropy' })
        .jpeg({ quality: 92, mozjpeg: true })
        .toFile(outPath);
      console.log(`Wrote ${o.name}`);
    }
    console.log('All done');
  } catch (err) {
    console.error('Error generating avatars:', err);
    process.exit(1);
  }
})();
