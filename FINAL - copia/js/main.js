// VARIABLES GLOBALES
let carrito =[];
let listaPrecio = 0;
let linkJson = "https://raw.githubusercontent.com/GerardoCoria/JS-desafios/main/FINAL/js/datos.json";
let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
let listaRecuperada =[];
let precioRecuperado= 0;
let precioActualizado=0;
let cantidades=1;
let contador=0;
let carritoAux = [];
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
                    `<div>
                    <h3>${yerbaItem.nombre}</h3>
                    <p>Precio: $${yerbaItem.precio}</p>
                    <img src=${yerbaItem.imagen}>
                    <span>Cantidad:</span>
                    <input class="selector${yerbaItem.id}" type="number" min="1" max="10" value="1">
                    <button id="btn${yerbaItem.id}">Agregar al carrito</button>
                    </div>`);
// BOTON PARA COMPRAR                   
                    $(`#btn${yerbaItem.id}`).on("click", function () 
                    {
                        cantidades = parseInt($(`.selector${yerbaItem.id}`).val());
                        yerbaItem.cantidad = cantidades;
                        let confirmarProducto = confirm (`¿Está seguro de agregar ${yerbaItem.cantidad} unidad/es de ${yerbaItem.nombre} al carrito?`);
                        if (confirmarProducto)
                        {
                            alert(`Agregaste ${yerbaItem.cantidad} unidad/es de ${yerbaItem.nombre} al carrito`);
                        }
                        else
                        {
                            return false;
                        }

//AGREGAR AL CARRITO CADA PRODUCTO
                        carrito.push(yerbaItem);
                              
// GUARDO INFORMACION EN JSON STORAGE 
                        localStorage.setItem('carrito', JSON.stringify(carrito));

// ACTUALIZO EL CONTADOR DEL CARRITO
                        contadorCarrito();
                        agregarAlListado();

                    })          
            }
        }
    })
};

// AGREGAR AL DOM - A LA LISTA DESPLEGABLE

let nombreListado;
let cantidadesListado=1;
let precioListado=0;
let carritoItem=[];

function agregarAlListado()
{carritoItem.push(carrito);
    for (items of carritoItem)
    {
        
    $("#tablaCarrito").append(`
        <tr>
            <td>${nombreListado}</td>
            <td>${cantidadesListado}</td>
            <td>${precioListado}</td>
            <td>x</td>
        </tr>`);
    }
}

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