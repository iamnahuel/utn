
//********************** JS contacto ****************************
//declaramos btn enviar mensaje
var enviarMensaje = document.getElementById("enviarMsj");
//input correo contacto
const correo = document.getElementById("exampleFormControlInput1");
//texare mensaje contacto
const mensaje = document.getElementById("exampleFormControlTextarea1");
//input error correo contacto
const error = document.querySelector("#error");
//input error mensaje contacto
const errorMsj = document.querySelector("#errorMsj");

// Ventana modal
var modal = document.getElementById("exampleModal");


enviarMensaje.onclick = () => {
    if (correo.value == 0) {
        error.innerHTML = "Campo obligatorio";
    } else {
        error.innerHTML = null;
        validarCorreo(correo.value)
       
    }
    if (mensaje.value == 0) {
        errorMsj.innerHTML = "Campo obligatorio";
    } else {
        errorMsj.innerHTML = null;
    }
}

//funcion para validar formato correo electronico
function validarCorreo(email) {
    const re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
    if (!re.exec(email)) {
        error.innerHTML = "Correo incorrecto";
    } else {
        error.innerHTML = null;

    }
}


