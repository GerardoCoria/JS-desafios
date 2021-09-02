
// OBJETO

class Alumno 
{
    constructor (nombre, apellido, edad, localidad)
    {
        this.nombre = nombre;
        this.apellido = apellido
        this.edad = edad;
        this.localidad = localidad;
    }
        resumir () 
        {
            alert (`Ud. ha ingresado los siguientes datos:
                Nombre:  `+nombre + `
                Apellido: `+apellido + `
                Edad: `+edad + `
                Localidad: ` +localidad);
        }

        confirmar ()
        {
            alert(`Ud. se ha inscripto correctamente`);
        }
}

//PEDIR DATOS


let nombre = prompt(`Ingrese su nombre`);

while (nombre==="")
{
    alert(`No ha ingresado ningún dato. Por favor, ingrese su nombre`);
    nombre= prompt (`Ingrese su nombre`);
}

let apellido = prompt(`Ingrese su apellido`);

while (apellido==="")
{
    alert(`No ha ingresado ningún dato. Por favor, ingrese su apellido`);
    apellido= prompt (`Ingrese su nombre`);
}

let edad = parseInt(prompt(`Ingrese su edad`));

while(isNaN (edad))
{
    alert(`Ha ingresado un dato incorrecto. Por favor, ingrese su edad`);
    edad = parseInt(prompt(`Ingrese su edad`));
}

let localidad = prompt (`Ingrese su localidad donde vive`)
 while (localidad==="")
 {
     alert(`No ha ingresado ningún dato. Por favor, ingrese su localidad donde vive`)
 }

const alumno1 = new Alumno (nombre, apellido, edad, localidad);

alumno1.resumir();

alumno1.confirmar();