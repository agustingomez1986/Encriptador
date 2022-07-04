//	CUANDO CLICKEO EN EL BOTON "Encriptar" Y "Desencriptar", LO QUE VOY A HACER PRIMERO ES VALIDAR EL CÓDIGO Y LUEGO HACER EL PROCESO DE ENCRIPTADO O DESENCRIPTADO

function botonencriptar(){
    var validacion = validar(textoinput.value);
    
    // SI PASA LA VALIDACIÓN, ENTONCES ENCRIPTO
    if(validacion){
        textooutput.value = encriptar(textoinput.value);
        document.getElementById("cajasintexto").style.display = "none";
        document.getElementById("cajacontexto").style.display = "flex";
    } else {
        alert("SOLO SE ACEPTAN MINÚSCULAS Y SIN ACENTOS");
        document.getElementById("cajasintexto").style.display = "block";
        document.getElementById("cajacontexto").style.display = "none";
        textoinput.focus();
    }
}