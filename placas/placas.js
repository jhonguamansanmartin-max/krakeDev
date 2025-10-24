validarPlaca = function () {

    let valorPlaca = recuperarTexto("txtplaca")
    let erroresEstructura = validarEstructrura(valorPlaca)
    console.log(erroresEstructura)
    if (erroresEstructura == null) {
        mostrarTexto("validacion", "estructura Valida")
        mostrarTexto("erroresRTA", "")
    } else {
       
        mostrarTexto("erroresRTA", erroresEstructura)

        return erroresEstructura
    }
    let provincia = obtenerProvincia(valorPlaca)
    if (provincia != null) {
        mostrarTexto("lblProvincia", provincia)
    } else {
        mostrarTexto("provincia", "")
        return null
    }
    let tipoDeVehiculo = obtenerTipoVehiculo(valorPlaca)
    if (tipoDeVehiculo != null) {
        mostrarTexto("lblTipoDeVehiculo", tipoDeVehiculo)
    } else {
        mostrarTexto("lblTipoDeVehiculo", "vehiculo incorrecto")
    }

    let diaPicoYPlaca = obtenerDiaPícoYPlaca(valorPlaca)
    mostrarTexto("lblPicoYPlaca", diaPicoYPlaca)

}
limpiar = function () {
    mostrarTextoEnCaja("txtplaca", "")
}
