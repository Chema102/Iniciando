const nombre = "pipo";
const edad = 4;
//las funciones cuando son declararas con 'function' se pueden declaran en cualquier parrte del codigo
conParametros(nombre, edad);

function pipo() {
  console.log("funciona");
}
function devuelveUlValor() {
  return "devolvio un valor";

  console.log("esto no se mostrara");
}

/*asi se manda a llamar una funcion, si no se manda a llamar no se ejecutara el codigo que tiene dentroa
pipo();

let a = devuelveUlValor();
console.log(a);*/
function conParametros(name, numero) {
  console.log(`mi nombre es ${name} y edad de ${numero} años`);
}


/* pero este tipo de funcion no se puede manda a llamar antes porque aun no a sido inicialidado y dara error 
funExpres();*/
//funciones anonimas
const funExpres = function(){
    console.log('esto es una funcion anonima')
}

funExpres();
