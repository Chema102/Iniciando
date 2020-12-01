console.log(Math);
console.log(Math.PI);
//esto lo que haces es devolverte el valor obsoluto de un objeto, no importa si es negativo siempre dara positivo
console.log(Math.abs(-55))
console.group("redondeo")
//este redondaria pero al siguiente numero, no importa si tienen .1, lo redondiara al siguiente numero
console.log(Math.ceil(1.1))
//esto hace lo contrario del abnterior
console.log(Math.floor(1.9))
//este es un redondeo normal, 1.49 es 1, 1.50 es igual a 2
console.log(Math.round(5.49))
console.groupEnd()
//esto saca la raiz cuadrada
console.log(Math.sqrt(81))
//esto es para sacar las potencias
console.log(Math.pow(2,6))
//si el valor es negativo devolvera un -1, si es 0 = 0, y si es un valor positivo sera 1
console.group('Sing')
console.log(Math.sign(-5))
console.log(Math.sign(5))
console.log(Math.sign(0))
console.groupEnd()

//este te da un valor aleatorio
console.log(Math.round(Math.random()*1000))