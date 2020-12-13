/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const practica9 = () => {
  console.log(Math.round(Math.random() * (501 - 600) + 600));
};
practica9();

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
 pe. miFuncion(2002) devolverá true.*/
const practica10 = (num) => {
  if (!num) {
     return console.warn("ingrese el numero");
  } else {
    let s = num.toString();
    s = s.toLowerCase();
    let alReves = s.split("").reverse().join("");

    if (s === alReves) {
      palabra = true;
      return console.info(palabra);
    } else {
      return console.info("no es una palabra palindrofa");
    }
  }
};
practica10();

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
 se define como el producto de todos los números enteros positivos desde 1 hasta n), 
 pe. miFuncion(5) devolverá 120.*/

 const practica11 = (num = "") =>{
   if (!num) {
     return console.warn('introdisca el factorial del numero')

   } else {
     let e = 1;
     for (let i = 1; i <= num; i++) {
       e = e * i;
     }
     console.info(`el factorial de ${num} es igual ${e}`);

   }
   
 }

practica11(5);