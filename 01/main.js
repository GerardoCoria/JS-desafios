/* Ejercicio entregable de la clase 1
Este simple algoritmo solicita el nombre de un alumno/a
Luego, pide sus notas, y le devuleve su promedio.
*/

alert (`¡Buenos días alumno/a! Pulse "Aceptar" para continuar, por favor`);

let nombre = prompt ("Ingrese su nombre");

let notaA = parseInt(prompt ("Ahora, por favor ingrese la nota de su primer examen"));

let notaB = parseInt(prompt ("Ingrese por favor la nota de su segundo examen"));

let notaC = parseInt(prompt ("Por último, ingrese la nota de su tercer examen"));

promedio = ((notaA + notaB + notaC)/3);

alert (nombre + ", su promedio es de: " + promedio);


