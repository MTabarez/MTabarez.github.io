/* --------------------------MENÚ HAMBURGUESA------------------------------------- */

function abrirMenu() {
	var x = document.getElementById("navegacion");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/* --------------------------SLIDER INDEX------------------------------------- */

var slideIndex = 1;
mostrarSlides(slideIndex);

function cambioSlides(n) {
	mostrarSlides(slideIndex += n);
}

function slideActual(n) {
	mostrarSlides(slideIndex = n);
}

function mostrarSlides(n) {
	var i;
	var slides = document.getElementsByClassName("sliderhome");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
		}

/* --------------------------SLIDER DETALLE JUEGOS------------------------------------- */

var slideJuegos = 1;
mostrarSlidesJuegos(slideJuegos);

function cambioSlidesJuegos(n) {
	mostrarSlidesJuegos(slideJuegos += n);
}

function slideActualJuegos(n) {
	mostrarSlidesJuegos(slideJuegos = n);
}

function mostrarSlidesJuegos(n) {
	var i;
	var slides = document.getElementsByClassName("sliderJuegos");
	var dots = document.getElementsByClassName("dotJuegos");
	if (n > slides.length) {slideJuegos = 1}    
		if (n < 1) {slideJuegos = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideJuegos-1].style.display = "block";  
			dots[slideJuegos-1].className += " active";
		}

/* --------------------------LEER MÁS------------------------------------- */

function leerMas() {
    var x = document.getElementById("leermas");
    var botonMostrarMas = document.getElementById("botonleermas");
    if (x.style.display === "none") {
        x.style.display = "block";
        botonMostrarMas.style.display = "none";
    } else {
        x.style.display = "none";
        botonMostrarMas.style.display = "block";
    }
}

/* --------------------------LEER MÁS CONTENIDO------------------------------------- */
