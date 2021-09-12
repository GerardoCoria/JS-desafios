// VARIABLES GLOBALES
let carrito =[];
let listaPrecio = 0;
let linkJson = "https://raw.githubusercontent.com/GerardoCoria/JS-desafios/main/FINAL/js/datos.json";
let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
let listaRecuperada =[];
let precioRecuperado= 0;
let precioActualizado=0;
let cantidades=1;

// SE MUESTRA SI HAY PRODUCTOS EN EL CARRITO, EN CASO DE QUE SE RECARGUE LA PAGINA ACCIDENTALMENTE
// SI HAY PRODUCTOS EN EL CARRITO, MUESTRA PRECIO:

function mostrarCarritoRecuperado()
{
    for (const precio of carritoRecuperado)
    {
        precioRecuperado = precio.precio + precioRecuperado;
    }
    $("#precioDelCarrito").text(`Valor de la compra: $${precioRecuperado}`);

// SI HAY PRODUCTOS EN EL CARRITO, MUESTRA PRODUCTOS:

    for (const nombre of carritoRecuperado)
    {
        listaRecuperada.push(nombre.nombre+"<br>");
    }
    $("#productosEnCarrito").append(listaRecuperada);

// VUELVO A PUSHEAR LOS PRODUCTOS EN EL CARRITO

    for (const item of carritoRecuperado)
    {
        carrito.push(item);
    }
}


// function obtenerCantidad()
// {
//     cantidades =  $(".selector").val();
//     return cantidades;
// }

// MUESTRA LOS PRODUCTOS, CON SU INFORMACION CORRESPONDIENTE Y BOTONES 

function mostrarOferta()
{
    $.getJSON(linkJson, function(respuesta, estado)
    {
        if(estado === "success")
        {
            let datosYerbas = respuesta;
            for (const yerbaItem of datosYerbas)
            {
                $("#ofertaImpresa").append(
                    `<div>
                    <h3>${yerbaItem.nombre}</h3>
                    <p>Precio: $${yerbaItem.precio}</p>
                    <img src=${yerbaItem.imagen}>
                    <span>Cantidad:</span>
                    <input class="selector${yerbaItem.id}" type="number" min="1" max="10" value="1">
                    <button id="btn${yerbaItem.id}">Agregar al carrito</button>
                    </div>`);

// AGREGO CANTIDAD
                    // $(`.selector${yerbaItem.id}`).change((e) => { 
                    //     cantidades = e.target.value;
                    // });
                    
// BOTON PARA COMPRAR                   
                    $(`#btn${yerbaItem.id}`).on("click", function () 
                    {
                        let confirmarProducto = confirm (`¿Está seguro de agregar ${yerbaItem.nombre} al carrito?`);
                        
                        if (confirmarProducto)
                        {
                            cantidades = $(`.selector${yerbaItem.id}`).val();
                            alert(`Agregaste ${cantidades} de ${yerbaItem.nombre} al carrito`);
                        }
                        else
                        {
                            return false;
                        }

//AGREGAR AL CARRITO CADA PRODUCTO + JSON STORAGE
                        carrito.push(yerbaItem);
                        localStorage.setItem('carrito', JSON.stringify(carrito));
             
// AGREGO EL PRECIO DEL CARRITO AL DOM
                        precioRecuperado  = precioRecuperado + yerbaItem.precio;
                        $("#precioDelCarrito").text();
                        $("#precioDelCarrito").text(`El valor de su compra es: $${precioRecuperado}`);
             
// AGREGO LOS PRODUCTOS DEL CARRITO AL DOM
                        $("#productosEnCarrito").append(`<li>${yerbaItem.nombre}</li>`);

                        //RESETEO
                        cantidades=1;
                        $(".selector").val(1);                    
                    })          
            }
        }
    })
};


// BOTON PARA CONFIRMAR COMPRA

$("#btnConfirmar").click(function()
    {
        let confirmarCompra = confirm("¿Desea confirmar la compra?");
        if (confirmarCompra)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
);

// BOTON PARA LIMPIAR CARRITO

$("#borrarCarrito").click(function()
{
    let limpiarCarrito = confirm("¿Desea borrar el carrito?");
    if (limpiarCarrito)
    {
        carrito =[];
        precioRecuperado=0;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        $("#precioDelCarrito").text(`El valor de su compra es: $0`);
        $("#productosEnCarrito").empty();
    }
    else
    {
        return false;
    }
}
);

// A EJECUTAR CUANDO CARGA LA PÁGINA 
$(document).ready(
    mostrarCarritoRecuperado(),
    mostrarOferta ()
)