const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;
    try {
        files = fs.readdir(folder)
    } catch (err) {
        console.log(`No se pudo leer el directorio ${folder}`);
        process.exit(1);
    }

    const filesPromises = (await files).map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath);
        } catch (err) {
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();


        return `${fileType} ${file.padEnd(30)} ${fileSize.toString().padStart(10)} ${fileModified}`;
    });

    const filesInfo = await Promise.all(filesPromises);

    filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);
