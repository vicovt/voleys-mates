document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.forms['formulario'];
    var elementos = formulario.elements;
    var boton = document.getElementById('btn');

    var validarNombre = function(e) {
        if (formulario.nombre.value.trim() === "") {
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };

    var validarApellido = function(e) {
        if (formulario.apellido.value.trim() === "") {
            alert("Completa el campo apellido");
            e.preventDefault();
        }
    };

    var validarCorreo = function(e) {
        var correo = formulario.correo.value.trim();
        if (correo === "" || !validarFormatoCorreo(correo)) {
            alert("Completa correctamente el campo correo");
            e.preventDefault();
        }
    };

    var validarRadio = function(e) {
        var radios = formulario.sexo;
        var seleccionado = false;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                seleccionado = true;
                break;
            }
        }
        if (!seleccionado) {
            alert("Selecciona una opción para el campo sexo");
            e.preventDefault();
        }
    };

    var validarFormatoCorreo = function(correo) {
        // Utilizamos una expresión regular para validar el formato del correo electrónico
        var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };

    var validar = function(e) {
        validarNombre(e);
        validarApellido(e);
        validarCorreo(e);
        validarRadio(e);
    };

    formulario.addEventListener("submit", validar);
});


    