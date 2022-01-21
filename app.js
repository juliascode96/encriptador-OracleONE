function prepararMensaje(mensaje) {
    return mensaje.replace(/[^\w\s]/gi, '').replace(/[0-9]/gi, '').toLowerCase();
}

function encriptar() {
    const mensaje = prepararMensaje(document.getElementById('mensaje').value);
    var encriptado = mensaje.replace(/e/gi, 'enter');
    encriptado = encriptado.replace(/i/gi, 'imes');
    encriptado = encriptado.replace(/a/gi, 'ai');
    encriptado = encriptado.replace(/o/gi, 'ober');
    encriptado = encriptado.replace(/u/gi, 'ufat');

    document.getElementById('texto').value = encriptado;
}

function desencriptar() {
    const mensaje = prepararMensaje(document.getElementById('mensaje').value);
    var desencriptado = mensaje.replace(/imes/gi, 'i');
    desencriptado = desencriptado.replace(/enter/gi, 'e');
    desencriptado = desencriptado.replace(/ai/gi, 'a');
    desencriptado = desencriptado.replace(/ober/gi, 'o');
    desencriptado = desencriptado.replace(/ufat/gi, 'u');

    document.getElementById('texto').value = desencriptado;
    
}

function copiarTexto() {
var textoCopiado = document.getElementById("texto");
textoCopiado.select(); 
textoCopiado.setSelectionRange(0, 99999);
navigator.clipboard.writeText(textoCopiado.value);
alert("Texto copiado: " + textoCopiado.value);
}

document.getElementById('enc').addEventListener('click', encriptar);
document.getElementById('desenc').addEventListener('click', desencriptar);
document.getElementById('copiar').addEventListener('click', copiarTexto);