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

// SEGUNDO ARRAY, PARA EL CARRITO DE COMPRAS 

let carrito =[];

// FUNCION PARA MOSTRAR AL USUARIO SI DESEA COMPRAR YERBA U OTROS PRODUCTOS

function elegirPantalla ()
{
    let pantalla = parseInt(prompt (`Elija la pantalla que desee:\n"1" si desea ver nuestras yerbas mates;\n"2", para conocer nuestros productos materos,\n"0" para finalizar.`));

    while (pantalla !==0 && pantalla !== 1 && pantalla !==2)
    {
        alert(`Ha ingresado un código incorrecto/inexistente. Vuelva a ingresar, por favor.`);
        pantalla = parseInt(prompt (`Elija la pantalla que desee:\n"1" si desea ver nuestras yerbas mates;\n"2", para conocer nuestros productos materos,\n"0" para finalizar.`));
    }

    switch (pantalla)
    {
        case 1: 
            mostrarListaYerbas();
            break;
        case 2: 
            mostrarListaProductos();
            break;
        case 0:
            finalizarPrograma();
    }
}

// FUNCION PARA MOSTRAR LAS YERBAS DISPONIBLES

function mostrarListaYerbas ()
{
    paqueteDeYerba = document.getElementsByClassName ("paqueteDeYerba");
    let opciones = parseInt(prompt(`Ha elegido yerbas mates. Seleccione el código correspondiente: \n`+
    "1: " + paqueteDeYerba[0].innerHTML + "\n"+
    "2: " + paqueteDeYerba[1].innerHTML + "\n"+
    "3: " + paqueteDeYerba[2].innerHTML + "\n"+
    "4: " + paqueteDeYerba[3].innerHTML + "\n"+
    "0: para finalizar su compra.\n"+
    "10: para ir a la lista de productos materos"
    ));

    let opc = opciones;

    if (opc==0)
    {
        confirmarCompra()
    }

    else 
    {   
        switch(opc)
        {
            case 1:
                alert (`Agregaste ` + listaOfertada[0].nombre  + ` al carrito.`);
                agregarCompra(listaOfertada[0]);
            break;
            case 2:
                alert (`Agregaste ` + listaOfertada[1].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[1]);
            break;
            case 3:
                alert (`Agregaste ` + listaOfertada[2].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[2]);
            break;
            case 4:
                alert (`Agregaste ` + listaOfertada[3].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[3]);
            break;
            case 10:
                mostrarListaProductos();
            default:
                alert (`Ha ingresado un código incorrecto/inexistente. Vuelva a ingresar, por favor.`)
                break;
        }
        opciones = mostrarListaYerbas()
    }
}


// FUNCION PARA MOSTRAR LOS PRODUCTOS MATEROS DISPONIBLES

function mostrarListaProductos()
{
    equipoMatero = document.getElementsByClassName ("equipoMatero");
    let opciones = parseInt(prompt(`Ha elegido nuestros productos materos. Seleccione el código correspondiente: \n`+
    "5: "+ equipoMatero[0].innerHTML+"\n"+
    "6: "+ equipoMatero[1].innerHTML+"\n"+
    "7: "+ equipoMatero[2].innerHTML+"\n"+
    "8: "+ equipoMatero[3].innerHTML+"\n"+
    "9: "+ equipoMatero[4].innerHTML+"\n"+
    "0: para finalizar su compra.\n"+
    "10: para ir a la lista de yerbas mates"
    ));

    let opc = opciones;

    if (opc==0)
    {
        confirmarCompra()
    }

    else 
    {
        switch(opc)
        {
            case 5:
                alert (`Agregaste ` + listaOfertada[4].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[4]);
                break;
            case 6:
                alert (`Agregaste ` + listaOfertada[5].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[5]);
                break;
            case 7:
                alert (`Agregaste ` + listaOfertada[6].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[6]);
                break;
            case 8:
                alert (`Agregaste ` + listaOfertada[7].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[7]);
                break;
            case 9:
                alert (`Agregaste ` + listaOfertada[8].nombre+ ` al carrito.`);
                agregarCompra(listaOfertada[8]);
                break;
            case 10: 
                mostrarListaYerbas();
            default:
                alert (`Ha ingresado un código incorrecto/inexistente. Vuelva a ingresar, por favor.`)
                break;
        }
        opciones = mostrarListaProductos()
    }
}

function agregarCompra (Yerbas)
{
    carrito.push(Yerbas);
}

// PARA QUE EL USUARIO VEA LA COMPRA REALIZADA

function informarCompra ()
{
    let lista = "";
    for (nombre of carrito)
    {
        lista = lista + "\n"+ nombre.nombre; + "\n";
    }
    return  lista;
}

function informarPrecio ()
{
    let listaPrecio = 0;
    for (precio of carrito)
    {
        listaPrecio =  listaPrecio + precio.precio;
    }

    return listaPrecio;
}

function confirmarCompra ()
{
    alert ("Tu compra es:" + informarCompra() +"\nMonto total: $ "+ informarPrecio()+`\nPulse "Aceptar" para confirmar su compra.`);
    finalizarPrograma();
}

function finalizarPrograma(){
    alert(`Su compra ha finalizado. ¡Muchas gracias por elegirnos!`);
}

// INICIO EL PROGRAMA

elegirPantalla();

// DOM AGREGA ELEMENTOS


let carritoCreado = document.getElementById("carrito");

let ul = document.createElement("ul");

for (i=0; i < carrito.length; i++)
{
    let li = document.createElement ("li");
    li.innerHTML = carrito[i].nombre;
    ul.appendChild(li);
}

carritoCreado.appendChild(ul);

let precioFinal = document.createElement("p");

precioFinal.innerHTML = `Su compra es de: $ ${informarPrecio()}`;

carritoCreado.appendChild(precioFinal);






