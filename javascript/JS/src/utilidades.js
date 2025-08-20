/* 
funciones de utilidad
 */

const center = function(texto='', largo=0){
    let relleno = (largo - texto.length)/2 ;
    let textoCentrado = ' '.repeat(relleno) + texto;
    return textoCentrado;
} 

const linea = function(largo=0) {
    console.log('═'.repeat(largo));
}

const encabezado = function(titulo='', largo=0){
    linea(largo);
    console.log(center(titulo.toUpperCase(),largo));
    linea(largo);
}

export {
    encabezado,
    linea,
}