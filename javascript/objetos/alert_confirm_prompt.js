/* estos metodos interactuan con el usuario

alert = esto da una lerta al usuario
alert('esto es una alerta mi hermano');

confirm = da dos  botones que es continuar o cancelar
confirm('esto es una confirmacion mi hermano');

prompt= le da al usuaro que escriba lo que quiera y la opcion de continuar o c
prompt('escribe mi hermano');
*/

let aleta = alert('esto es una alerta mi hermano'),
confirmar = confirm('esto es una confirmacion mi hermano'),
input     = prompt('escribe mi hermano');

//siempre dara undefined
console.log(aleta);
//dara true o false = verdadero o falso
console.log(confirmar);
// si le da aceptar me dara como valor de lo que escribio, pero si le da calcelar me dara null
console.log(input);