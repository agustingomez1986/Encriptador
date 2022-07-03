// PROCESO DE DESENCRIPTADO
function desencriptar(texto){
    var textonuevo;
    textonuevo = texto.replaceAll('enter','e');
    textonuevo = textonuevo.replaceAll('imes','i');
    textonuevo = textonuevo.replaceAll('ai','a');
    textonuevo = textonuevo.replaceAll('ober','o');
    textonuevo = textonuevo.replaceAll('ufat','u');
    return textonuevo;
}