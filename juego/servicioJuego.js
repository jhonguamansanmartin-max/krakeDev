

obtenerAleatorio = function () {
    let aleatorio = Math.random();
    let aleatorioMultiplicado = aleatorio * 3;
    let aleatorioEntero = parseInt(aleatorioMultiplicado);
    let numeroJuego = aleatorioEntero + 1;
    return numeroJuego
}

generarElemento = function () {
    let juego = obtenerAleatorio()
    if (juego == 1) {
        return "piedra"
    }
    if (juego == 2) {
        return "papel"
    }
    if (juego == 3) {
        return "tijera"
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0;
    }
    if ((eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
        (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
        (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")) {
        return 1; //gana jugador uno 
    } else {
        return 2; //gana jugador dos 
    }

}

generarRuta = function (nombre) {
    return "./imagenes/" + nombre + ".jpg"
    
    
}