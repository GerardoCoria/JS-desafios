// CUANDO CARGUE LA PÁGINA MUESTRE LOS PRODUCTOS Y SI HAY CARRITO
$(document).ready(function()
{
    imprimirOferta();
    $("#precioDelCarrito").text("Valor de la compra: $"+JSON.parse(localStorage.getItem('precioEnJson')));

    let carritoRecuperado = JSON.parse(localStorage.getItem('carrito'));
    let listaRecuperada =[];
    for (const nombre of carritoRecuperado)
    {
        listaRecuperada.push(nombre.nombre+"<br>");
    }
    $("#productosEnCarrito").append(listaRecuperada);
});

// VARIABLES GLOBALES

let listaPrecio = 0;
let listaProductos ="";

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

// NUEVOS OBJETOS A PARTIR DEL ORIGINAL

let yerba1 = new Yerbas (1, "Yerba Taragüi", 350, "media/taragui.webp");
let yerba2 = new Yerbas (2, "Yerba La Merced", 450, "media/lamerced.jpg");
let yerba3 = new Yerbas (3, "Yerba Rosamonte", 300, "media/rosamonte.webp");
let yerba4 = new Yerbas (4, "Yerba Cachamate", 250, "media/cachamate.jpg");
let yerba5 = new Yerbas (5, "Mate estilo 'camionero'", 5350, "media/camionero.jpg");
let yerba6 = new Yerbas (6, "Mate estilo 'torpedo'", 4450, "media/torpedo.jpg"); 
let yerba7 = new Yerbas (7, "Bombilla de alpaca artesanal", 500, "media/bombilla.jpg");
let yerba8 = new Yerbas (8, "Termo", 2000, "media/termo.jpg");
let yerba9 = new Yerbas (9, "Bolso matero", 3000, "media/bolso.jpg");

// ARRAY CON LOS OBJETOS NUEVOS 

let listaOfertada = [yerba1, yerba2, yerba3, yerba4, yerba5, yerba6, yerba7, yerba8, yerba9];

// ARRAY CARRITO, PARA GUARDAR LOS PRODUCTOS

let carrito =[];

// IMPRIMO LA LISTA DE PRODUCTOS OFERTADOS  

function imprimirOferta()
{
    for (const yerbaItem of listaOfertada)
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