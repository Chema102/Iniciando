/* es mejor sentenciar variables con "let", porque si lo hacemos con "var" se 
convierte en una varible global, pero con "let" es una variable de bloque  */

var numero1="hola";
var numero2="hola2";

let numero3 = "hola mundo" ;
let numero4 = 132;

console.log(window.numero1);
console.log(window.numero2);

console.log(window.numero3);
console.log(window.numero4);
  