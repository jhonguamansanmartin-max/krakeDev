ejecutarprueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtcadena")
    let mensajenormal = recorrercadena(mensaje)

    mostrarTexto("mensajenormal", mensajenormal)
}
ejecutarprueba2 = function () {
    let mensaje1
    let mostrarIn
    mensaje1 = recuperarTexto("txtcadena")
    mostrarIn = invertirCadena(mensaje1)
    mostrarTexto("MensajeInvertido" , mostrarIn)
}
recorrercadena = function (cadena) {
    //0123
    //juan
    let Caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        Caracter = cadena.charAt(posicion)
        console.log("caracter ; " + Caracter + " posicion ;" + posicion)
    }
    //equivalencia
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        Caracter = cadena.charAt(posicion)
        console.log("CARACTER ; " + Caracter + " POSICION ; " + posicion)
    }

}
invertirCadena = function (cadena) {
    console.log("invertir cadena")
    let caracter;
    let respuesta = ""
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        respuesta= (respuesta + caracter)
    }
    return respuesta
}
 
buscarlketra=function(cadena,letra){
    let letraIterada
    for(let i=0 ; cadena.length;i++)
        letraIterada=cadena.charAt(i)
    if(letraIterada==letra){
       existeLetra=true 
    }
    if(existeLetra=true){
        return true

    }else{
       return false
    }
}