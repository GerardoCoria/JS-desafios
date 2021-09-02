class Alumno
{
    constructor (nombre,email)
    {
        this.nombre = nombre;
        this.email = email;
    }
}

function agregarAlumno(e)
{
    e.preventDefault();
    validarFormulario();
    if (datosOK)
    {
        let confirma = confirm ("Esta seguro de agregar al alumno?");
        if (confirma)
        {
            let formulario = e.target;
            arrayAlumnos.push(new Alumno (nombre1, email1));
            miFormulario.children[1].value='';
            miFormulario.children[3].value='';
            contenedorAlumnoIngresado.innerHTML='';
            agregarAlDOM();
        }
        else
        {
            alert("el alumno no se agregara");
        }
        miFormulario.children[1].value='';
        miFormulario.children[3].value='';
        contenedorAlumnoIngresado.innerHTML='';
        
    }    

}

function validarFormulario()
{
    nombre1=miFormulario.children[1].value;
    email1=miFormulario.children[3].value;
    if(nombre1=='' || email1=='')
    {
        alert ("Error debe completar todos los campos");
        datosOK=false;
    }
    else
        datosOK=true;
}

function agregarAlDOM()
{
    contenedorAlumnoIngresado.innerHTML = `<h3> ultimo alumno ingresado</h3>
    <p><strong> Nombre : </strong> ${nombre1}</p>
    <p><strong> Email : </strong> ${email1}</p>`;
}

function mostrarAlumnos()
{
    contenedorAlumnoIngresado.innerHTML='';
    displayTodos.innerHTML='<h3>El listado de los alumnos ingresados es:</h3>';
    for (const alumno of arrayAlumnos)
        displayTodos.innerHTML+=`<p><strong>Nombre: </strong> ${alumno.nombre}</p>
        <p><strong>Email:</strong> ${alumno.email}</p><hr>`;
}

/**
 * Programa principal
 */

let arrayAlumnos=[];
let miFormulario = document.getElementById("idFormulario");
let nombre1=miFormulario.children[1];
let mail1=miFormulario.children[3];
let inputNombre = document.getElementById("idNombre");
let btnMostrar = document.getElementById("idBtnMostrar");
let contenedorAlumnoIngresado = document.getElementById("idAlumnoIngresado");
let displayTodos = document.getElementById("idMostrarTodos");


miFormulario.addEventListener ("submit",agregarAlumno);
btnMostrar.addEventListener ("click", mostrarAlumnos);

