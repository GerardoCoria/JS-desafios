// MUESTRO EL CARRITO CUANDO CARGUE LA PÁGINA
$(document).ready(function()
{
    imprimirCarrito();
});

let nombre;

function imprimirCarrito()
{
    $("#precioAPagar").append("A pagar: $"+JSON.parse(localStorage.getItem('precioEnJson')));

    let carritoRecuperado = JSON.parse(localStorage.getItem('carrito'));
    let listaRecuperada =[];

    for (const nombre of carritoRecuperado)
    {
        listaRecuperada.push(nombre.nombre+"<br>");

    }
    $("#productosAPagar").append(listaRecuperada);
}

// VARIABLES GLOBALES

let formulario = $("#formulario")
let nombreComprador = formulario.children[0];
let apellidoComprador = formulario.children[1];
let domicilioComprador = formulario.children[2];
let localidadComprador = formulario.children[3];
let tarjetaComprador = formulario.children[4];
let claveComprador = formulario.children[5];

// CONFIRMAR COMPRA

$("#formulario").submit(function(e)
{
    e.preventDefault();
    let formulario = e.target;

    nombreComprador = formulario.children[0].value;
    apellidoComprador = formulario.children[1].value;
    domicilioComprador = formulario.children[2].value;
    localidadComprador = formulario.children[3].value;
    tarjetaComprador = formulario.children[4].value;
    claveComprador = formulario.children[5].value;

    
  

    if (nombreComprador ==="" || apellidoComprador==="" || domicilioComprador==="" || localidadComprador==="" || tarjetaComprador==="" || claveComprador==="")
    {
        alert("Por favor, ingrese todos los datos")
    }
    else
    {
        confirmarCompra()
    }
}
)

function confirmarCompra()
{
    alert ("Su compra ha sido exitosa!")
}

// CANCELAR COMPRA

$("#btnCancelar").click((e)=>
{
    alert("Ha cancelado su compra");
    $("#nombreForm").val("");
    $("#apellidoForm").val("");
    $("#domicilioForm").val("");
    $("#localidadForm").val("");
    $("#tarjetaForm").val("");
    $("#claveForm").val("");
});