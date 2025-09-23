saludar=function(){
    let nombre= recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
   let resultado=generarSaludo(nombre , apellido);
   // return generarSaludo;
  // console.log(resultado);
   cambiarTexto("lblResultado",resultado);
}