// VARIABLES GLOBALES
let listaPrecio = 0;
let listaProductos =""
let linkJson = "main.js";

// CUANDO CARGUE LA PÁGINA MUESTRE LOS PRODUCTOS Y SI HAY CARRITO
$(document).ready(function()
{
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
             
             //AGREGAR AL CARRITO POR CADA PRODUCTO + JSON STORAGE
             
                         carrito.push(yerbaItem);
                         localStorage.setItem('carrito', JSON.stringify(carrito));
             
             // AGREGO EL PRECIO DEL CARRITO AL DOM
             
                         listaPrecio =  listaPrecio + yerbaItem.precio;
                         $("#precioDelCarrito").text();
                         $("#precioDelCarrito").text(`El valor de su compra es: $${listaPrecio}`);
             
             // AGREGO LOS PRODUCTOS DEL CARRITO AL DOM
                         listaProductos = listaProductos + yerbaItem.nombre;
                         $("#productosEnCarrito").append(`<li>${yerbaItem.nombre}</li>`);
                     })
            }
        }
    })
   
    $("#precioDelCarrito").text("Valor de la compra: $"+JSON.parse(localStorage.getItem('precioEnJson')));

    let carritoRecuperado = JSON.parse(localStorage.getItem('carrito'));
    let listaRecuperada =[];
    for (const nombre of carritoRecuperado)
    {
        listaRecuperada.push(nombre.nombre+"<br>");
    }
    $("#productosEnCarrito").append(listaRecuperada);
});
;

// CONSTRUCTOR DE OBJETOS
class Yerbas
{
    constructor (id, nombre, precio, imagen)
    {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.imagen = imagen;
    }
}


// ARRAY CARRITO, PARA GUARDAR LOS PRODUCTOS

let carrito =[];

// BOTON PARA CONFIRMAR COMPRA + JSON STORAGE

$("#btnConfirmar").click(function()
    {
        let confirmarCompra = confirm("¿Desea confirmar la compra?");
        if (confirmarCompra)
        {
            localStorage.setItem('precioEnJson', JSON.stringify(listaPrecio));
            return true;
        }
        else
        {
            return false;
        }
    }
);