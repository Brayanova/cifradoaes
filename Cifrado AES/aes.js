function cifrarAES() {
    var cadena = document.getElementById("mensaje").value;
    var password = document.getElementById("key").value;
    var keySize = document.getElementById("key-size").value;

    // Verificar el tamaño de la llave
    if (password.length * 8 !== parseInt(keySize)) {
        alert("El tamaño de la llave no corresponde con el tipo de AES seleccionado.");
        return;
    }

    var cifrar = CryptoJS.AES.encrypt(cadena, password);
    document.getElementById("demo1").innerHTML = cifrar;
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";

    // Agregar clase de animación al documento
    document.documentElement.classList.add('animate-circle');

    // Remover clase de animación después de 2.5 segundos
    setTimeout(function () {
        document.documentElement.classList.remove('animate-circle');
    }, 2500);
}

function descifrarAES() {
    var password = document.getElementById("key").value;
    var keySize = document.getElementById("key-size").value;

    // Verificar el tamaño de la llave
    if (password.length * 8 !== parseInt(keySize)) {
        alert("El tamaño de la llave no corresponde con el tipo de AES seleccionado.");
        return;
    }

    var cifrar = document.getElementById("demo1").innerHTML;
    var decifrar = CryptoJS.AES.decrypt(cifrar, password).toString(CryptoJS.enc.Utf8);
    document.getElementById("demo2").innerHTML = decifrar;
    document.getElementById("demo3").innerHTML = decifrar;

    // Agregar clase de animación de salida al centro
    document.documentElement.classList.add('animate-circle-out');

    // Remover clase de animación después de 2.5 segundos
    setTimeout(function () {
        document.documentElement.classList.remove('animate-circle-out');
    }, 1500);
}
