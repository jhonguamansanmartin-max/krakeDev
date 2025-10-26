
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