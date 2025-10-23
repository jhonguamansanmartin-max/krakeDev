validarPlaca=function(){
    let valorPlaca=recuperarTexto("txtplaca")
    let erroresEstructura=validarEstructrura(valorPlaca)
    if(erroresEstructura==null){
       valorPlaca= mostrartexto("VALIDACINRTA", "estructurav Valida")
    }else{
        mostrartexto("erroresRTA Incorrecta" , "" )
        return erroresEstructura
    }
}
limpiar=function(){
        mostrarTextoEnCaja("txtplaca","")
}
