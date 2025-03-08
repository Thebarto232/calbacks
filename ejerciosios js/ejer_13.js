const error_promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rechazada"); // Rechazamos la promesa después de 2 segundos
    }, 2000);
});

// Manejo del error con .catch()
error_promesa
    .then(console.log) // No se ejecutará porque la promesa se rechaza
    .catch(error => console.log("eerror:", error)); // Captura el error y lo muestra
