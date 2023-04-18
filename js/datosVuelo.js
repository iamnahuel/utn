

//btno comprar vuelo destino vuelos
var comprar = document.getElementById("comprar");

//error datos personales Nombre y Apellido
const error = document.querySelector("#errorDatosPersonales");

//error numero tarjeta
const errorTarjeta = document.querySelector("#errorNTarjeta");

//comprobamos datos y generamos la compra
comprar.onclick = function (e) {
    //declaramos los input
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const email = document.getElementById("inputEmail").value;

    const ntarjeta = document.getElementById("inputNumeroTarjeta").value





    if (nombre == "" || apellido == "" || email == "") {
        error.innerHTML = "Datos obligatorios";
    } else {
        error.innerHTML = null;
        console.log(email);
        console.log(nombre);
        console.log(apellido);
        validarCorreo(email)
    }

    if (ntarjeta == "") {
        errorTarjeta.innerHTML = "Dato obligatorio"
    } else {
        errorTarjeta.innerHTML = null
    }
}

function validarCorreo(email) {
    const re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
    if (!re.exec(email)) {
        error.innerHTML = "Correo Invalido";
    } else {
        error.innerHTML = null;
    }
}


function generarPDF() {
    console.log("Compra exitosa");
}