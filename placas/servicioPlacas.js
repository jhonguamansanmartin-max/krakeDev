validarEstructrura=function(placa){
    let errores="";
    let sinErrores=true;
    let longitud=placa.length;
    if(longitud==7 || longitud ==8 ){   
        
    }else{
        errores = errores + "La placa debe tener 7 u 8 carecteres"
        sinErrores= false;
    }


   //cambiar con utilitarios
    if(esMayuscula(placa[0])==false){  
        console.log(placa[0])
        errores = errores + "La primera letra debe ser mayuscula"
        sinErrores=false
    } 
    if(esMayuscula(placa[1]==false)){
        errores = errores + "La segunda letra debe ser mayuscula"
        sinErrores=false
    }

   
    if(esMayuscula(placa[2])==false){
        errores = errores + "la tercera letra debe ser mayuscula"
        sinErrores=false
    }

    
    if(esGuion(placa[3]==false)){
        errores = errores + "El tercer caracter debe ser un guion"
        sinErrores=false
    }
    
    if(esDigito(placa[4]==false)){
        errores = errores + "El quinto caracter debe ser un digoto"
        sinErrores=false
    }
    
    if(esDigito(placa[5]==false)){
        errores = errores + "el sextp caracter debe ser un digito"
        sinErrores=false 
    }
    
    if(esDigito(placa[6]==false)){
        errores = errores + "el septimo caracter es un debe ser un digito"
        sinErrores=false
    }
    if (sinErrores==true){
         return null
    } else {
    return errores
    }
       
}
