// const fs = require('fs');

// const data = fs.readFileSync('./archivo.txt', 'utf-8');

// console.log(data);

// fs.appendFileSync('./archivo.txt','prueba realizada 2')

// const data1 = fs.readFileSync('./archivo.txt', 'utf-8');

// console.log(data1);


// try {
//     const data = fs.readFileSync('/ruta/no');
// } catch (error) {
//     console.log(error);
// }

// fs.appendFile('./archivo.txt','Texto nuevo\n', error => {
//     if(error){
//        console.log(error);
//     }else{
//        console.log('Todo ok');
//     }
// } )

// fs.readFile('./archivo.txt', 'utf-8', (error, contenido) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(contenido)
//     }
// })

// fs.mkdir('./nuevaCarpeta', error => {
//     if(error){
// console.log(error)
//     }else{
//         console.log('Carpeta creada')
//     }
// })

// Ejercicio asincronismo y callback

const mostrarLetras = (palabra, intervalo) => {     
    for (let index = 0; index < palabra.length; index++) {
        setTimeout(() => console.log(palabra.charAt(index)), intervalo*index )
    }

}

mostrarLetras('texto',2000);