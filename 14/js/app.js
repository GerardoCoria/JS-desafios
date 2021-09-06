// VARIABLES GLOBALES

let formulario = $("#formulario")
let nombreComprador = formulario.children[0];
let apellidoComprador = formulario.children[1];
let domicilioComprador = formulario.children[2];
let localidadComprador = formulario.children[3];
let tarjetaComprador = formulario.children[4];
let claveComprador = formulario.children[5];

// MUESTRO EL CARRITO CUANDO CARGUE LA PÁGINA
$(document).ready(function()
{
    imprimirCarrito();
});

let nombre;

function imprimirCarrito()
{
    let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
    let listaRecuperada =[];
    let precioRecuperado=0;

    for (const precio of carritoRecuperado)
    {
        precioRecuperado= precio.precio + precioRecuperado;
    }
    $("#precioAPagar").append(`A pagar: $${precioRecuperado}`);

    for (const nombre of carritoRecuperado)
    {
        listaRecuperada.push(nombre.nombre+"<br>");
    }
    $("#productosAPagar").append(listaRecuperada);
}

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