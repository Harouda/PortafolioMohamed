const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function optimizeFile(file){
  const ext = path.extname(file).toLowerCase();
  if(!['.jpg','.jpeg','.png','.webp'].includes(ext)) return;
  const input = path.join(imagesDir, file);
  const name = path.basename(file, ext);
  const out = path.join(imagesDir, `${name}.webp`);
  try{
    await sharp(input)
      .resize({width:1200})
      .webp({quality:80})
      .toFile(out);
    console.log('Optimized', file, '->', `${name}.webp`);
  }catch(e){
    console.error('Error optimizing', file, e.message);
  }
}

fs.readdir(imagesDir, (err, files)=>{
  if(err) return console.error('Could not read images dir', err.message);
  files.forEach(f => optimizeFile(f));
});
