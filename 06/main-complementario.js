//ORDENA CERVEZAS POR PRECIO O POR NOMBRE 

var cervezas = [
    { nombre: 'IPA', precio: 180 },
    { nombre: 'Barley Wine', precio: 200 },
    { nombre: 'Stout', precio: 225 },
    { nombre: 'Honey', precio: 170 },
    { nombre: 'Amber Lager', precio: 250 },
    { nombre: 'APA', precio: 210 },
    { nombre: 'Scotish', precio: 200 },
  ];

function ordenarPorPrecio()
{
    cervezas.sort(function (a, b) {
        if (a.precio > b.precio) {
          return 1;
        }
        if (a.precio < b.precio) {
          return -1;
        }
        return 0;
      });
}

function ordenarAlfabeticamente()
{
    cervezas.sort(function (a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });}

function mostrar()
{
    let lista = "";
    for (nombre of cervezas)
    {
       lista = lista + "Cerveza: "+ nombre.nombre + ". Precio: $ "+nombre.precio + "\n";
    }

    return  lista;
}

let opcion = parseInt(prompt(`Ingrese "1" para ordenarlo por precio; "2" para ordenarlo alfabeticamente`));

while(opcion != 1 && opcion !=2)
{
    alert(`Ha elegido una opción incorrecta`);
    opcion = parseInt(prompt(`Ingrese "1" para ordenarlo por precio; "2" para ordenarlo alfabeticamente`));
}

if (opcion === 1)
{
    ordenarPorPrecio();
    alert ("Está ordenado por precio: \n" + mostrar());
}

else if (opcion === 2)
{
    ordenarAlfabeticamente();
    alert ("Está ordenado alfabeticamente: \n" + mostrar());

}

