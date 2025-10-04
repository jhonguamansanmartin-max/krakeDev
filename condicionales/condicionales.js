calcularTasaInteres=function(ingresoAnual){
    let ingresos=ingresoAnual;
    let tasa;
    if(ingresos<300000){
        tasa=16;
         }else if(ingresos>=300000 && ingresos<500000){
        tasa=15
         }else if(ingresos>=500000 && ingresos<100000){
        tasa=14
         }else if(ingresos>=100000 && ingresos<200000){
        tasa=13
         }else if(ingresos>=200000){
        tasa=12
    }

    return tasa 
}
calcularCapacidadPago=function(edad,ingresos,egresos){
        let calcular;
        let resultado;
        calcular=egresos-ingresos;
            if(edad>50){
                resultado=calcular*0.3
            }else if(edad<=50){
                resultado=calcular*0.4
            }
    return resultado

}
calcularDescuento=function(precio,cantidad){
    let producto=cantidad;
     if(producto<3){
        precio
     }else if(producto>=3 && producto>=5){
        precio*0.02
     }else if(producto>=6 && producto>=11){
        precio*0.03
     }else if(producto>=12){
        precio*0.04
     }
     return precio

}
determinarColesterolLDL=function(nivelColesterol){
    let colesterol
  if(nivelColesterol<100){
   colesterol="es optimo";
  }else if(nivelColesterol>100 && nivelColesterol<129){
   colesterol="casi optimo";
   }else if(nivelColesterol>=130 && nivelColesterol<=159){
   colesterol="Limite alto ";
   }else if(nivelColesterol>=160 && nivelColesterol<189){
   colesterol="alto";
   }else if(nivelColesterol>=190){
   colesterol="Muy Alto"
   }else{
      return "Dato Incorrecto"
  }

}
ValidarClave=function(clave){
   let claveResultado=clave.length
   let validar
   
   if(claveResultado>=8 && claveResultado<=16){
     validar=true;
   }else{
      validar=false;
   }   
   return validar;
}
esMayuscula=function(caracter){
   let resultado=false;

 let codigo = caracter.charCodeAt(0);
 if(codigo >= 65 && codigo <= 90);
   resultado=true;
   
   
   return resultado;
}

esMinuscula=function(caracter){
   let resultado=false;

    let codigo = caracter.charCodeAt(0);
    if (codigo >= 97 && codigo <= 122){
      resultado=true;
    }
    return false
}

esDigito=function(caracter){
   let resultado=false;
    let codigo = caracter.charCodeAt(0);
    if(codigo >= 48 && codigo <= 57){
      resultado=true;
    }
    return resultado;
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
   let resultado=false
   if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
      resultado=true;
   }
   return resultado
   
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
   let resultado=false
    if(notaMatematica > 90 || notaFisica > 90 && notaGeometria > 80){
      resultado=true;
    

    }
    return resultado
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let resultado=false
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
      resultado=true
    }
    return resultado
}
