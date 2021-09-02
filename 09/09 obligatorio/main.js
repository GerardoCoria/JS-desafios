// CONSTRUCTOR DE OBJETOS
class Yerbas
{
    constructor (id, nombre, precio)
    {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

// NUEVOS OBJETOS A PARTIR DEL ORIGINAL

let yerba1 = new Yerbas (1, "Yerba Taragüi", 350);
let yerba2 = new Yerbas (2, "Yerba La Merced", 450);
let yerba3 = new Yerbas (3, "Yerba Rosamonte", 300);
let yerba4 = new Yerbas (4, "Yerba Cachamate", 250);
let yerba5 = new Yerbas (5, "Mate estilo 'camionero'", 5350);
let yerba6 = new Yerbas (6, "Mate estilo 'torpedo'", 4450); 
let yerba7 = new Yerbas (7, "Bombilla de alpaca artesanal", 500);
let yerba8 = new Yerbas (8, "Termo", 2000);
let yerba9 = new Yerbas (9, "Bolso matero", 3000);

// ARRAY CON LOS OBJETOS NUEVOS 

let listaOfertada = [yerba1, yerba2, yerba3, yerba4, yerba5, yerba6, yerba7, yerba8, yerba9];

// CARRITO

let carrito =[];

// DOM AGREGA ELEMENTOS

function agregarAlDOM ()
{
    let carritoCreado = document.getElementById("carritoDeCompras");

    // PRECIO

    let listaPrecio = 0;
    for (precio of carrito)
    {
        listaPrecio =  listaPrecio + precio.precio;
    }

    carritoCreado.textContent= "";
    let precioFinal = document.createElement("p");
    precioFinal.innerHTML = "Valor de la compra: $"+listaPrecio;
    carritoCreado.appendChild(precioFinal);

     // PRODUCTOS

    let ul = document.createElement("ul");

    for (i=0; i < carrito.length; i++)
     {
        let li = document.createElement ("li");
        li.innerHTML = carrito[i].nombre;
        ul.appendChild(li);
     }
 
    carritoCreado.appendChild(ul);
}

// AGREGAR AL CARRITO POR CADA PRODUCTO

let agregarYerba1 = document.getElementById ("yerba1");
let agregarAlCarrito1 = () => {alert(`Agregaste ${yerba1.nombre} al carrito.`); carrito.push (yerba1)}; 
agregarYerba1.addEventListener("click", agregarAlCarrito1);

let agregarYerba2 = document.getElementById ("yerba2");
let agregarAlCarrito2 = () => {alert(`Agregaste ${yerba2.nombre} al carrito.`); carrito.push (yerba2)}; 
agregarYerba2.addEventListener("click", agregarAlCarrito2);

let agregarYerba3 = document.getElementById ("yerba3");
let agregarAlCarrito3 = () => {alert(`Agregaste ${yerba3.nombre} al carrito.`); carrito.push (yerba3)}; 
agregarYerba3.addEventListener("click", agregarAlCarrito3);

let agregarYerba4 = document.getElementById ("yerba4");
let agregarAlCarrito4 = () => {alert(`Agregaste ${yerba4.nombre} al carrito.`); carrito.push (yerba4)}; 
agregarYerba4.addEventListener("click", agregarAlCarrito4);

let agregarYerba5 = document.getElementById ("yerba5");
let agregarAlCarrito5 = () => {alert(`Agregaste ${yerba5.nombre} al carrito.`); carrito.push (yerba5)}; 
agregarYerba5.addEventListener("click", agregarAlCarrito5);

let agregarYerba6 = document.getElementById ("yerba6");
let agregarAlCarrito6 = () => {alert(`Agregaste ${yerba6.nombre} al carrito.`); carrito.push (yerba6)}; 
agregarYerba6.addEventListener("click", agregarAlCarrito6);

let agregarYerba7 = document.getElementById ("yerba7");
let agregarAlCarrito7 = () => {alert(`Agregaste ${yerba7.nombre} al carrito.`); carrito.push (yerba7)}; 
agregarYerba7.addEventListener("click", agregarAlCarrito7);

let agregarYerba8 = document.getElementById ("yerba8");
let agregarAlCarrito8 = () => {alert(`Agregaste ${yerba8.nombre} al carrito.`); carrito.push (yerba8)}; 
agregarYerba8.addEventListener("click", agregarAlCarrito8);

let agregarYerba9 = document.getElementById ("yerba9");
let agregarAlCarrito9 = () => {alert(`Agregaste ${yerba9.nombre} al carrito.`); carrito.push (yerba9)}; 
agregarYerba9.addEventListener("click", agregarAlCarrito9);


// BOTON PARA MOSTRAR PRODUCTOS EN DOM

let mostrarCarrito = document.getElementById("mostrarCarrito");
mostrarCarrito.addEventListener("click", agregarAlDOM);





