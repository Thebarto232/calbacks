let lista = [2, 4, 6, 7];/**genero una lista con x digitos */
let actilizar = [];/**genero otra lista donde se va almacenar el areglo */

const calback = (argum) => {/**genero una funcion declarada donde el doy como paramtro 1 argumento  */
  return argum * 5;/**aki genero una calback donde va retornar * el x lista */
}
const map = (calback, lista) => {/**aki genero  una funcion map = flecha anonima con 2 parametros */
  for (let i = 0; i < lista.length; i++) {/**i para recorre los elementos d ela lista */
    actilizar.push(calback(lista[i]));/**aki llamo actulizar que es mi lista donde se va agregar junto con el parametro calback para que se multiple con la tabla lista   */
  }
  return actilizar; /**aki se guarda el el areglo */
}
let mensaje = map(calback, lista);/**aki llamo las funciones  */
console.log(lista);
console.log(mensaje);

