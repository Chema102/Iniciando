let ix = 1;

while (ix < 10) {
  console.log("tengo " + ix + " pipos");
  ix++;
}

do {
  console.log(ix);
  ix++;
} while (ix < 20);

for (let i = 0; i <= 10; i++) {
  console.log(`se vendieron ${i} pipos`);
}
let numeros = [60, 70, 80, 90, 100, 5000];

for (let e = 0; e < numeros.length; e++) {
  console.log(numeros[e]);
}

const nombre = {
  nombre: "jose",
  apellido: "Quiñonez",
  edad: 19,
};

for (const key in nombre) {
  console.log(`${key} = ${nombre[key]}`);
}
