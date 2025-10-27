probarIncrementosaldo=function(){
    let cta={numero:"23424",saldo:34.0}
    incrementarSaldo(cta,100)
    console.log(cta.saldo)
}
probarDeterminarMayor=function(){
    let per1={nombre:"Jhon" ,edad:23}
    let per2={nombre:"Daniel ", edad : 45}
    let mayor=determinarMayor(per1,per2);
    if(mayor!=null){
        console.log("El mayor es :" +mayor.nombre);
    }

}
probarAtributos=function(){
    let persona = {
        nombre:"Jhon" ,
        apellido: "Guaman",
        edad : 24,
        estaVivo : true
    }
    console.log(persona.nombre)
    console.log(persona.edad)
    if(persona.estaVivo==false){
        console.log("no esta vivo ")
    }
    console.log("si esta vivo")
}
CrearProducto=function(){
    let producto1 = {
        nombre : "pelota" ,
        precio : 10.25 ,
        stock : 14
    }

    let producto2 = {
        nombre : "Carrito a control Remoto " ,
        precio : 25.45 ,
        stock : 9

    }
    console.log(producto1.nombre)
    console.log(producto2.nombre)
    if(producto1.stock==producto2.stock){
        console.log("ambos productos tienen el mismo stock ")
    }else if (producto1.stock>producto2.stock){
        console.log("producto1 es mayor" )
    }else if (producto2.stock > producto1){ 
        console.log("el producto dos es mayor" )

    }
    

}
modificarAtributos=function(){
    let cuenta={
        numero: "5323423423",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo)
}
crearCliente=function(){
    let cliente={
        cedula : "171231",
        nombre : "Jhon"
    }
    let cliente1={};
    cliente1.nombre="Jhon";
    cliente1.apellido="Guaman";
    cliente1.cedula="171231"
    console.log(cliente1)
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if (persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null ;
    }
}