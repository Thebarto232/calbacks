const espera = ms => new Promise(res => setTimeout(res, ms));

console.log("Hola"); // Mensaje inmediato

espera(2000).then(() => console.log("¡Adiós! 👋")); // Mensaje después de 2 segundos
