// Este programa calcula si el/la alumno/a está aprobado/a
// Se piden los nombres, las notas y el número de clases asistidas
// Solo está aprobado si en los dos parciales tiene 7 o mas, y si cuenta con al menos 80% de asistencia.

let nombre= prompt(`Ingrese su nombre`)
let numClasesAsistidas;
let notaFinal;
let presentismo;

while (nombre === "")
		{
			alert (`Por favor, ingrese un nombre válido`);
			nombre = prompt	("Ingrese su nombre");
		}

function ingresarNota() 
{
	let notaA = parseInt(prompt(nombre+ `: ingrese la nota del primer TP`));
	let notaB = parseInt(prompt(nombre + `: ahora ingrese nota del segundo TP`));
	notaFinal = parseFloat((notaA + notaB)/2);
	alert ("La nota final de " + nombre + " es de: " + notaFinal);
}


function ingresarPresentismo ()
{
	numClasesAsistidas =parseInt(prompt ("De 5 clases, ¿a cuantas asistió " +nombre+"?"));
	presentismo = parseFloat(numClasesAsistidas/5*100);
	alert ("El presentismo de " + nombre + " es del "+ presentismo + "%.");
}

function calcularAprobado ()
{
	if (notaFinal >= 7 && presentismo >= 80)
	{
		alert(nombre + " está aprobado.");
	}
	else
	{
		alert(nombre + " no ha alcanzado los requisitos para aprobar.");
	}
}


ingresarNota();

ingresarPresentismo();

calcularAprobado();

