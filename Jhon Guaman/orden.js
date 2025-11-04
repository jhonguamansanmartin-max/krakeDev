////////  Parte 1*
//arreglo de personas 
let personas =[
    {nombre:"Marcos" , edad:18},
    {nombre:"Roberto ", edad:15},
    {nombre:"Kate" ,edad:25},
    {nombre:"Diana" ,edad:12},
    {nombre:"Benja" ,edad:5}
]

// 1#toma el nombre de las personas y valida que al menos tenga 3 carecteres, si no cumple muestra false.
// 2#toma de la pantalla la edad de las personas valida que sea un entero entre 0 y 100 si no cumple muestra false 
// 3#solo si pasa estas validaciones crea un objeto nueva persona, agrega a nueva pérsona los atrivutos de nombre edad y objeto con los valores de pantalla, agrega el objeto al arregloi de personas 
// si se agrega correctamente mostrar un alert con persona agregada correctamente 

agregarPersona=function(){
    let nombre = recuperarTexto("txtNombre") ; 
    if(nombre.lengt < 3 ){
        mostrarTexto("lblError1" ,"Debe ingresar al menos 3 caracteres ")
    }
    let edad = recuperarInt("txtEdad")
    if (edad > 0 && edad<=100){
          mostrarTexto("lblError2" ,"La edad debe ser de 0 a 100")
    }

    let nuevaPersona={};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        personas.push(nuevaPersona);
        alert("Persona Agregada Correctamente ");
        mostrarTabla()

}
//parte 2
//mostrar personas 
mostrarTabla = function () {
    let cmpTabla = document.getElementById("tablaPersonas");
    let personasTabla = "<table><tr>" + "<th>EDAD</th>" + "<th>NOMBRE</th></tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        personasTabla += "<tr><td>" + elementoPersona.edad + "</td>" + "<td>" + elementoPersona.nombre + "</td></tr>";
    }
    personasTabla += "</table>";
    cmpTabla.innerHTML = personasTabla;
}
// parte 3 
encontrarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;
    console.log(`Nombre: ${personaMayor.nombre}, Edad: ${personaMayor.edad}`);
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log(`Nombre: ${personaMayor.nombre}, Edad: ${personaMayor.edad}`);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}
determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarTexto("lblResultadoMayor", "La persona mayor es " + mayor.nombre + " " + mayor.edad);
}

encontrarMenor= function(){
    let personaMenor = personas[0];
    let elementoPersona;
    console.log(`Nombre: ${personaMenor.nombre}, Edad: ${personaMenor.edad}`);
    for(let i = 1; i<personas.length; i++){
        elementoPersona=personas[i];
        console.log(`Nombre: ${personaMenor.nombre}, Edad: ${personaMenor.edad}`);
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona;
        }
    }
    return personaMenor;
}

determinarMenor = function(){
    let menor = encontrarMenor();
    mostrarTexto("lblResultadoMenor", "La persona menor es " + menor.nombre + " " + menor.edad);
}


