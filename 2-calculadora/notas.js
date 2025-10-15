calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("error")
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("error");
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("error")
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);

            }
        }
    }

    nota3 = recuperarFloat("txtNota3");
    resultado = calcularPromedio(nota1, nota2, nota3);
    resultadoFormato = resultado.toFixed(2);
    mostrarTexto("lblResultado", resultadoFormato);
}

calcular= function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false

    nota1 = recuperarFloat("txtNota1");
            esnotavalida(nota1, "lblError1")

    nota2 = recuperarFloat("txtNota2");
             esnotavalida(nota2, "lblError2")

    nota3 = recuperarFloat("txtNota3");
            esnotavalida(nota3, "lblError3")

    if( esnotavalida(nota1, "lblError1") && esnotavalida(nota2, "lblError2") &&  esnotavalida(nota3, "lblError3") ){
         resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }else{
        mostrarTexto("lblResultado" , "0.0")
    }
   
}
 esnotavalida=function(nota,idcomponenteError){
    
    if (isNaN(nota)) {
        mostrarTexto(idcomponenteError, "Debe ingresar un numero")
        existeError = true;
        return false;
    } else {
        mostrarTexto(idcomponenteError, "")
        return true;
    }

 }


