let desde = parseInt(prompt("ingrese desdedonde quiere"));
let hasta = parseInt(prompt("ingrese desdedonde quiere finalizar"));
let i = desde;
let tiempo_intervalo = 1000;
function funcionalidad() {
  let i = desde;
  const proceso = setInterval(() => {
    console.log(i);
    if (i === hasta) {
      clearInterval(proceso);
    }
    i++;
  }, tiempo_intervalo - 500)

}
function retorno(desde, hasta) {
  setTimeout(() => {
    let j = desde;

    if (j <= hasta) {
      console.log(desde);
      j++;
      retorno(j, hasta);

    }
  }, (tiempo_intervalo * (hasta - desde)) + 500);/** */

}
funcionalidad();
retorno(desde, hasta);

