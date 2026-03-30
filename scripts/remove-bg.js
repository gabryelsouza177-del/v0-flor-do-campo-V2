import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const inputPath = '/vercel/share/v0-project/public/images/logo.jpg';
const outputPath = '/vercel/share/v0-project/public/images/logo.png';

async function removeDarkBackground() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const newData = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const brightness = (r + g + b) / 3;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;

    if (brightness < 60 && saturation < 0.25) {
      newData[i] = 0;
      newData[i + 1] = 0;
      newData[i + 2] = 0;
      newData[i + 3] = 0;
    } else if (brightness < 80 && saturation < 0.15) {
      const alpha = Math.round(((brightness - 40) / 40) * 255);
      newData[i] = r;
      newData[i + 1] = g;
      newData[i + 2] = b;
      newData[i + 3] = Math.max(0, Math.min(255, alpha));
    } else {
      newData[i] = r;
      newData[i + 1] = g;
      newData[i + 2] = b;
      newData[i + 3] = data[i + 3];
    }
  }

  await sharp(newData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log('Background removed successfully. Saved to ' + outputPath);
  console.log('Image dimensions: ' + info.width + 'x' + info.height);
}

removeDarkBackground().catch(console.error);
