/*12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const esPrimo = (numero) => {
  if (!numero) return console.warn("introdusca un numero");

  if (Math.sign(numero) === -1)
    return console.error("no puedes introducir un numero negativo");

  if (numero == 0 || numero == 1 || numero == 4)
    return console.info(`el numero ${numero} no es un numero primo`);

  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0)
      return console.info(`el numero ${numero} no es un numero primo`);
  }

  return console.info(`el numero ${numero} si es un numero primo`);
};
esPrimo(193);
/*  while (numero != 0  || Math.ceil(numero) != 1) {
          resul = numero /2;
          console.info(resul)
        siclo infinito
     }*/

/*13) Programa una función que determine si un número es par o impar,
 pe. miFuncion(29) devolverá Impar. */
const parOInP = (numero) => {
  if (numero === 0) return console.info("es un numero par");

  if (!numero) return console.warn("introdusca un numero");

  if (numero % 2 == 0) {
    console.info("es un numero par");
  } else {
    console.info("es un numero impar");
  }
};
parOInP(29);

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 pe. miFuncion(0,"C") devolverá 32°F. */

const gradFra = (num = undefined, fra = "") => {
  if (num === undefined && !fra) return console.warn("introdusca los valores");

  if (!fra) return console.warn("introdusca el grado a cambiar");

  if (num === undefined) return console.warn("introdisca los grados");

  fra = fra.toUpperCase();

  if (fra === "C" || fra === "F") {
    let resul = 0;
    if (fra === "C") {
    
      resul = (num * 1.8) + 32;
      console.info(`los ${num} grados Celsius a Fahrenheit son "${resul} grados Fahrenheit"`);

    } else if (fra === "F") {

       resul = (num - 32) / 1.8;
       console.info(`los ${num} grados Fahrenheit a Celsius son "${resul} grados Celsius" `);
    }

  } else {

    return console.warn(
      'coloque el convertidor "C" = Celsius a Fahrenheit, "F" Fahrenheit a celsius '
    );
  }
};
gradFra(0, "C");
gradFra(32, "f");
