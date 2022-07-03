// PROCESO DE ENCRIPTADO
function encriptar(texto){
    var textonuevo;
    textonuevo = texto.replaceAll('e','enter');
    textonuevo = textonuevo.replaceAll('i','imes');
    textonuevo = textonuevo.replaceAll('a','ai');
    textonuevo = textonuevo.replaceAll('o','ober');
    textonuevo = textonuevo.replaceAll('u','ufat');
    return textonuevo;

    //	ASÍ HABÍA HECHO LA PRIMERA VEZ EL ENCRIPTADO, HASTA QUE CONOCÍ LA FUNCIÓN .replaceAll()
    //	ME PARECIÓ INTERESANTE DEJAR EL CÓDIGO

    /*	var textonuevo = "";
    var letraactual;
    var letraencriptada;

    for(var i = 0; i < texto.length ; i++){
        switch(texto.charAt(i)){
            case "a":
                letraencriptada = texto.charAt(i).replace("a","ai");
                textonuevo = textonuevo.concat(letraencriptada);
                break;
            case "e":
                letraencriptada = texto.charAt(i).replace("e","enter");
                textonuevo = textonuevo.concat(letraencriptada);
                break;
            case "i":
                letraencriptada = texto.charAt(i).replace("i","imes");
                textonuevo = textonuevo.concat(letraencriptada);
                break;
            case "o":
                letraencriptada = texto.charAt(i).replace("o","ober");
                textonuevo = textonuevo.concat(letraencriptada);
                break;
            case "u":
                letraencriptada = texto.charAt(i).replace("u","ufat");
                textonuevo = textonuevo.concat(letraencriptada);
                break;
            default:
                letraencriptada = texto.charAt(i);
                textonuevo = textonuevo.concat(letraencriptada);
                break;
        }
    }
    */
}