/* es mejor sentenciar variables con "let", porque si lo hacemos con "var" se 
convierte en una varible global, pero con "let" es una variable de bloque  
var numero1="hola";
var numero2="hola2";

let numero3 = 1234;
let numero4 = 132;

console.log(window.numero1);
console.log(window.numero2);

console.log(window.numero3);
console.log(window.numero4);
*/
//esto se usa para objetos con un balor fijo, que jamas van a cambiar
const pi = 3.1416;
console.log(pi)
//cuando lo untento cambar me sale un error 
/*pi = 321321;
console.log(pi)*/

const nombres = {
    pipo: "Gose",
    nom1: "Gabriela"
}
console.log(nombres);

nombres.nom2 ="jose";
console.log(nombres);


const edad = [23,11,33,44,11,22,11];
console.log(edad);

edad.push(12);
console.log(edad);
  