mostrarNumero=function(){
    console.log("antes del for")
    for(let i=0 ; i<4 ;i++){
        console.log(i);
    }
    console.log("despues del for ")
}
mostrarNumero2= function(){
    console.log("antes del for")
    for(let indice=1 ; indice <=5 ; indice++){
        console.log(indice);
    }
    console.log("despues del for ")
}
mostrarPares=function(){
    console.log("antes del for")
    for(let x=2;x<=10 ; x+=2){
        //x+=2 es quivalente  a x=x+2
    console.log(x)
}
}

mostrarinverso=function(){
    console.log("antes del for")
    for(let i=10; i>=0 ; i-- ){
        console.log(i)
    }
    console.log("despues del for")
}
kackearNasaPelis=function(){
    //nasa del 0 al 100
    console.log("antes del for ")
    for(let porcentaje=0;porcentaje<=100;porcentaje+=10){
        console.log(" Hackeando nasa ; " + porcentaje +  " % ")
    }
    console.log("La nasa a sido hackeada")
    console.log("FELICIDADES ENTRASTE")
}

NumerosImpares=function(){
    console.log("antes del for")
    for(let impares=1;impares<=21;impares+=2){
        console.log(impares)

    }

    console.log("Despues del for")
}