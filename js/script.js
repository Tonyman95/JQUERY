$(document).ready(function () {})

$("#ElegirPelicula").click(()=>{
    $.ajax({
        url: 'https://www.codigo-alfa.cl/aglo/Tester/peliculaAleatoria',
        method: 'GET',
        success:function(data){
            console.log(data)
            $("#datosPeliculas").html(
                "Titulo: " + data.pelicula.title+"<br>"+
                "Año: "+ data.pelicula.year+"<br>"+"Genero: "+ data.pelicula.genre)
            console.log(data.pelicula.title)
        }
    })

})

function getPeliculas(){
    $.ajax({
        url:'https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas',
        method: 'GET',
        success: function(data){
            console.log(data)
            const peliculasList = data.peliculas;
            let cadenaOption = '<option></option>'
            peliculasList.map((data,index)=>{
                console.log(data,index)
                console.log(peliculasList[index])
                cadenaOption+= '<option val='+data.id+'>'+data.id+'  '+data.title+'</option>';
            })
            $("#opcionesPeliculas").html(cadenaOption);
            $("#opcionesPeliculas").select2();

        }
    })
}

function getDataPeliculas(valorSeleccionado){
     console.log(valorSeleccionado)
     let numero = parseInt(valorSeleccionado)
    $.ajax({
        url: 'https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas',
        method: 'GET',
        success: function(data){
            const peliculasList = data.peliculas;
            $("#datoPeliculas").html("<p>Titulo: "+peliculasList[numero -1].title+"<br>"+"Año: "+peliculasList[numero-1].year+"<br>"+"Genero: "+peliculasList[numero-1].genre+"</p>")
            console.log(peliculasList[numero -1].title)
            
        }

    })
}

getPeliculas()

