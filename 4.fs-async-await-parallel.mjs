// Esto solo en los modulos nativos 
// que no tienen promesas nativas

// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then((data) => {
    console.log('Primer texto: ', data[0]);
    console.log('Segundo texto: ', data[1]);
});
