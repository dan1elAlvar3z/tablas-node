const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 10 )=>{

    try {
       
        
        let salida= "";
        let consola = ";"
        for (let step= 1; step <=hasta; step++) {
    
            salida += `${base } x ${step} = ${base * step}\n`;
            consola += `${base } ${'x'.blue}  ${step} ${'=' .blue} ${base * step}\n`;
        }
        if( listar ){
            console.log('=====================================================' .rainbow);
            console.log('           TABLA'.blue,       'DEL      '.inverse ,base                );
            console.log('=====================================================' .rainbow);
            console.log(consola);
        }

        fs.writeFile( `tabla-${base}.txt`, salida,  (err)=>{
            if(err) throw err;

        return `tabla-${base}.txt`;
        })

    } catch (error) {
        throw err;
    }

  
}

module.exports = {
    crearArchivo
}