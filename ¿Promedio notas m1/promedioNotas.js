calcularPromedioNotas=function(){
    let notauno ;
    let notados ;
    let notatres;
    let promedio;
    let mensaje;
    

    notauno=recuperarFlotante("nota1");
     notados=recuperarFlotante("nota2");
      notatres=recuperarFlotante("nota3");

    promedio=calcularPromedio(notauno,notados,notatres);

    mensaje= "Tu promedio final es : " +promedio.toFixed(2);
    
    cambiarTexto("prom", promedio.toFixed(2) );

  if(promedio<5 && promedio>0){
    cambiarTexto("prom" ,mensaje+ " Reprobado");
    cambiarImagen("img","fracaso.gif" );
   }else if(promedio>=5 && promedio<=8) {
    cambiarImagen("img", "buen.gif");
    cambiarTexto("prom" ,mensaje +" Buen trabajo")  ;
    }else if(promedio>8 && promedio<=10) {
    cambiarImagen("img", "exito.gif");
    cambiarTexto("prom" ,mensaje +" Exelente");
    }else{
     cambiarImagen("img", "algo.gif");
     cambiarTexto("prom" ,mensaje +" Datos Incorrectos");
  }



    
}
