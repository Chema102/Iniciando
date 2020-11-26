const poppo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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
/* 
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));
console.log(sumar(1,2,3,4,5,6,7,8));
console.log(sumar(1,2,3,4,5,6,7,8,9));*/

// operador Spread

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);
//aqui juntamos los dos arreglos en un solo agreglo
const arr3 = [...arr1, ...arr2];
console.log(arr3);
