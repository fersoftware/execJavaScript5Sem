function Ordenador(x,y)
{
    var retorno;
    if(x == y)
    {
        retorno = 0;
    }
    else if (x < y)
    {
        retorno = -1;
    }
    else if (x > y)
    {
        retorno = x;
    }

    return retorno;
}

function Ordenador2(x,y)
{
    return x-y;
}
