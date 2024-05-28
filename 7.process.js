// Argumentos de entrada
console.log(process.argv);

// Controlar el proceso y su salida
process.exit(1);

// Podemos controlar eventos del proceso
process.on('exit', () => {
    console.log('El proceso terminó');
});

// current working directory
console.log(process.cwd());

// platform
console.log(process.env.NODE_ENV);