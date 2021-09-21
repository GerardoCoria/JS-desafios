// Declaro las variables globales a utilizar
let carrito =[];
let listaPrecio = 0;
let linkJson = "https://raw.githubusercontent.com/GerardoCoria/JS-desafios/main/FINAL/js/datos.json";
let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
let listaRecuperada =[];
let precioRecuperado= 0;
let precioActualizado=0;
let contador=0;
let carritoListado = [];
let carritoAux={};
let productoItem = {};
let contadorPrecioTotal=0;

// Funciones para mostrar carrito, por si la página se recarga accidentalmente
function mostrarCarritoRecuperado()
{
//Recupero la lista del carrito
Object.values(carritoRecuperado).forEach(productoItem =>{
    carritoAux[productoItem.id] = {...productoItem};
    $("#tablaCarrito").text("");
    Object.values(carritoAux).forEach(productoItem =>{
        $("#tablaCarrito").append(`
        <tr>")
            <td>${productoItem.nombre}</td>
            <td>${productoItem.cantidad}</td>
            <td>$${productoItem.precio}</td>
            <td>$${productoItem.precio * productoItem.cantidad}</td>
        </tr>`);
        }
        );
});
//Recupero el total de compra
    sumarTotal();
//Recupero el contador del carrito
    contadorCarrito();
}

// Muestro los productos ofertados, con su información correspondiente, más los botones de compra
function mostrarOferta()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    $.getJSON(linkJson, function(respuesta, estado)
    {
        if(estado === "success")
        {
            let datosYerbas = respuesta;
            for (const yerbaItem of datosYerbas)
            {
                $("#ofertaImpresa").append(
                    `<div id="yerbaCard${yerbaItem.id}">
                    <h3 id="nombre">${yerbaItem.nombre}</h3>
                    <p id="precio">Precio: $${yerbaItem.precio}</p>
                    <img src=${yerbaItem.imagen}>
                    <span>Cantidad:</span>
                    <input class="selector${yerbaItem.id}" type="number" min="1" max="10" value="1">
                    <button id="btn${yerbaItem.id}">Agregar al carrito</button>
                    </div>`);

                    //Botón para comprar              
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

                        //Armo el item producto para poder agregarlos al carrito
                        productoItem = {
                            id: yerbaItem.id,
                            nombre: yerbaItem.nombre,
                            precio: yerbaItem.precio,
                            cantidad: yerbaItem.cantidad
                        }
                        //En caso de que el producto ya esté en el carrito, sólo se agrega cantidad
                        if(carritoAux.hasOwnProperty(yerbaItem.id))
                        {
                            productoItem.cantidad = carritoAux[yerbaItem.id].cantidad+yerbaItem.cantidad;
                        }
                        //En caso de que el producto NO esté, se pushea el item
                        carritoAux[productoItem.id] = {...productoItem};
                        console.log(carritoAux);

                        //Agrego al DOM - Lista desplegrable
                        $("#tablaCarrito").text("");
                        Object.values(carritoAux).forEach(productoItem =>{
                        $("#tablaCarrito").append(`
                        <tr>")
                            <td>${productoItem.nombre}</td>
                            <td>${productoItem.cantidad}</td>
                            <td>$${productoItem.precio}</td>
                            <td>$${productoItem.precio * productoItem.cantidad}</td>
                        </tr>`);
                        }
                        );
                        sumarTotal();
                    
                        
                        // Guardo información en Storage
                        localStorage.setItem('carrito', JSON.stringify(carritoAux));

                        // Actualizo el contador del carrito
                        contadorCarrito();
                    })          
            }
        }
    })
};

// Botón para ver u ocultar el carrito 
$("#btnCarrito").click(function()
{
    $("#listaCarrito").toggle();
})

// Actualiza el contador del carrito
function contadorCarrito()
{
contador =  Object.values(carritoAux).reduce((acumular,{cantidad})=>
acumular+cantidad,0); 

$("#contador").text(``);
$("#contador").text(`${contador}`);
};

// Sumar precio total
function sumarTotal()
{
    contadorPrecioTotal = Object.values(carritoAux).reduce((acumular,{cantidad, precio})=>
    acumular+cantidad*precio,0);
    console.log(contadorPrecioTotal);
    $("#totalCompra").text("");
    $("#totalCompra").text(`Total: $${contadorPrecioTotal}`);
}


// Botón para confirmar la compra
$("#btnConfirmar").click(function()
    {
        if (contador==0)
        {
            alert(`Su carrito está vacío!`);
            return false;
        }
        else if (contador >0)
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
    });

// Botón para borrar el carrito, restaurar el contador y el precio total a 0
$("#borrarCarrito").click(function()
{
    let limpiarCarrito = confirm("¿Desea borrar el carrito?");
    if (limpiarCarrito)
    {
        carritoAux = {};
        $("#tablaCarrito").text("");
        contadorCarrito();
        sumarTotal();
        $("#totalCompra").text(`Total: $${contadorPrecioTotal}`)
        localStorage.setItem('carrito', JSON.stringify(carritoAux));
    }
    else
    {
        return false;
    }
}
);

// Se ejecuta cuando se carga la página
$(document).ready(
    mostrarCarritoRecuperado(),
    mostrarOferta ()
)