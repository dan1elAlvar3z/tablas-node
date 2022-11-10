const argv = require('yargs')
                            .option('b',{
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe: 'Es el numero base de la tabla de multiplicar'
                            })
                            .option('l',{
                                alias: 'listar',
                                type: 'boolean',
                                default: false,
                                describe: 'Muestra la tabla en copnsola'
                            })
                            .option('h',{
                                alias: 'hasta',
                                type: 'number',
                                demandOption: true,
                                default: 10,
                                describe: 'Indica el numero al cual se debe calcular el la base'
                            })
                            .check((argv, option) =>{
                                if( isNaN(argv.b)){
                                    throw 'La base debe ser un número';
                                }
                                return true;
                            })
                            .argv;


module.exports = argv;