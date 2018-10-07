  //
  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBeHMOKKjg-nuWi5AFcpmuZZ1RrQ9N_tz8",
  //   authDomain: "hackathon-teleton.firebaseapp.com",
  //   databaseURL: "https://hackathon-teleton.firebaseio.com",
  //   projectId: "hackathon-teleton",
  //   storageBucket: "hackathon-teleton.appspot.com",
  //   messagingSenderId: "876499972026"
  // };
  // firebase.initializeApp(config);
  //
  //
  //
  // var callback = function(snap) {
  //         var data = snap.val();
  //         return data;
  //     };
  // abreviacion de la ruta de la base de datos firebase
  var database = firebase.database();

  var someVar;

  firebase.database().ref('tiempo-acumulado/123jhk123/Regiones/Chihuahua/montoBanamex').on('value', function(snap) {
    var someVar = snap.val();
    // console.log(someVar);
    document.getElementById("donaciones").style.height = someVar + "px";
    document.getElementsByClassName("corazon").innerHTML = "Paragraph changed!";

  });

  //esta es una funcion de prueba donde obtenemos el objeto en un punto del arbol de la base de datos de firebase
  console.log(someVar);

  let someReference = firebase.database().ref('tiempo-acumulado/123jhk123/Regiones/Chihuahua/')
  someReference.on('value', (snapshot) => {
    console.log(snapshot.val())
  });

  // firebase.database().ref('tiempo-acumulado/').once('value', function(snap){
  //   console.log('Iteracion');
  //   console.log(snap.val());
  // })

  //este iterador navegara a traves de cada uno de los hijos de la ruta que coloquemos en ref en el primer nivel
  function iterativaOnce(obj) {
    console.log("iteracion");
    console.log(obj.val());
    obj.forEach(function(objDos) {
      console.log("Iterador Interno");
      console.log(objDos.val());
    });
  }

  firebase.database().ref('tiempo-acumulado/').on('value', iterativaOnce)






  function hacerListaDeEstados(fundacion, donadoresTotales, montoTotal) {
    //$("#list-wrapper").empty();
    $(".hora-wrapper").append(`          <h2>Zacatecas</h2>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Institucion</th>
                    <th scope="col">Donadores</th>
                    <th scope="col">Monto Acumulado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">${fundacion}</th>
                    <td>${donadoresTotales}</td>
                    <td>${montoTotal}</td>
                  </tr>
                </tbody>
              </table>`);


    $("#description-wrapper").append(`<div class="tab-pane fade show" id="list-description-${key}" role="tabpanel" aria-labelledby="list-${key}"><p>${description}</p></div>`);
    $("#name-wrapper a").first().addClass("active");
    $("#description-wrapper div").first().addClass("active");
  }

  firebase.database().ref('tiempo-acumulado/123jhk123/Regiones/').once('value').then(function(regiones) {
    regiones.forEach(function(regionesChild) {
      console.log(regionesChild.key)
      console.log('Donaciones captadas por Banamex: '+ regionesChild.val().montoBanamex)
      console.log('Donaciones captadas por Farmacias: '+ regionesChild.val().montoFarmacias)
      console.log('Donaciones captadas por Soriana: '+ regionesChild.val().montoSoriana)
      console.log('Donaciones captadas por Telcel: '+ regionesChild.val().montoTelcel)
      console.log('Donaciones captadas por Telecom: '+ regionesChild.val().montoTelecom)
      console.log('Donaciones captadas por Telmex: '+ regionesChild.val().montoTelmex)
    })

  });


 $(document).ready(function(){
   $(".perspective").click( function(event){
     $(".card-holder").addClass("rotor")
   });
   $(".brand-wrapper-back").click( function(event){
     $(".card-holder").removeClass("rotor")
   });


 })



  // firebase.database().ref('/hackathon-teleton/tiempo-acumulado/123jhk123/Regiones/Chihuahua/').once('value').then(function(snap) {
  //   return snap.val();
  // })
