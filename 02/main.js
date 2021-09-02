//Este sistema permite calcular si una persona puede jubilarse
// Toma en cuenta tres datos: el sexo, la edad y los años aportados

alert (`¡Buenos días! Bienvenidos al sistema previsional de ANSES. Pulse "Aceptar" para continuar.`);

var nombre = prompt (`Ingrese su nombre:`);

var edad = parseInt(prompt(`Ingrese su edad`));

var aniosAportados = parseInt(prompt(`Ingrese la cantidad de años aportados`));

var sexo = prompt (`Ingrese "M" o "F" según su sexo.`);

if (aniosAportados >30 && edad > 65 && (sexo=="M" || sexo=="m")) {

	alert (nombre + `, Ud. puede iniciar los trámites jubilatorios`);

	} else if (aniosAportados >30 && edad > 60 && (sexo=="F" || sexo=="f")) {

			alert (nombre + `, Ud. puede iniciar los trámites jubilatorios`);

		} else  {

			alert(nombre + `, Ud. aun no reúne los requisitos para jubilarse`);

		}


			
			
	

	

