let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: " $ " + 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: " $ " + 900.0 },
    { cedula: "45556897465", nombre: "Pedro", apellido: "larrea", sueldo: " $ " + 450.0 }
]
let esNuevo = false

buscarPorRol=function(){
    let valor=recuperarTexto("txtBusquedaCedulaRol");
    let respuesta= buscarEmpleado(valor);

    if(respuesta != null){
     mostrarTextoEnCaja("infoCedula", respuesta.cedula)
    mostrarTextoEnCaja("txtNombre", respuesta.nombre)
    mostrarTextoEnCaja("infoSueldo", respuesta.sueldo)
    

    }
}













///// funciones empleado 
limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "")
    mostrarTextoEnCaja("txtNombre", "")
    mostrarTextoEnCaja("txtApellido", "")
    mostrarTextoEnCaja("txtSueldo", "")

    esNuevo = false
    deshabilitarCajas()

}

ejecutarBusqueda = function () {
    let ValorCedula = recuperarTexto("txtBusquedaCedula");
    let respuesta = buscarEmpleado(ValorCedula);
    if (respuesta == null) {
        alert("cliente encontrado" + ValorCedula)
    } else {
        mostrarTextoEnCaja("txtCedula", respuesta.cedula)
        mostrarTextoEnCaja("txtNombre", respuesta.nombre)
        mostrarTextoEnCaja("txtApellido", respuesta.apellido)
        mostrarTextoEnCaja("txtSueldo", respuesta.sueldo)

    }
}
guardar = function () {
    let sinErrores = true;
    let errores = "";
    let valorCedula = recuperarTexto("txtCedula")
    let valorNombre = recuperarTexto("txtNombre")
    let valorApellido = recuperarTexto("txtApellido")
    let valorSueldo = recuperarFloat("txtSueldo")
    console.log(valorCedula)
    console.log(valorNombre)
    console.log(valorApellido)
    console.log(valorSueldo)

    //cedula
    if (valorCedula.length != 10) {
        errores += "Deben ser 10 caracteres";
        sinErrores = false

    }
    
    for (i = 0; i < valorCedula.length; i++) {
        if (isNaN(valorCedula[i])) {
            errores += "Todos los caracteres deben ser digitos";
            sinErrores = false;
            break;
        }
    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorCedula", errores)
        errores = "";
    }
    //validacion para nombre
    if (valorNombre.length < 3) {
        errores += "Debe ingresar al menos tres caracteres. ";
        sinErrores = false;
    }
    for (let i = 0; i < valorNombre.length; i++) {
        if (valorNombre.charCodeAt(i) < 65 || valorNombre.charCodeAt(i) > 90) {
            errores += "El nombre debe estar en mayusculas. "
            sinErrores = false;
            break;
        }
    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorNombre", errores);
        errores = ""
    }

    //validacion para apellido
    if (valorApellido.length < 3) {
        errores += "Debe ingresar al menos tres caracteres. ";
        sinErrores = false;
    }
    for (let i = 0; i < valorApellido.length; i++) {
        if (valorApellido.charCodeAt(i) < 65 || valorApellido.charCodeAt(i) > 90) {
            errores += "El apellido debe estar en mayusculas. ";
            sinErrores = false;
            break;
        }
    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorApellido", errores);
        errores = ""
    }

    //validacion para sueldo
    if (isNaN(valorSueldo) || valorSueldo == "") {
        sinErrores = false;
        errores += "*CAMPO OBLIGATORIO";
    }
    if (valorSueldo <= 400 || valorSueldo >= 5000 && isNaN(valorSueldo)) {
        sinErrores = false;
        errores += "La cantidad debe oscilar entre los 400 y 5000 dolares.";

    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorSueldo", errores);
        errores = "";
    }
    //validacion para campo obligatorio
    if (valorCedula == "") {
        sinErrores = false;
        mostrarTexto("lblErrorCedula", "*CAMPO OBLIGATORIO");
    }
    if (valorNombre == "") {
        sinErrores = false;
        mostrarTexto("lblErrorNombre", "*CAMPO OBLIGATORIO");
    }
    if (valorApellido == "") {
        sinErrores = false;
        mostrarTexto("lblErrorApellido", "*CAMPO OBLIGATORIO");
    }
    if (sinErrores == true) {
        let empleado = {};
        empleado.cedula = valorCedula;
        empleado.nombre = valorNombre;
        empleado.apellido = valorApellido;
        empleado.sueldo = valorSueldo;
        if (esNuevo == true) {
            let nuevoEmpleado = agregarEmpleado(empleado);
            if (nuevoEmpleado) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleado();
                deshabilitarCajas();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + valorCedula);
            }
        } else if (esNuevo == false) {
            let empleadoModificado = buscarEmpleado(empleado.cedula);
            empleadoModificado.nombre = valorNombre;
            empleadoModificado.apellido = valorApellido;
            empleadoModificado.sueldo = valorSueldo;

            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleado();
            deshabilitarCajas();
        }
    }
}

deshabilitarCajas = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}






// agragar y buscar empleado
agregarEmpleado = function (empleado) {
    let agregado
    agregado = buscarEmpleado(empleado.cedula);
    if (agregado == null) {
        empleados.push(empleado)
        return true
    } else {
        alert("cliente ya existe " + empleado.cedula)
        return false
    }
}

buscarEmpleado = function (cedula) {
    let bsEmp;
    let EmpleadoEncontrado = null;
    for (i = 0; i < empleados.length; i++) {
        bsEmp = empleados[i]
        if (bsEmp.cedula == cedula) {
            EmpleadoEncontrado = bsEmp
            break;
        }
    }
    return EmpleadoEncontrado
}

//funcion de la pagina habilita y deshabilita
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar")
    esNuevo = true;
}
// basico 
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol")
    ocultarComponente("divResumen")

    mostrarEmpleado()

    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")
    deshabilitarComponente("btnGuardar")
}
mostrarOpcionRol = function () {
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
}
mostrarEmpleado = function () {
    let elemntoTabla = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Apellido</th>" +
        "<th>Sueldo</th>" +
        "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    elemntoTabla.innerHTML = contenidoTabla;
}