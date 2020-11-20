const nombre =  'penetrator';
const a = [1,'jose','gabriela',null, ['a','b','c','d',[1,2,3,4,5]]];
console.log(a);

console.log(a[1] + ' y ' + a[2]);
//asi buscamos arrelos dentro de otros arreglos
console.log(a[4][4][0]);

const b = ['pipo','pepe','jose','gabriela'];
console.log(b);
//asi se agregan objetos al arreglo
b.push('maria');
b.push(nombre);

console.log(b);
//esto elimina el ultimo arrelo de la lista
b.pop();
console.log(b);


b.forEach(function(e,i){
    console.log(`<li id='${i}'> el nombre es ${e} </li>`)


});

