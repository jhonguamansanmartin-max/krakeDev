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
    let apellido=recuperartexto("apellido")
}
