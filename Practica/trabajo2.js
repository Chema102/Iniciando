
/*5) Programa una función que invierta las palabras de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const trab5 = (tex = '') =>(!tex)
?console.warn('no introdujo ningun texto')
:console.info(tex.split('').reverse().join(''));

trab5('holas');



/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/


 const contador = (txt1 = "", txt2 = "") =>{
     if(!txt1) return console.warn('no haz introducido el texto');

     if(!txt2) return console.warn('no haz introducido el texto a contar')


     let i = 0;
     let contenedor = txt1.indexOf(txt2);
   
     while (contenedor !== -1) {
        contenedor++;
       contenedor = txt1.indexOf(txt2,contenedor)

        i++;
     }

  return console.info(`el texto "${txt2}" se encontro ${i} veces`)

 }
 contador("hola mundo adios mundo", "mundo");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
 pe. mifuncion("Salas") devolverá true.*/
const palindro = (palabra = "") =>{
    if(!palabra) return console.warn('ingresa la palabra')

    palabra= palabra.toLowerCase();
    let alReves = palabra.split('').reverse().join('');

    if(palabra === alReves){
        palabra = true;
        return console.info(palabra)
    }else{
       return console.info('no es una palabra palindrofa')

    }
}
palindro('Salas');

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

 const practica8 = (texto = "", patron = "") =>
(!texto)
? console.warn("ingresa el texto")
:(!patron)
 ? console.warn('ingresa el patron')
 :console.info(texto.replace(new RegExp(patron,'ig'),''));

 practica8("xyz1, xyz2, xyz3, xyz4 y xyz5", 'xyz');



