esMayuscula = function (caracter) {
    console.log(caracter)
    let estado = false
    let Mayuscula = caracter.charCodeAt(0)
    if (Mayuscula >= 65 && Mayuscula <= 90) {
        estado = true
    } else {
        estado = false
    }
    return estado
}
esDigito = function (caracter) {
    let digito = caracter.charCodeAt(0)
    if (digito >= 48 && digito <= 57) {
        return true;
    } else {
        return false;
    }

}
esGuion = function (caracter) {
    let guion = caracter.charCodeAt(0)
    if (guion == 45) {
        return true
    } else {
        return false
    }
}
