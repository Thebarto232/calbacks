const mensajes = {
  saludo: "hola como estas",
  adios: "adios ",
  despertar: "despierta",
};

const contet_caja  = new Proxy(mensajes, {
  get(objetivo, propiedad) {
    if (objetivo[propiedad]) {
      return objetivo[propiedad]; 
    } else {
      return "No entiendo ese mensaje."; 
    }
  },
});


console.log(contet_caja  .saludo);   
console.log(contet_caja.adios);    
console.log(contet_caja.despertar); 
console.log(contet_caja.dormir);    
