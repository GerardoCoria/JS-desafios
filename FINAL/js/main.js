// VARIABLES GLOBALES
let carrito =[];
let listaPrecio = 0;
let linkJson = "https://raw.githubusercontent.com/GerardoCoria/JS-desafios/main/FINAL/js/datos.json";
let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
let listaRecuperada =[];
let precioRecuperado= 0;
let precioActualizado=0;
let contador=0;
let carritoListado = [];

// FUNCIONES POR SI LA PAGINA SE RECARGA ACCIDENTALMENTE
// SI HAY ITEMS EN EL CARRITO, MUESTRA PRECIO
function mostrarCarritoRecuperado()
{
    for (const precio of carritoRecuperado)
    {
        precioRecuperado = precio.precio + precioRecuperado;
    }
    $("#precioDelCarrito").text(`Total: $${precioRecuperado}`);

// SI HAY ITEMS EN EL CARRITO, MUESTRA PRODUCTOS
    for (const nombre of carritoRecuperado)
    {
        listaRecuperada.push(nombre.nombre+"<br>");
    }
    $("#productosEnCarrito").append(listaRecuperada);

// VUELVO A PUSHEAR LOS ITEMS EN EL CARRITO
    for (const item of carritoRecuperado)
    {
        carrito.push(item);
    }

// ACTUALIZO EL CONTADOR DEL CARRITO
        contadorCarrito();
}

// MUESTRA LOS PRODUCTOS, CON SU INFORMACION CORRESPONDIENTE E INPUTS
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
                    `<div id="yerbaCard">
                    <h3 id="nombre">${yerbaItem.nombre}</h3>
                    <p id="precio">Precio: $${yerbaItem.precio}</p>
                    <img src=${yerbaItem.imagen}>
                    <button id="btn${yerbaItem.id}">Agregar al carrito</button>
                    </div>`);
// BOTON PARA COMPRAR                   
                    $(`#btn${yerbaItem.id}`).on("click", function () 
                    {
                        let confirmarProducto = confirm (`¿Está seguro de agregar ${yerbaItem.nombre} al carrito?`);
                        if (confirmarProducto)
                        {
                            alert(`Agregaste ${yerbaItem.nombre} al carrito`);
                        }
                        else
                        {
                            return false;
                        }

//AGREGAR AL CARRITO CADA PRODUCTO
                        carrito.push(yerbaItem);
                        // var yerbaCard = ($(`.yerbaCard${yerbaItem.id}`));
                        // guardarEnCarrito(yerbaItem);
                              
// GUARDO INFORMACION EN JSON STORAGE 
                        localStorage.setItem('carrito', JSON.stringify(carrito));

// ACTUALIZO EL CONTADOR DEL CARRITO
                        contadorCarrito();
                        // agregarAlListado();

                    })          
            }
        }
    })
};

// AGREGAR AL DOM - A LA LISTA DESPLEGABLE
// let carritoAux={};

// let guardarEnCarrito = (yerbaItem) =>{
//     let itemCarrito =
//     {
//         id: 2,
//         nombre: document.getElementById("nombre").textContent,
//         precio: document.getElementById("precio").textContent,
//         cantidad: 1,
//     };
// if (carritoAux.hasOwnProperty(itemCarrito.id))
// {
//     itemCarrito.cantidad = carritoAux[itemCarrito.id].cantidad + 1;
// }

//     carritoAux[itemCarrito.id] = {...itemCarrito};
// }

// function agregarAlListado()
// {
//     // $("#tablaCarrito").empty();
//     // for (yerbaItem of carrito)
//     // {
//     // $("#tablaCarrito").append(`
//     //     <tr>
//     //         <td>${yerbaItem.nombre}</td>
//     //         <td>cantidad</td>
//     //         <td>${yerbaItem.precio}</td>
//     //         <td>x</td>
//     //     </tr>`);
// }

//BOTON PARA VER CARRITO -LISTA DESPLEGABLE
$("#btnCarrito").click(function()
{
    $("#listaCarrito").toggle();
})

// FUNCION QUE ACTUALIZA EL CONTADOR DEL CARRITO
function contadorCarrito()
{
contador = carrito.length;
$("#contador").text(``);
$("#contador").text(`${contador}`);
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
        $("#precioDelCarrito").text(`Total: $0`);
        $("#productosEnCarrito").empty();
        contadorCarrito();
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