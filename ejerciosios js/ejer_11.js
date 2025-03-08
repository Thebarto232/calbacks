const promesa = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 3000);
});

// Uso de la promesa
promesa.then(mensaje => console.log(mensaje));
