/*1 Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá 10.*/

const saludando = (saluda = "") => {
  if (!saluda) {
    console.warn("usted no a escrito nada");
  } else {
    console.log("son " + saluda.length + ` caracteres de ${saluda}`);
  }
};
saludando('hola mundo');

/* Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola".*/

const practica2 = (nom = "", num = undefined) => {
  if (nom === "" && num === undefined) {
    console.error("no haz dado nungun valor");
  } else {
     if (!nom) {

       console.warn("usted no a escrito nada");
    } else if (num === undefined) {
      console.warn("te falto poner el numero que se cortara");
    } else {
      console.log(nom.slice(0, num));
    }
  }
  
 
};

practica2('hola mundo', 4);

/*3  Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

const practica3 = (params = String, spl = undefined) => {
  if (params === "" && spl === undefined) {
    console.error("no haz dado nungun valor");
  } else {
    if (!params) {
      console.warn("usted no a escrito nada");
    } else if (spl === undefined) {
      console.warn("usted no a escrito el pasadaor");
    } else {
      console.log(params.split(spl));
    }
  }
};
practica3("hola que tal"," ");

/*4Programa una función que repita un texto X veces, pe.
 miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

const practica4 = (saludar = "", num = undefined) => {
  if (saludar === "" && num === undefined) {
    console.error("no haz dado nungun valor");
    
  } else if(num === undefined){
     console.warn('te falta poner el numero de reperticiones')
  }else if (!saludar){
    console.warn('escriba lo que se va a repetir')
  }else if(num === 0){
    console.error('no se puede repetir 0 veces')

  
  }else if(Math.sign(num) === -1){
    console.error('el numero de veces, no puede ser negativo')
    
  }else{
    console.log(saludar.repeat(num));
  }
  
};
practica4('hola ', 3);

