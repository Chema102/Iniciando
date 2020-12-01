let edad = 18;
/*
if(edad >= 18){
     console.log('es mayor de edad');

 }else{
     console.log('usted es menor de edad');
 }*/
let hora = 20;

if (hora >= 0 && hora <= 5) {
  console.log("dejame dormir cabron");
} else if (hora >= 6 && hora <= 11) {
  console.log("buenos dias");
} else if (hora >= 12 && hora <= 19) {
  console.log("buenas tardes");
} else if (hora >= 20 && hora <= 24) {
  console.log("buenas noches");
}

//operador ternario (condicion)?verdadero :falso (esto es como un if)

let mayorDeEdad = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mayorDeEdad);

//switch
let dia = 6;

switch (dia) {
  case 0:
    // aqui se escribe el codigo que se ejecutara
    console.log("domingo");
    break; //aqui se cierra el caso
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  case 3:
    console.log("miercoles");
    break;
  case 4:
    console.log("jueves");
    break;
  case 5:
    console.log("viernes");
    break;
  case 6:
    console.log("sabado");
    break;

  default:
    console.log("error");
    break;
}
