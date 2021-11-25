const fs = require('fs');

const date = new Date();

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log(`Fecha: ${date.toLocaleDateString()} Hora: ${date.toLocaleTimeString()}`)