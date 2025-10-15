
saludar=function(){
    //recuperar el valor de la caja de texto 
    let nombre=recuperartexto("txtnombre");
    //recuperar el valor de la caja apellido 
    let apellido=recuperartexto("apellido");

   let edad=recuperarint("txtedad");

   let estatura=recuperarfloat("txtestatura");

   let mensajebienvenida="Bienvenido : " + nombre + " " + apellido;

    mostrartexto("lblresultado",mensajebienvenida)

   mostrarimagen("imagen","./imagen/saludar.gif")

   mostrarTextoEnCaja("txtnombre","")
}

mostrartexto=function(idComponente,mensaje){
    let Componente;
    Componente=document.getElementById(idComponente)
    Componente.innerText=mensaje;

}