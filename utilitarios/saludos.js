recuperartexto=function(idComponente){
    let Componente
    let valoringresado
    Componente=document.getElementById(idComponente);
    valoringresado=Componente.value
    return valoringresado

}
saludar=function(){
    //recuperar el valor de la caja de texto 
    let nombre=recuperartexto("txtnombre");
    //recuperar el valor de la caja apellido 
    let apellido=recuperartexto("apellido");

   let edad=recuperarint("txtedad");

   let estatura=recuperarfloat("txtestatura");

   let mensajebienvenida="Bienvenido" +nombre+ "" +apellido;
    mostrartexto("lblresultado",mensajebienvenida)

}
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