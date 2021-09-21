// VARIABLES GLOBALES
let formulario = $("#formulario")
let nombreComprador = formulario.children[0];
let apellidoComprador = formulario.children[1];
let domicilioComprador = formulario.children[2];
let localidadComprador = formulario.children[3];
let tarjetaComprador = formulario.children[4];
let claveComprador = formulario.children[5];
let cuotas = parseInt(formulario.children[8]);
let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
let precioTotal=0;
let aPagarXCuota =0; 


function imprimirCarrito()
{
    Object.values(carritoRecuperado).forEach(productoItem =>{
        $("#productosAPagar").append(`
        <tr>")
            <td>${productoItem.nombre}</td>
            <td>${productoItem.cantidad}</td>
            <td>$${productoItem.precio}</td>
            <td>$${productoItem.precio * productoItem.cantidad}</td>
            </tr>`);
        }
        );
        sumarTotalAPagar();
};
// Sumar precio total
function sumarTotalAPagar()
{
    precioTotal = Object.values(carritoRecuperado).reduce((acumular,{cantidad, precio})=>
    acumular+cantidad*precio,0);
    $("#totalAPagar").text("");
    $("#totalAPagar").text(`Total a abonar: $${precioTotal}`);
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

// Calcular cuotas
function calcularCuotas()
{
    cuotas = $("#cuotas").val();
    aPagarXCuota = precioTotal / cuotas;
    return aPagarXCuota.toFixed(2);
}

function imprimirCuotas()
{
    $("#cuotasDOM").text("");
    $("#cuotasDOM").text(`Precio por cada cuota: $${calcularCuotas()}`);
}

$("#cuotas").change(function(e)
{
    imprimirCuotas();
});

// Confirmar compra
function confirmarCompra()
{
    alert (`${nombreComprador}, su compra ha sido exitosa!`)
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

// MUESTRO EL CARRITO CUANDO CARGUE LA PÁGINA
$(document).ready(
    imprimirCarrito(),
    imprimirCuotas()
)
    