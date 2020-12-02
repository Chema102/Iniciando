/*const poppo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < poppo.length; i++) {
  if (i === 3) {
    // el break lo que hace es, cuando llega ala condicion, se deja de ejecutar
    break;
  }
  //console.log(poppo[i]);
}
//console.log('-----------------------');
for (let i = 0; i < poppo.length; i++) {
  if (i === 6) {
    // lo que hace el continue es que omite el numero del areglo que este puesto en la condicion
    continue;
  }

  //console.log(poppo[i]);
}

const b = ["pipo", "pepe", "jose", "gabriela"];

// sin destructuracion

// esto es para destructurar los arreglos y poner los valores en un lugar fijo
let uno = b[0],
  dos = b[1],
  tres = b[2],
  cuatro = b[3];

console.log(cuatro);

//con destructuracion
// asi se destructura un arreglo
const [one, tow, three, ford] = b;

console.log(tow);

const persona = {
  nombre2: "pipo",
  apellifo: "garcia",
  edad: 20,
};
//asi se destructura un objeto, ojo tienes que llamarlos igual como los pusiste en el objeto
let { nombre2, apellifo, edad } = persona;

console.log(edad);

//nueva forma de escritura
let nom = "el pepe",
  edad2 = 5;

const perro = {
  nombre: nom,
  edad: edad2,
  bailar: function () {
    console.log("perreando");
  },
};
console.log(perro);
//distinto
const dog = {
  nom,
  edad2,
  perrear() {
    console.log("perreando");
  },
};
console.log(dog);

//paremetros REST
//esto lo que hace es sumar numeros infinitos

function sumar(a, b, ...c) {
  resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}
 
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));
console.log(sumar(1,2,3,4,5,6,7,8));
console.log(sumar(1,2,3,4,5,6,7,8,9));

// operador Spread

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);
//aqui juntamos los dos arreglos en un solo agreglo
const arr3 = [...arr1, ...arr2];
console.log(arr3);
*/
//Arrow functions
//es una nueva fotmda de definir una funcion anonima
/*nomas se puede hacer esto cuando nomas tenemos que enviar un valor, cuabo son mas valores a recibir, tenemos que poner ()
const saluda = (nom) => {
  console.log(`hola ${nom}`);
};
saluda("pipo");
*/
/*const suma = function (a,b){ 
  return a+b;

}

const suma = (a, b) => a + b;

console.log(suma(5, 6));

//--------------------------------
//prototipos

//funcion contructora
function personaB(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
//los metodos los tenemos que agregar asi para que las funciones no se dupliquen y tenga un mejor rendimiento  
personaB.prototype.hola = function () {
  console.log(`hola soy ${this.nombre}`);
};

//herencia prototipica
function personaN(nombre, apellido, edad, color) {
  this.super = personaB;
  this.super(nombre,apellido, edad);
  this.color = color;
  
}

//personaN hereda de personaB
personaN.prototype = new personaB();
personaN.prototype.constructor = personaN;

//sobre escritura de del prototipo padre(personaB) en el hijo(personaN)
personaN.prototype.hola = function() {
  console.log(`hola soy negro y me llamo ${this.nombre}${this.apellido}`);
  
}

personaN.prototype.navaja = function(){
  console.log(`dame todo tu ninero hemono`);

}


const pipo1 = new personaB("Pipo", "Garcia", 5),
  pipo2 = new personaB("Pipo2", "garcitas", 6);

console.log(pipo1);
pipo1.hola();
console.log(pipo2);
pipo2.hola(); 

const pipoN = new personaN('Pipo',' Nepo',5,'negro');

console.log(pipoN);
pipoN.hola();
pipoN.navaja();
*/
//lo qu hacen las clases es hacer la escritura mas facil
/*
 ---------------------------------

  clses = class
  
----------------------------------
 */
