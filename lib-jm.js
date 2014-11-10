// var caja = ["Juan", "Jose", "Jonathan", "Chiabe"];
var i;

function hack_delete(posicion, arreglo)
{
  var nuevaCaja = [];

  for (i = 0; i < arreglo.length; i++)
  {
    if ( i != posicion )
    {
      nuevaCaja.push(arreglo[i]);
    }
  }
  return nuevaCaja;
}

// console.log(hack_delete(2, caja));

function hack_pop(arreglo)
{
  var nuevaCaja2 = [];

  for (i = 0; i < arreglo.length; i++)
  {
    if ( i !== 0 )
    {
      nuevaCaja2.push(arreglo[i]);
    }
  }
  return [arreglo[0], nuevaCaja2];
}

// console.log(hack_pop(caja));

function hack_push(elemento, arreglo)
{
  arreglo[arreglo.length] = elemento;
  return arreglo;
}

// console.log(hack_push("Obama", caja))

function hack_search(elemento, arreglo)
{
  var pos = -1;

  for (i = 0; i < arreglo.length; i++)
  {
    if (arreglo[i] === elemento)
    {
      pos = i;
    }
  }
  return pos;
}

// console.log(hack_search('Jonathan', caja));
// console.log(hack_search('Hack', caja));
