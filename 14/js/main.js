// VARIABLES GLOBALES
let carrito =[];
let listaPrecio = 0;
let linkJson = "https://raw.githubusercontent.com/GerardoCoria/JS-desafios/d58cd1e591636c8e36b4b11011e7666b73381628/14/js/datos.json";
let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
let listaRecuperada =[];
let precioRecuperado= 0;
let precioActualizado=0;

// A EJECUTAR CUANDO CARGA LA PÁGINA 
$(document).ready(function()
{

// SE MUESTRA SI HAY PRODUCTOS EN EL CARRITO, EN CASO DE QUE SE RECARGUE LA PAGINA ACCIDENTALMENTE
// SI HAY PRODUCTOS EN EL CARRITO, MUESTRA PRECIO:
  
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

// MUESTRA LOS PRODUCTOS, CON SU INFORMACION CORRESPONDIENTE Y BOTONES 

    $.getJSON(linkJson, function(respuesta, estado){
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
                    <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                    <button id="btn${yerbaItem.id}">Agregar al carrito</button>
                    </div>`);
                    $(`#btn${yerbaItem.id}`).on("click", function () 
                    {
                        let confirmarProducto = confirm (`¿Está seguro de agregar ${yerbaItem.nombre} al carrito?`)
                        if (confirmarProducto)
                        {
                            alert(`Agregaste ${yerbaItem.nombre} al carrito`);
                        }
                        else
                        {
                            return false;
                        }
             
//AGREGAR AL CARRITO CADA PRODUCTO + JSON STORAGE
             
                        carrito.push(yerbaItem);
                        localStorage.setItem('carrito', JSON.stringify(carrito));
             
// AGREGO EL PRECIO DEL CARRITO AL DOM
                       
                        for (const precio of carrito)
                        {
                            precioRecuperado = precioRecuperado + precio.precio;
                        }

                        $("#precioDelCarrito").text();
                        $("#precioDelCarrito").text(`El valor de su compra es: $${precioActualizado}`);
             
// AGREGO LOS PRODUCTOS DEL CARRITO AL DOM
                        $("#productosEnCarrito").append(`${listaRecuperada}<li>${yerbaItem.nombre}</li>`);
                    })
            }
        }
    })


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
        localStorage.setItem('carrito', JSON.stringify(carrito));
        $("#precioDelCarrito").text(`El valor de su compra es: $0`);
        $("#productosEnCarrito").empty();
    }
    else
    {
        return false;
    }
}
)

});
