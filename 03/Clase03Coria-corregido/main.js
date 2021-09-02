//CLINICA CABA - TURNOS ONLINE
//Este sistema otorga turnos en la medida que se soliciten, de forma consecutiva
//Asigna un turno cada hora
//Se le pide que eliga la especialidad médica con la cual quieren atenderse
//Solo asigna 10 turnos por día

alert	(`Bienvenidos/as a Clínica CABA. Pulse "Aceptar" para solicitar turno`);

let hora = 8;

for (let i = 1; i <= 10 ; i++) 
{

	let nombre = prompt	("Por favor, ingrese su nombre");

		while (nombre === "")
		{
			alert (`Por favor, ingrese un nombre válido`);
			nombre = prompt	("Por favor, ingrese su nombre");
		}
		
	let codigoMedico = parseInt(prompt(`Ingrese el especialista con el cual desdea realizar la consulta:
		1 para pediatría, 2 para oftalmología, 3 para neurología y 4 para traumatología`));

	do

	{
		switch (codigoMedico)
		{
			case 1:
				nombreMedico = `pediatría`;
	
				break;
			case 2:
				nombreMedico = `oftalmología`;
				
				break;
			case 3:
				nombreMedico = `neurología`;
				
				break;
			case 4:
				nombreMedico = `traumatología`;
				
				break;
			default:
				alert(`Ha ingresado una opción incorrecta. Pulse "Aceptar" y vuelva a elegir una opción válida`);
				codigoMedico = parseInt(prompt(`Ingrese el especialista con el cual desdea realizar la consulta:
				1 para pediatría, 2 para oftalmología, 3 para neurología y 4 para traumatología`));
			break;
		}
	} while (codigoMedico < 0 || codigoMedico > 5)
				
	
	console.log (nombre + ", su turno para " + nombreMedico + " es el N°: 00"+ i + ", a las: " + hora + ":00 hs.");
	hora = hora + 1;
}

alert ("Ha finalizado la asignación de turnos por el día de hoy.");

