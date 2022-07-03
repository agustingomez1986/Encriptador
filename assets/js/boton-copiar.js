function botoncopiar(){
    var textoCopiar = document.getElementById("textooutput");

    textoCopiar.select();
    document.execCommand('copy');

    // CON ESTOS DOS COMANDOS ES LA UNICA MANERA QUE ENCONTRÉ PARA QUE NO SE SELECCIONE EL TEXTAREA "textooutput" CUANDO HAGO CLICK EN EL BOTON COPIAR
    textoCopiar.blur();
    window.getSelection().removeAllRanges();
}