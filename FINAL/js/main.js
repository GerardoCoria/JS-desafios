// Declaro las variables globales a utilizar
let linkJson = "https://raw.githubusercontent.com/GerardoCoria/JS-desafios/main/FINAL/js/datos.json";
let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')); 
let contador=0;
let carritoAux={};
let productoItem = {};
let contadorPrecioTotal=0;

// Función para mostrar carrito, por si la página se recarga accidentalmente
function mostrarCarritoRecuperado()
{
    // Recupero la lista de productos del carrito
    Object.values(carritoRecuperado).forEach(productoItem =>{
    carritoAux[productoItem.id] = {...productoItem};
    // Imprimo el carrito recuperado
    $("#tablaCarrito").text("");
    Object.values(carritoAux).forEach(productoItem =>{
        $("#tablaCarrito").append(`
        <tr>")
            <td>${productoItem.nombre}</td>
            <td>${productoItem.cantidad}</td>
            <td>$${productoItem.precio}</td>
            <td>$${productoItem.precio * productoItem.cantidad}</td>
        </tr>`);
        });
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
                    // Datos que vienen del archivo Json
                    `<div id="yerbaCard">
                    <h3 id="nombre">${yerbaItem.nombre}</h3>
                    <p id="precio" class="fondoGris">Precio: <strong class="fondoGris">$${yerbaItem.precio}</strong></p>
                    <img src=${yerbaItem.imagen}>
                    <span class="fondoGris">Elija la cantidad:</span>
                    <section id="divSumarRestar" class="fondoGris">
                    <button id="restar${yerbaItem.id}" class="btnResta">-</button>
                    <span class="selector${yerbaItem.id} btnNumero">1</span>
                    <button id="sumar${yerbaItem.id}" class="btnSuma">+</button>
                    </section>
                    <button id="btn${yerbaItem.id}" class="btnAgregar">Agregar al carrito</button>
                    </div>`);

                    //Botón para comprar              
                    $(`#btn${yerbaItem.id}`).on("click", function () 
                    {
                        // Capto la cantidad que seleccionó el cliente
                        $(`.selector${yerbaItem.id}`).text(`${yerbaItem.cantidad}`);
                        // Muestro un mensaje de confirmación, antes de que el cliente agregue el producto
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
                        //En caso de que el producto ya esté en el carrito, sólo se agrega la cantidad indicada
                        if(carritoAux.hasOwnProperty(yerbaItem.id))
                        {
                            productoItem.cantidad = carritoAux[yerbaItem.id].cantidad+yerbaItem.cantidad;
                        }
                        //En caso de que el producto NO esté, se agrega el item al carrito
                        carritoAux[productoItem.id] = {...productoItem};
                        console.log(carritoAux);
                        //Agrego el carrito con la actualización al DOM, en la lista desplegrable
                        $("#tablaCarrito").text("");
                        Object.values(carritoAux).forEach(productoItem =>{
                            $("#tablaCarrito").append(`
                            <tr>")
                                <td>${productoItem.nombre}</td>
                                <td>${productoItem.cantidad}</td>
                                <td>$${productoItem.precio}</td>
                                <td>$${productoItem.precio * productoItem.cantidad}</td>
                            </tr>`);
                        });
                        // Actualizo la suma total del precio del carrito
                        sumarTotal();
                        // Guardo información en Storage
                        localStorage.setItem('carrito', JSON.stringify(carritoAux));
                        // Actualizo el contador del carrito
                        contadorCarrito();
                    })   
                    
                    // Botón para aumentar cantidad del item
                    $(`#sumar${yerbaItem.id}`).on("click", function()
                    {
                        if (yerbaItem.cantidad>9)
                        {
                            return false;
                        }
                        else 
                        {
                            yerbaItem.cantidad++;
                            parseInt($(`.selector${yerbaItem.id}`).val(yerbaItem.cantidad));
                            console.log(yerbaItem.cantidad);
                            $(`.selector${yerbaItem.id}`).text(`${yerbaItem.cantidad}`);
                        }        
                    });
                    // Botón para disminuir cantidad del item
                    $(`#restar${yerbaItem.id}`).on("click", function()
                    {
                        if (yerbaItem.cantidad<2)
                        {
                            return false;
                        }
                        else
                        {
                            yerbaItem.cantidad--;
                            parseInt($(`.selector${yerbaItem.id}`).val(yerbaItem.cantidad));
                            console.log(yerbaItem.cantidad);
                            $(`.selector${yerbaItem.id}`).text(`${yerbaItem.cantidad}`);
                        }
                    });
            }
        }
    })
};

// Botón para ver u ocultar el carrito 
$("#btnCarrito").click(function()
{
    $("#listaCarrito").toggle(2000);
})

// Actualizar el contador del carrito
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
        // Si el carrito está vacío, no podrá seguir a la página siguiente
        if (contador==0)
        {
            alert(`Su carrito está vacío!`);
            return false;
        }
        // Si el carrito tiene al menos un producto, puede avanzar a la página de pagos
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
        // Borro los items del carrito
        carritoAux = {};
        $("#tablaCarrito").text("");
        // Reseteo el contador
        contadorCarrito();
        // Reseteo el precio total a 0
        sumarTotal();
        $("#totalCompra").text(`Total: $${contadorPrecioTotal}`)
        // Reseteo el localStorage
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