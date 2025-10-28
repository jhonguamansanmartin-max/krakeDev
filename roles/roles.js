let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo: " $ " + 500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:" $ "+ 900.0},
    {cedula:"45556897465",nombre:"Pedro",apellido:"larrea",sueldo:" $ " + 450.0}
]
let esNuevo=false

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
      habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
         habilitarComponente("txtSueldo");
              habilitarComponente("btnGuardar")
    esNuevo = true;
}
// basico 
mostrarOpcionEmpleado=function(){
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
mostrarOpcionRol=function(){
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
}
mostrarEmpleado=function(){
    let elemntoTabla = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Apellido</th>"+
        "<th>Sueldo</th>"+
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
    elemntoTabla.innerHTML= contenidoTabla ;
}