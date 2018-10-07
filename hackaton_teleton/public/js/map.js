
  $(document).ready(function(){
      // Aqui va todo mi jquery #s07 > path
      $("#states > a").on("click", function(){
        var textos = $(this).find('text')
        var estado = ''
        if (textos.length > 0) estado = textos[0].innerHTML
        console.warn('ESTADO: ', estado)
      })
  })