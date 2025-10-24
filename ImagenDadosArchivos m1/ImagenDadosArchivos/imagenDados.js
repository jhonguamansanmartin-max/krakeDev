let puntos;
puntos=0;
let lanzamientos;
lanzamientos=5;




jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
   mostrarCara(resultado);
   modificarpuntos(resultado);
   modificarlanzamientos(resultado);
 

}

modificarpuntos=function(numero){
    puntos=puntos+numero

    cambiarTexto("lblPuntos",puntos);
    if(puntos>20){
        cambiarTexto("lblMensaje","ganaste")
        limpiar()
    }
    //si el jugador obtiene mas de 20 puntos mostrar un mensaje de ganaste 

}
//no recibe parametros 
//retsa uno a ala variable lanzamiento,guarda el resultado en la misma variable
modificarlanzamientos=function(){
    lanzamientos=lanzamientos-1
    cambiarTexto("lbllanzamientos",lanzamientos)
    if(lanzamientos<1){
        cambiarTexto("lblMensaje","GAME OVER ")
        limpiar()
    }
}

limpiar=function(){
    //si lanzamientos llega a 0
    //mostrar en pantalla el mensaje game over 
    //luego invoca a limpiar 
    //quitar la imagen ""
  cambiarTexto("lblPuntos","0")
  cambiarTexto("lbllanzamientos","5")
  cambiarImagen("imgDados","")

    
}
//funcion  mostar cara recibe el numero que quiero mostrar 
//muestra la imagen correspondiente al numero que recibe
//no retorna nada 
mostrarCara=function(numero){
    if(numero==1){//con doble igual se compara, mientras que con un solo igual se asigna
        cambiarImagen("imgDados","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDados","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDados","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDados","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDados","dados5.png")
    }else if(numero==6){
        cambiarImagen("imgDados","dados6.png")
   

    }
    
    

}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    }