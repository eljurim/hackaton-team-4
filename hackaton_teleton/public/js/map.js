// var data = [

//   { Estados: 
//     {
//     Aguascalientes:  {
//       donantes: 2000,
//       monto: 250000
//     }},
//     { ['Baja California']: {
//       donantes: 2000,
//       monto: 30000
//     }},


//   }

// ]

var data = {
  aguascalientes : {
    donantes : 1000,
    monto : 20000
  },
  ['baja california'] : {
    donantes : 2400,
    monto : 26000
  },
  guanajuato : {
    donantes : 2000,
    monto : 24000
  },
}


  
  $(document).ready(function(){
      // Aqui va todo mi jquery #s07 > path
      $("#states > a").on("click", function(){
        var textos = $(this).find('text')
        var estado = ''
        console.warn('ESTADO:', estado)
        if (textos.length > 0) estado = textos[0].innerHTML
        console.warn('ESTADO: ', estado)
      })
  })

