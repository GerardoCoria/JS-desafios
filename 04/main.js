// Este es un simulador educativo
// pide nombre, edad y curso al cual el/la alumno/a quiere acceder

let nombreCurso;
let seleccionCurso;
let nombre;
let edad = 0;

function ingresarNombre ()
{
	nombre= prompt(`Ingrese su nombre`);
	while (nombre === "")
	{
		alert (`Por favor, ingrese un nombre válido`);
		nombre = prompt	("Ingrese su nombre");
	}
}

function ingresarEdad ()
{
	edad= parseInt(prompt("Ingrese su edad:"));
	while (edad < 6 || edad > 18)
	{
		alert (`Por favor, ingrese un número válido`);
		edad= parseInt(prompt("Ingrese su edad:"));
	}
}

function elegirCurso ()
{
	seleccionCurso = parseInt(prompt ("Eliga un curso: \n opción 1: Matemáticas, \n opción 2: Lengua, \n opción 3: Ciencias Naturales, \n opción 4: Ciencias Sociales."));
	
	while (seleccionCurso !== 1 && seleccionCurso !== 2 && seleccionCurso !== 3 && seleccionCurso !== 4)
	{
		alert("incorrecto");
		seleccionCurso = parseInt(prompt ("Eliga un curso: \n opción 1: Matemáticas, \n opción 2: Lengua, \n opción 3: Ciencias Naturales, \n opción 4: Ciencias Sociales."));
	}
		
		switch (seleccionCurso)
		{
			case 1: 
				nombreCurso = `Matemáticas`;
				alert (nombre + ", Ud. ha elegido Matemáticas");
				break;
			case 2: 
				nombreCurso = `Lengua`;
				alert(nombre + ", Ud. ha elegido Lengua");
				break;
			case 3: 
				nombreCurso = `Ciencias Naturales`;
				alert (nombre + ", Ud. ha elegido Ciencias Naturales");
				break;
			case 4: 
				nombreCurso = `Ciencias Sociales`;
				alert (nombre + ", Ud. ha elegido Ciencias Sociales");
				break;
		}
	
}

ingresarNombre();

ingresarEdad();

elegirCurso();

