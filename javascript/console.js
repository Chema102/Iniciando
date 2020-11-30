console.log(console);
console.error("esto es un error personalizado");
console.warn("esto es un aviso");
console.info("esto es un mensaje informativo");
console.log("es un registro de lo que a pasado en nuestra aplicacion");

let nom = "pipo",
  apell = "garcia",
  edad = 5;

console.log(`hola mi nombre es %s %s y tengo %d años`, nom, apell, edad);

console.log(`hola mi nombre es ${nom} ${apell} y tengo ${edad} años`);
/** esto sirve para limpiar la consola */
console.clear();

console.log(window);
console.log(document);
//esto es para agruparlos en grupos
console.group("dias de la semana");

    console.log("lunes");
    console.log(" martes");
    console.log(" miercoles");
    console.log("jueves");
    console.log("viernes");
    console.log("sabado");
    console.log("domingo");

console.groupEnd();
console.groupCollapsed("dias de la semana");

    console.log("lunes");
    console.log(" martes");
    console.log(" miercoles");
    console.log("jueves");
    console.log("viernes");
    console.log("sabado");
    console.log("domingo");

console.groupEnd();

console.clear();
//esto sirve para hacer tablas con la consola
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5],
    vocales = ['a','e','i','o','u'];

console.table(numeros);
console.table(vocales);

const persona = {
    nombre: 'pipo',
    apellido: 'garcia',
    edad: 18,
}
console.table(persona);
 
console.clear();

//esto es para ver cuanto tarda en ejecutar el codigo
console.time('cuanto tarda')
const arreglo = Array(1000000);
for (let index = 0; index < arreglo.length; index++) {
    arreglo[index] = index;  
}
  console.timeEnd('cuanto tarda')
//  console.log(arreglo)

console.clear()

for (let index = 0; index <= 100; index++) {
    console.count('a')
    console.log(index)
}

console.clear()

let x = 5,
y = 2 ,
pruebaxy = 'se esperaba que x siempre sea menor que y';


console.assert(x < y, {x,y,pruebaxy})
