let clientes = [
        { cedula: "123213", nombre: "Jhon", edad: 23 }
        , { cedula: "222222", nombre: "Juan", edad: 32 }
            , { cedula: "3333333", nombre: "Jesus", edad: 21 }
];
//punto 7 
guardarCambios=function(){
      let valorNombre=recuperarTexto("txtNombre");
        let valoredad=recuperarTexto("txEdad");
            let valorCedula=recuperarTexto("txtCedula");

      let datosc1={}
        datosc1.cedula=valorCedula
        datosc1.edad=valoredad
        datosc1.nombre=valorNombre
    modificarCliente(datosc1);

    mostrarClientes()
}
//punto6 
modificarCliente=function(cliente){
    let clencontrado=buscarCliente(cliente.cedula);
    if(clencontrado!=null){
        clencontrado.nombre=cliente.nombre;
        clencontrado.edad=cliente.edad;
    }

}
//punto5 
ejecutarBuscarCliente=function(){
    let valorCedula=recuperarTexto("Bcedula");
    let respuesta=buscarCliente(valorCedula);
    if(respuesta==null){
        alert("cliente no emncontrado " + valorCedula)
    }else{
        mostrarTextoEnCaja("txtCedula", respuesta.cedula);
        mostrarTextoEnCaja("txEdad", respuesta.edad);
        mostrarTextoEnCaja("txtNombre", respuesta.nombre);

    }
}
    

//punto 4 
crearCliente=function(){
    let valorNombre=recuperarTexto("txtNombre");
    let valoredad=recuperarTexto("txEdad");
    let valorCedula=recuperarTexto("txtCedula");

    let nuevoc1={}
        nuevoc1.cedula=valorCedula
        nuevoc1.edad=valoredad
        nuevoc1.nombre=valorNombre

    agregarcliente(nuevoc1);
}
//punto 3
agregarcliente=function(cliente){
    let resultado ;
    resultado=buscarCliente(cliente.cedula);
        if(resultado==null){
            clientes.push(cliente);
        }else{
            alert("El cliente ya existe" + cliente.cedula)
        }
}
//punto 2
buscarCliente=function(cedula){
    let elementoCliente
    let clienteEncontrado=null;
    for(i=0 ; i<clientes.length ; i++){
        elementoCliente=clientes[i]
        if(elementoCliente.cedula== cedula){
            clienteEncontrado=elementoCliente
            break;
        }
    }
    return clienteEncontrado
}
//punto 1
mostrarClientes = function () {
    let elemntoTabla = document.getElementById("tablaClientes")
    let contenidoTabla = "<table><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>"+
    "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    elemntoTabla.innerHTML= contenidoTabla ;
}