recuperarint=function(idComponente){
    let valorcaja=recuperartexto(idComponente);
    let valorentero=parseInt(valorcaja);
    return valorentero;

}
recuperarfloat=function(idComponente){
    let valorcaja= recuperartexto(idComponente);
    let valorflotante= parseFloat(valorcaja);
    return valorflotante;

}
mostrartexto=function(idComponente,mensaje){
    let Componente=document.getElementById(idComponente);
    Componente.innerText = mensaje;
    
}

mostrarimagen=function(idComponente,rutaimagen){
    let imagen=document.getElementById(idComponente)
    imagen.src = rutaimagen
}

mostrarTextoEnCaja=function(idComponente,mensaje){
     let Componente=document.getElementById(idComponente);
    Componente.value = mensaje;
}
recuperartexto=function(idComponente){
    let Componente
    let valoringresado
    Componente=document.getElementById(idComponente);
    valoringresado=Componente.value
    return valoringresado

}