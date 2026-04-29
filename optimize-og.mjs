import sharp from 'sharp';

sharp('public/images/og-default.png')
  .resize(1200, 630)
  .webp({ quality: 82 })
  .toFile('public/images/og-default.webp')
  .then(info => console.log('Listo:', info));