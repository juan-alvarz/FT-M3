let nuevaPromesa = new Promise((resolve, rejected) => {
  console.log("Inicial");

  //si todo va bien, ejecuta esto
  resolve("yay, nos trajo los alfajores");

  //si algo sale mal, esto
  rejected("algo pasó");
})

  //nuevaPromesa = {status:'fulfilled', value:'yay, nos trajo los alfajores'}

  //ejemplo pseudoFetch
  /* let pseudoFetch = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.com");
  if (respuesta) {
    resolve(respuesta.data);
  } else {
    reject("Error, no se obtuvo");
  }
});
 */

  .then(() => {
    console.log("comer alfajores");
  })

  .then(() => {
    console.log("Agradecer a Rodrigo");
  })
  .catch(() => {
    console.log("Bloquear a Rodrigo");
  });
