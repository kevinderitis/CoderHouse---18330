// function mostrarLista(lista){
//     if(lista.length > 0){
// for (let index = 0; index < lista.length; index++) {
//     console.log(lista[index]);
// }
//     }else{
// console.log('Lista vacia');
//     }
// } 

// let array1 = [];
// let array2 = [1,'arara',3,'pepe'];

// mostrarLista(array1);
// mostrarLista(array2);

// let array3 = [1,8,9];

// (function(lista){
//     if(lista.length > 0){
//         for (let index = 0; index < lista.length; index++) {
//             console.log(lista[index]);
            
//         }
//         }else{
//             console.log('lista vacia')
//         }
// })(array3);


// function crearMultiplicador(num){
// return function(num2){
// return num*num2;
// }
// }

// console.log(crearMultiplicador(3)(2));
// console.log(crearMultiplicador(5)(8));

class Contador {
    constructor(nombre){
        this.nombre = nombre;
        this.contador = 0;
    }
    static cont = 0;

 obtenerResponsable(){
 return this.nombre;
 }

 obtenerCuentaIndividual(){
 return this.contador;
 }

 obtenerCuentaGlobal(){
  return Contador.cont;
 }
 contar(){
   this.contador++;
   Contador.cont++;
 }

}

let contador1 = new Contador('perrito');
console.log(contador1);
let contador2 = new Contador('gatito');
contador1.contar(); // contador1 = 1 && cont = 1
contador1.contar(); // contador1 = 2 && cont = 2
contador1.contar(); // contador1 = 3 && cont = 3
contador2.contar(); // contador1 = 3 && contador2 = 1 && cont = 4
contador2.contar(); // contador1 = 3 && contador2 = 2 && cont = 5

console.log(contador1.obtenerCuentaIndividual()); // 3
console.log(contador1.obtenerCuentaGlobal()); // 5

console.log(contador2);