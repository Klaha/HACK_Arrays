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

function hack_push(elemento, arreglo)
{
  arreglo[arreglo.length] = elemento;
  return arreglo;
}

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