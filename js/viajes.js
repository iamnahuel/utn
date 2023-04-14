


//********************** JS viajes ****************************
const HTMLresponse = document.querySelector("#app");

const datosVuelos = []
// Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();


// Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function () {
  // Si nada da error
  if (this.readyState == 4 && this.status == 200) {
    // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    const date = JSON.parse(this.responseText);
    datosVuelos.push(date)
    //datosVuelos == [...date];
    console.log(date);


    const template = date.map((user) =>
      '<li id="listaVuelos" class= "list-group-item d-flex justify-content-between align-items-start">' +
      '<a href="./datosVuelo.html"><img src="../img/avion.png" class="iconoAvion" alt="" id="idAvion"></a>' +
      '<div class="ms-2 me-auto listaVuelos">' +
      '<div id="fw-bold" class="fw-bold">' + '<strong class="destino"> Destino:<strong/>' + user.name + '</div>' +
      '<div id="fw-bold" class="fw-bold">' + '<strong class="destino">Origen:<strong/>' + user.username + '</div>' +

      ' </div>' +
      ' <span class="badge bg-primary rounded-pill">' + 'N° Vuelo:' + user.id + '</span>' +

      ' </li >'
    )
    HTMLresponse.innerHTML = template;
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.setRequestHeader("Content-type", "application/json");
// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
xhttp.send(null);

/////////////////
//btno busqueda destino vuelos
var boton = document.getElementById("validate");

//input datos destino
const destino = document.getElementById("inputdestino");


//error campo de busqueda de destino vuelos
const error = document.querySelector("#error");



// funcion de busqueda de destino
boton.onclick = function (e) {
  const destino = document.getElementById("inputdestino").value;
  if (destino.length > 0) {
    console.log(datosVuelos[0]);
    const datosBusqueda = datosVuelos[0].filter(e => e.name == destino);
    console.log(datosBusqueda);
    cargarDatosEncontrados(datosBusqueda)
  } else {
    error.innerHTML = "Completar este campo";
  }
}


function cargarDatosEncontrados(params) {
  const template = params.map((user) =>
    '<li id="listaVuelos" class= "list-group-item d-flex justify-content-between align-items-start">' +
    '<a href="./datosVuelo.html"><img src="../img/avion.png" class="iconoAvion" alt="" id="idAvion"></a>' +
    '<div class="ms-2 me-auto listaVuelos">' +
    '<div id="fw-bold" class="fw-bold">' + '<strong class="destino"> Destino:<strong/>' + user.name + '</div>' +
    '<div id="fw-bold" class="fw-bold">' + '<strong class="destino">Origen:<strong/>' + user.username + '</div>' +

    ' </div>' +
    ' <span class="badge bg-primary rounded-pill">' + 'N° Vuelo:' + user.id + '</span>' +

    ' </li >'
  )
  HTMLresponse.innerHTML = template;
}


