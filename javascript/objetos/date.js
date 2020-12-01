

let fecha = new Date();
console.log(fecha);
//dia del mes
console.log('uno            '+fecha.getDate());
//dia de la semana D-L-M-Mi-J-V-S= 0-1-2-3-4-5-6
console.log('dos            '+fecha.getDay());
//año
console.log('tres           '+fecha.getFullYear());
//hora
console.log('cuatro         '+fecha.getHours());
//milisegundos
console.log('cinco          '+fecha.getMilliseconds());
//minutos
console.log('seis           '+fecha.getMinutes());
//este e es el mes del año pero enero empieza desde 0  0-1-2-3-4-5-6-7-8-9-10-11  y termina en 11=diciembre
console.log('siete          '+fecha.getMonth());
//segundos 
console.log('ocho           '+fecha.getSeconds());

console.log('nueve          '+fecha.getTime());
console.log('diez           '+fecha.getTimezoneOffset());
// esto es la hora de londres o la hora 0
console.log('once           '+fecha.getUTCDate());
console.log('doce           '+fecha.getUTCDay());
console.log('trece          '+fecha.getUTCFullYear());
console.log('catorce        '+fecha.getUTCHours());
console.log('quince         '+fecha.getUTCMilliseconds());
console.log('dieciseis      '+fecha.getUTCMinutes());
console.log('diecisiete     '+fecha.getUTCMonth());
console.log('dieciosho      '+fecha.getUTCSeconds());

//esto es en forma de texto
console.log('diecinueve     '+fecha.toDateString());
console.log('veinte         '+fecha.toISOString());
console.log('veintiuno      '+fecha.toJSON());
console.log('veintidos      '+fecha.toLocaleDateString());
console.log('veintitres     '+fecha.toLocaleString());
console.log('veinticuatro   '+fecha.toLocaleTimeString());
console.log('veinticinco    '+fecha.toString());
console.log('veintiseis     '+fecha.toTimeString());
//esto es en la hora de londres
console.log('veintisiete    '+fecha.toUTCString());
console.log('veintiosho     '+fecha.valueOf());

