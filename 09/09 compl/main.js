// DEFINO VARIABLES GLOBALES

let lista1 = document.getElementById("lista1");
let lista2 = document.getElementById("lista2");
let formulario = document.getElementById("formulario");
let nombre = formulario.children[1];
let edad = formulario.children[3];
let deporte = formulario.children[5];

//DEFINO CLASE Y CONSTRUCTOR

class Socio
{
    constructor (nombre, edad, deporte)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.deporte = deporte;
    }
}

// ARRAY

let listadoDeSocios=[];

// VALIDACION DE DATOS

function validarDatos ()
{
    nombre = formulario.children[1].value;
    edad = formulario.children[3].value;
    deporte = formulario.children[5].value;

    if (nombre==="" || edad ==="" || deporte==="")
    {
        datosOk = false;
    }
    else
    {
        datosOk=true;
    }
}

// AGREGAR AL DOM

function agregar(e)
{ 
    e.preventDefault();
    let formulario = e.target;
    validarDatos();
   

    if (datosOk==true)
    {
        nombre = formulario.children[1].value;
        edad = formulario.children[3].value;
        deporte = formulario.children[5].value;
        
        listadoDeSocios.push(new Socio(nombre, edad, deporte));
        lista1.innerHTML = `Nombre: ${nombre}<br>Edad: ${edad}<br>Deporte: ${deporte}`;
        formulario.children[1].value ="";
        formulario.children[3].value = "";
        formulario.children[5].value ="";
    }
    else
    {
        alert(`Por favor, complete todos los campos`);
    }

}

function visibilizarDOM()
{
    lista2.innerHTML="";
    for (const nombres of listadoDeSocios)
    lista2.innerHTML += `Nombre: ${nombres.nombre}. Edad: ${nombres.edad}. Deporte: ${nombres.deporte}<br>`;;
}

//BOTONES DE ACCION 

formulario.addEventListener ("submit", agregar);

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener ("click", visibilizarDOM);