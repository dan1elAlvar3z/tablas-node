
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//console.log(argv);

//console.log('base: yargs', argv.base);

//const base =4;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
