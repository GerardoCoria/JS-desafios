
class Yerbas
{
    constructor (id, nombre, precio)
    {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let yerba1 = new Yerbas (1, "Taragüi", "$ 350");
let yerba2 = new Yerbas (2, "La Merced", "$ 450");
let yerba3 = new Yerbas (3, "Rosamonte", "$ 300");
let yerba4 = new Yerbas (4, "Cachamate", "$ 250");

let listaOfertada = [yerba1, yerba2, yerba3, yerba4];

let carrito =[];


function codigosParaElegir ()
{
    let opciones = parseInt(prompt(`Seleccione el código correspondiente:
    "1" Taragüi, 
    "2" La Merced,
    "3" Rosamonte, 
    "4" Cachamate, 
    "0" para finalizar.`));
    return opciones;
}

function elegirYcomprar ()
{
    let opciones = codigosParaElegir();

    while (opciones !== 0)
    {

        switch(opciones)
        {
            case 1:
                alert (`Agregaste ` + listaOfertada[0].nombre + ` al carrito.`);
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
            case 0:
                break;
            default:
                alert(`Ha ingresado un código incorrecto/inexistente. Vuelva a ingresar, por favor.`);
            break;

        }
        opciones = codigosParaElegir();
    }
}

function agregarCompra (Yerbas)
{
    carrito.push(Yerbas);
}

function confirmarCompra ()
{
    let lista = "";
    for (nombre of carrito)
    {
       lista = lista + "\n Yerba: "+ nombre.nombre; + "\n";
    }

    return  lista;
}


elegirYcomprar();

alert ("Tu compra es:" + confirmarCompra() + `\n Pulse "Aceptar" para confirmar su compra.`);

alert(`Su compra ha finalizado. ¡Muchas gracias por elegirnos!`);

