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

  var database = firebase.database();

  var someVar;

 firebase.database().ref('tiempo-acumulado/123jhk123/Regiones/Chihuahua/montoBanamex').on('value', function(snap) {
  var someVar = snap.val();
  // console.log(someVar);
  document.getElementById("donaciones").style.height = someVar+"px";

});


  console.log(someVar);

  let someReference = firebase.database().ref('tiempo-acumulado/123jhk123/Regiones/Chihuahua/')
  someReference.on('value',(snapshot)=>{
    console.log(snapshot.val())
  });




// firebase.database().ref('/hackathon-teleton/tiempo-acumulado/123jhk123/Regiones/Chihuahua/').once('value').then(function(snap) {
//   return snap.val();
// })
