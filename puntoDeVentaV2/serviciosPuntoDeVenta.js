calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;

}
calcularIva=function(monto){
    let iva=(monto*12)/100;
    return iva;

}
calcularSubtotal=function(precio,cantidad){
    let productos=(precio*cantidad);
    
    return productos;

}
calcularTotal=function(subtotal,descuento,iva){
    let total=(subtotal-descuento)+iva;
    return total;

}