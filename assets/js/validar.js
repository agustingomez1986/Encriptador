function validar(texto){
    var validacion = true
    const patron = /[^a-z\ñ\n\s]/;  // ESTE SERÁ MI RANGO ¡OPUESTO! CONTRA EL QUE COMPARARÉ MI ENTRADA DE TEXTO (textarea)
    
    for(var i = 0; i < texto.length ; i++){
        if (patron.test(texto.charAt(i))){		// SI EN ALGÚN MOMENTO EL CARACTER COINCIDE CON EL RANGO OPUESTO, ENTONCES SERÁ INVALIDADO EL TEXTO
            validacion = false;
            break;
        } 
    }
    return validacion;
}