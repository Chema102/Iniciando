try {
  //cuando el try, identifica un error, ahi es donde va a parar
  pepo();
  //aqui introducimos el codigo a evaluar
  console.log(`pipo :)`);
} catch (error) {
  //captura cualquier error lasado por el try
  console.log(error + ` Error`);

  if ((error = true)) {
    console.log(`error es igual a verdadero`);
  } else {
    console.log(`error es igual a falso`);
  }
}

//esto es un error personalisado
try {
  let num = "p";

  if (isNaN(num)) {
    throw new Error("el caracter no es un numero");
  }
  console.log(num * num);
} catch (error) {
  console.log(`se produjo el siguiente ${error}`);
}
