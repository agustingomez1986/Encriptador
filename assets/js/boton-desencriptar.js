function botondesencriptar(){
    var validacion = validar(textoinput.value);
    
    // SI PASA LA VALIDACIÓN, ENTONCES DESENCRIPTO
    if(validacion){
        textooutput.value = desencriptar(textoinput.value);
        document.getElementById("cajasintexto").style.display = "none";
        document.getElementById("cajacontexto").style.display = "flex";
    } else {
        alert("SOLO SE ACEPTAN MINÚSCULAS Y SIN ACENTOS");
        document.getElementById("cajasintexto").style.display = "block";
        document.getElementById("cajacontexto").style.display = "none";
        textoinput.focus();
    }
}