let prueba = "jose maria quiñonez";

console.log(prueba.length);
//length sirve para saber cuantos caracteres hay  en la variable
prueba = 213
console.log(prueba.length);
//si le das un valor numerico, te lo va a contar como 'undefined'

let prueba2 = 'gabriela'
let prueba3 = 'jose'

console.log(prueba3.charAt(),prueba3.charAt(1),prueba2.charAt(),prueba2.charAt(1));
// charAt funciona para sacar una una letra de la variable, se incia de el 0 

console.log('Abc'.charCodeAt(2));
//seguir investigando

console.log(prueba3.concat(' y ',prueba2));
/* sirve para juntar dos variables pero esto es un poco inomdo asi que es mejor concatenar
(prueba3 +' y '+prueba2)
*/
console.log(prueba3 +' y '+prueba2);


let prueba4 = 'estoy saliendo con la';

console.log((prueba4 + ' '+ prueba2).endsWith('?'));

// endsWith sirve para saber que hay al final de la oracion , si el '?' no esta al final te dara un false , pero si esta te dara un true

//-=-------------------------------------------------------------------------------------------------------------------

console.log('estos dos estan enamorados '+prueba3+' y '+prueba2);

//inter polacion de variables, pero de tienen que hicar las comillas invertidas para poder usarlos `` 
prueba5 = `estos estan enamorados ${prueba3} y ${prueba2}`
console.log(prueba5);

//tambien se puede hacer esto con las comillas invertidas ``
let ul = `<ul>
    <li></li>
    <li></li>
    <li></li>
   <li></li>
</ul>
`;
console.log(ul);



