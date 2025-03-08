/**¿Cuándo se ejecutará la función programada y por qué se ejecutará?

a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
¿Qué va a mostrar alert()? */

let i = 0;/**defino un contador para usar mas adelante */

setTimeout(() => alert(i), 100);/** con alert muestra un mensaje del digito */

/**se asume el tiempo para ejecutar la funcion 100ms */
for (let j = 0; j < 100000000; j++) {
  i++;/**incrementa el valor del digito */
}


