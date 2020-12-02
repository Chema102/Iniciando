/*1 Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá 10.*/

function saludando(saluda = String) {
  console.log("son " + saluda.length + ` caracteres`);
}
saludando("hola mundo");

/* Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function practica2(nom = String, num) {
  console.log(nom.slice(0, num) + ` se a recortado ${num} caracteres`);
}
practica2("hola como estan todos", 4);

/*3  Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function practica3(params = String, spl) {
  console.log(params.split(spl));
}
practica3("hola mundo soy pipo gonzales", " ");

/*4Programa una función que repita un texto X veces, pe.
 miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
 
function practica4(saludar = String, num) {
  console.log(saludar.repeat(num));
}
practica4("Hola mundo ", 3);
