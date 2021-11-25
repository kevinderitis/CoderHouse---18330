const fs = require('fs');

let packData;

const packageData = fs.readFile('./package.json', 'utf-8', (error, contenido) =>{
    if(error){
        throw new Error('Error leyendo package')
    }else{
    
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: '2 Kb'
        }

        console.log(JSON.stringify(info,null,2));
        fs.writeFile('./info.txt', JSON.stringify(info), error => {
            if(error){
                 throw new Error('Error escribiendo info.txt')
            }else{
                console.log('Guardado en info.txt')
            }
        })
    }
})

