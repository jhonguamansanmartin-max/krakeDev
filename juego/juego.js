let puntosUsuario = 0
let puntosComputador=0

jugar=function(seleccionado){
    let elemento=generarElemento();
    generarRuta(elemento)

    let resultado=determinarGanador(elemento,seleccionado)
    if(resultado==0){
        mostrarTexto("lblempate", "Empate")
        alert("Empate")
         limpiar()
    }else if(resultado==1){
        mostrarTexto("lblUser" , puntosUsuario);
        puntosUsuario=puntosUsuario +1 ;

        if(puntosUsuario==6){
            alert("Has Ganado la partida")
            limpiar()
        }
    }else if(resultado==2){
       
        puntosComputador=puntosComputador +1 ;
        mostrarTexto("lblcomputado",puntosComputador);
        if(puntosComputador==6){
            alert("GANO COMPUTADOR ")
            limpiar()
        }
    }
 

}
limpiar=function(){
    mostrarTexto("lblUser" ,"0")
        mostrarTexto("lblcomputado","0")
         mostrarTexto("lblempate","0")
            
     mostrarImagen("./imagenes/piedra.jpg" , "")
        mostrarImagen("./imagenes/papel.jpg", "")
             mostrarImagen("./imagenes/tijeras.jpg","")


}