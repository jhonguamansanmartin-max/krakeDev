jugar=function(){
    let Valer
   Valer=lanzarDado();
   cambiarTexto("lblNumero",Valer);
   if(Valer>3){
    console.log("Es mayor a 3")
    console.log("Ganaste")
   }else{
    console.log("Es menor a 3")
    console.log("Perdiste")

   }

}
//Crear una funcion llamada lansar dado 
//no recibe parametros 
//retorna un numero aleatorio entre 1 y 6 

lanzarDado=function(){
    let numeroMultiplicado;
    let aleatorio;
    let numEntero;
    let ValorDado;
    aleatorio=Math.random(); //o y 1
    numeroMultiplicado=aleatorio*6;
    //console.log(numeroMultiplicado);
    numEntero=parseInt(numeroMultiplicado);// entre 0 y 5
    //console.log("------>" +numEntero)
    ValorDado=numEntero+1 //0 a  6
    //console.log("----------------->"+ValorDado)
    return ValorDado;

}