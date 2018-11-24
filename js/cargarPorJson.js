
document.addEventListener("DOMContentLoaded",

     function() {

        //cargarlo en cada div
        var titulo = document.getElementById("titulo");
        var valorPrecio = document.getElementById("valorPrecio");
        var contenidoDetalle = document.getElementById("contenidoDetalle");
        var descripcion = document.getElementById("descripcion");
        var foto1 = document.getElementById("foto1");
        var foto2 = document.getElementById("foto2");
        var foto3 = document.getElementById("foto3");
        var foto4 = document.getElementById("foto4");
        var foto5 = document.getElementById("foto5");
        var bannerPrecio = document.getElementById("bannerPrecio");

        titulo.innerHTML = contenido.titulo;
        valorPrecio.innerHTML = contenido.valorPrecio;
        contenidoDetalle.innerHTML = contenido.contenidoDetalle;
        descripcion.innerHTML = contenido.descripcion;
        foto1.innerHTML = contenido.fotos[0].foto1;
        foto2.innerHTML = contenido.fotos[1].foto2;
        foto3.innerHTML = contenido.fotos[2].foto3;
        foto4.innerHTML = contenido.fotos[3].foto4;
        foto5.innerHTML = contenido.fotos[4].foto5;
        bannerPrecio.innerHTML = contenido.fotos[5].bannerPrecio;
    }
);