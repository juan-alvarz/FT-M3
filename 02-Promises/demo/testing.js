const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Primer proceso finalizado");
    resolve("foo");
  }, 500);
});

myPromise
  .then((r) => {
    setTimeout(() => {
      console.log(`La petición se resolvió con: ${r}`);
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(
        "el proceso anterior se encuentra terminado, puede proceder con la siguiente tarea"
      );
    }, 1250);
  })
  .then(() => {
    setTimeout(() => {
      console.log("\n\t==> FINAL PROCESS <==");
    }, 3000);
  });
