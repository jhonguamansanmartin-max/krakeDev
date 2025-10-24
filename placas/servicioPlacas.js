validarEstructrura = function (placa) {
    let errores = "";
    let sinErrores = true;
    let longitud = placa.length;
    if (longitud == 7 || longitud == 8) {

    } else {
        errores = errores + "La placa debe tener 7 u 8 carecteres"
        sinErrores = false;
    }


    //cambiar con utilitarios
    if (esMayuscula(placa[0]) == false) {
        console.log(placa[0])
        errores = errores + "La primera letra debe ser mayuscula"
        sinErrores = false
    }
    if (esMayuscula(placa[1]) == false) {
        errores = errores + "La segunda letra debe ser mayuscula"
        sinErrores = false
    }


    if (esMayuscula(placa[2]) == false) {
        errores = errores + "la tercera letra debe ser mayuscula"
        sinErrores = false
    }


    if (esGuion(placa[3]) == false) {
        errores = errores + "El tercer caracter debe ser un guion"
        sinErrores = false
    }

    if (esDigito(placa[4]) == false) {
        errores = errores + "El quinto caracter debe ser un digoto"
        sinErrores = false
    }

    if (esDigito(placa[5]) == false) {
        errores = errores + "el sextp caracter debe ser un digito"
        sinErrores = false
    }

    if (esDigito(placa[6]) == false) {
        errores = errores + "el septimo caracter es un debe ser un digito"
        sinErrores = false
    }
    if (sinErrores == true) {
        return null
    } else {
        return errores
    }

}
obtenerProvincia = function (placa) {
    let primera = placa.charAt(0)


    if (primera == "A") {
        return "Azuay";
    }
    if (primera == "B") {
        return "Bolivar"
    }
    if (primera == "U") {
        return "Cañar";
    }
    if (primera == "C") {
        return "Carchi";
    }
    if (primera == "X") {
        return "Cotopaxi";
    }
    if (primera == "H") {
        return "Chimborazo";
    }
    if (primera == "O") {
        return "El Oro";
    }
    if (primera == "E") {
        return "Esmeraldas";
    }
    if (primera == "W") {
        return "Galapagos";
    }
    if (primera == "G") {
        return "Guayas";
    }
    if (primera == "I") {
        return "Imbabura";
    }
    if (primera == "L") {
        return "Loja";
    }
    if (primera == "R") {
        return "Los Rios";
    }
    if (primera == "M") {
        return "Manabi";
    }
    if (primera == "V") {
        return "Morona Santiago";
    }
    if (primera == "N") {
        return "Napo";
    }
    if (primera == "S") {
        return "Pastaza";
    }
    if (primera == "P") {
        return "Pichincha";
    }
    if (primera == "K") {
        return "Sucumbios";
    }
    if (primera == "Q") {
        return "Orellana";
    }
    if (primera == "T") {
        return "Tungurahua";
    }
    if (primera == "Z") {
        return "Zamora Chinchipe";
    }
    if (primera == "Y") {
        return "Santa Elena";
    } else {
        return null
    }

}
obtenerTipoVehiculo = function (placa) {
    let segunda = placa.charAt(1)

    if (segunda == "A" || segunda == "Z") {
        return "Vehiculo Comercial"
    }
    if (segunda == "E") {
        return "Vehiculo Gubernamental"
    }
    if (segunda == "X") {
        return "Vehiculos de uso oficial"
    }
    if (segunda == "S") {
        return "Vehiculos del gibierno provincial"
    }
    if (segunda == "M") {
        return "Vehiculos Municipales"
    }
    if (segunda != "A" || segunda != "Z" || segunda != "E" || segunda != "X" || segunda != "S" || segunda != "M") {
        return "Vehiculo particular"
    } else {
        return null
    }


}

obtenerDiaPícoYPlaca = function (placa) {
    let ultimoDigito = placa.length - 1
    let ultimoNumero = placa.charAt(ultimoDigito)
    if (ultimoNumero == "1" || ultimoNumero == "2") {
        return "Tiene pico y placa es lunes"
    }
    if (ultimoNumero == "3 " || ultimoNumero == "4") {
        return "Tiene pico y placa es martes"
    }
    if (ultimoNumero == "5" || ultimoNumero == "6") {
        return "Tiene pico y placa es miercoles"
    }
    if (ultimoNumero == "7" || ultimoNumero == "8") {
        return "Tiene pico y placa es jueves"
    }
    if (ultimoNumero == "9" || ultimoNumero == "0") {
        return "Tiene pico y placa es Viernes"
    }
}