class persona {
  //el contructor es un metodo especial que se ejecuta en el momento de intalaciar la clase
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dinero = null;
  }

  hola() {
    console.log(
      `hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  }
  camina() {
    console.log(`${this.nombre} esta caminando nomrmal`);
  }
  //un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log(`esto es un metodo estatico`);
  }
  //los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  get getDinero() {
    return this.dinero;
  }
  set setDinero(dinero) {
    this.dinero = dinero;
  }
}

// estamos eredando
class pNeg extends persona {
  constructor(nombre, apellido, edad, armas, educacion) {
    //con el metodo super() mandamos a llamas al contructor de la clase oto-san
    super(nombre, apellido, edad);
    this.armas = armas;
    this.educacion = educacion;
  }
  //sobre escritura
  hola() {
    console.log(`hola yo soy ${this.nombre}${this.apellido} y soy negro`);
  }

  camina() {
    console.log(`${this.nombre} esta caminando como sholo`);
  }

  navajear() {
    console.log(
      `te navajeo papi ${this.nombre} hemano, eso te pasa por ser rico`
    );
  }
}

class pBlan extends persona {
  constructor(nombre, apellido, edad, educacion) {
    super(nombre, apellido, edad);
    this.educacion = educacion;
  }

  hola() {
    console.log(
      `hola yo soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  }

  camina() {
    console.log(
      `${this.nombre} esta caminando elegante y tiene ${this.educacion} terminada`
    );
  }
  saludar() {
    console.log(`saludando`);
  }
}

persona.queEres();

const pJose = new pBlan("Jose", "Quinonez", 16, "doctorado"),
  pCucs = new pBlan("cucs", "garcia", 20, "3 carreras");

console.log(pJose);
pJose.hola();
pJose.camina();
pJose.saludar();
console.log(pCucs);
pCucs.hola();
pCucs.camina();
pCucs.saludar();

const pBryan = new pNeg("Bryan", "Gonzales", 25, "navaja", "Primarioa");

console.log(pBryan);
pBryan.hola();
pBryan.camina();
pBryan.navajear();

console.log(pCucs.dinero);
pCucs.setDinero = "152,000 pesos";
console.log(pCucs.dinero);

console.clear();

/* 
---------------------------------

  OPERADORES DE CORTOCIRCUITO 
  
----------------------------------
 */
/*
Cortocircuito OR(||).-cuando el valor de la izquierda en la
expresion siempre pueda validar a true, es el valor
que se cargara por defecto

Cortocircuito AND(&&).-cuando el valor de la izquierda en la
expresion siempre pueda validar a false, es el valor
que se cargara por defecto

*/

function pipo(nombre) {
  //esto es un operador de cortocircuito
  nombre = nombre || "Desconocido";
  console.log(`hola soy ${nombre}`);
}
//es lo mismo pero con menos codigo xd
function pepe2(nombre = "desconocido") {
  console.log(`hola soy ${nombre}`);
}

pipo("pepe");
pipo();

pepe2("pipo");
pepe2();

console.log("izquierda" || "derecha");
console.log(1 || "derecha");
console.log(true || "derecha");
console.log({} || "derecha");
console.log([] || "derecha");
console.log(false || "derecha");
console.log(undefined || "derecha");
console.log(NaN || "derecha");
console.log("" || "derecha");
console.log(-1 || "derecha");
console.log(0 || "derecha");

console.log(false && "derecha");
console.log(undefined && "derecha");
console.log(NaN && "derecha");
console.log("" && "derecha");
console.log(-1 && "derecha");
console.log(0 && "derecha");

console.clear();
/* 
---------------------------------

 EXPRECIONES REGULARES
  
----------------------------------
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 */

let lettras = "PipO estubo 3 pipiando en PipOliando";

//let ecpReg = new RegExp("pipo","");

//\d es solo para puros numeros
let ecpReg2 = /pipo{1,}/ig;
console.log(ecpReg2.test(lettras));
console.log(ecpReg2.exec(lettras));

console.clear();
/* 
---------------------------------

  FUNCION ANONIMA AUTOEJECUTABLE
  
----------------------------------

*/
(function(d,w,c){
  c.log('hola buenas tardes')
  
  c.log(d);
  c.log(w);
  c.log(c);

})(Document,window,console);


(function(){
  console.log('hola buenas tardes x2')
})();

 
//hay cuatro formas de hacerlo
//2
((function(){
  console.log('forma 2')

})());

//3
+function (){
  console.log('forma 3')
}();

//4
!function (){
  console.log('forma 4')
}();