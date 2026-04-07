const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');
const THUMB_WIDTH = 400;
const FULL_WIDTH = 1200;
const QUALITY = 80;

const folders = ['fashion', 'artists', 'milanofashionweek'];

async function processFolder(folder) {
    const dir = path.join(IMAGES_DIR, folder);
    const thumbDir = path.join(dir, 'thumbs');

    if (!fs.existsSync(thumbDir)) {
        fs.mkdirSync(thumbDir, {recursive: true});
    }

    const files = fs.readdirSync(dir).filter(f => f.endsWith('-min.jpg'));
    console.log(`Processing ${folder}: ${files.length} images`);

    for (const file of files) {
        const input = path.join(dir, file);
        const baseName = file.replace('-min.jpg', '');

        // Generate thumbnail for grid
        const thumbPath = path.join(thumbDir, `${baseName}-thumb.webp`);
        if (!fs.existsSync(thumbPath)) {
            await sharp(input)
                .resize(THUMB_WIDTH, null, {withoutEnlargement: true})
                .webp({quality: QUALITY})
                .toFile(thumbPath);
            const origSize = fs.statSync(input).size;
            const thumbSize = fs.statSync(thumbPath).size;
            console.log(`  ${file}: ${(origSize / 1024).toFixed(0)}KB → thumb ${(thumbSize / 1024).toFixed(0)}KB`);
        }

        // Generate optimized full-size for modal
        const fullPath = path.join(thumbDir, `${baseName}-full.webp`);
        if (!fs.existsSync(fullPath)) {
            await sharp(input)
                .resize(FULL_WIDTH, null, {withoutEnlargement: true})
                .webp({quality: QUALITY})
                .toFile(fullPath);
        }
    }
}

// Also process hero and portrait
async function processSpecial() {
    const heroInput = path.join(IMAGES_DIR, 'hero-background.jpg');
    const heroOutput = path.join(IMAGES_DIR, 'hero-background.webp');
    if (fs.existsSync(heroInput) && !fs.existsSync(heroOutput)) {
        await sharp(heroInput)
            .resize(1920, null, {withoutEnlargement: true})
            .webp({quality: 85})
            .toFile(heroOutput);
        console.log(`Hero: ${(fs.statSync(heroInput).size / 1024).toFixed(0)}KB → ${(fs.statSync(heroOutput).size / 1024).toFixed(0)}KB`);
    }

    const portraitInput = path.join(IMAGES_DIR, 'portrait.jpg');
    const portraitOutput = path.join(IMAGES_DIR, 'portrait.webp');
    if (fs.existsSync(portraitInput) && !fs.existsSync(portraitOutput)) {
        await sharp(portraitInput)
            .resize(700, null, {withoutEnlargement: true})
            .webp({quality: 85})
            .toFile(portraitOutput);
        console.log(`Portrait: ${(fs.statSync(portraitInput).size / 1024).toFixed(0)}KB → ${(fs.statSync(portraitOutput).size / 1024).toFixed(0)}KB`);
    }
}

async function main() {
    console.log('Generating thumbnails and optimized images...\n');
    for (const folder of folders) {
        await processFolder(folder);
        console.log('');
    }
    await processSpecial();
    console.log('\nDone!');
}

main().catch(console.error);
