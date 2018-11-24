/* --------------------------MODAL----------------------*/
              var cantidad = 1, precio = precioJuego, impuesto = 1.22, envio = 0, precioFinal = 0;
                  
                  function mostrarEsPaypal(){
                    document.getElementById("esTarjeta").style.display = 'none';
                    document.getElementById("esPaypal").style.display = 'block';
                    document.getElementById("radioEsTarjeta").checked = false;
                  }
                  function mostrarEsTarjeta(){
                    document.getElementById("esTarjeta").style.display = 'block';
                    document.getElementById("esPaypal").style.display = 'none';
                    document.getElementById("radioEsPaypal").checked = false;
                  }
                  function mostrarEsDigital(){
                    document.getElementById("esFisico").style.display = 'none';
                    document.getElementById("radioEsFisico").checked = false;
                  }
                  function mostrarEsFisico(){
                    document.getElementById("esFisico").style.display = 'block';
                    document.getElementById("radioEsDigital").checked = false;
                  }
                  function recalcularPrecioFinal(){
                    precioFinal = ((precio * cantidad) * impuesto) + envio ;
                    document.getElementById("labelPrecioFinal").innerHTML = precioFinal.toFixed(2);
                  }
                  function aumentarCantidad(){
                    cantidad++;
                    document.getElementById("labelCantidad").innerHTML = cantidad;
                    recalcularPrecioFinal();
                  }
                  function reducirCantidad(){
                    if(cantidad > 1){
                      cantidad--;
                    }
                    document.getElementById("labelCantidad").innerHTML = cantidad;
                    recalcularPrecioFinal();
                  }
                  
                  document.addEventListener("DOMContentLoaded",
                  function(){
                    //Digital o físico
                    var radioEsDigital = document.getElementById("radioEsDigital");
                    var radioEsFisico = document.getElementById("radioEsFisico");
                    var esFisico = document.getElementById("esFisico");
                    var esFisico = document.getElementById("esFisico");
                  
                    //Medio de pago
                    var radioEsTarjeta = document.getElementById("radioEsTarjeta");
                    var radioEsPaypal = document.getElementById("radioEsPaypal");
                  
                    //Tipo de envío
                    var comboTipoEnvio = document.getElementById("comboTipoEnvio");
                  
                    //Detalle de pago
                    var labelPrecio = document.getElementById("labelPrecio");
                    var labelCantidad = document.getElementById("labelCantidad");
                    var labelEnvio = document.getElementById("labelEnvio");
                    var labelImpuesto = document.getElementById("labelImpuesto");
                    var labelPrecioFinal = document.getElementById("labelPrecioFinal");
                  
                    labelPrecio.innerHTML = precio;
                    labelCantidad.innerHTML = cantidad;
                    labelEnvio.innerHTML = envio;
                  
                    recalcularPrecioFinal();
                    labelPrecioFinal.innerHTML = precioFinal.toFixed(2);
                  
                    //Cantidad
                    var botonAumentarCantidad = document.getElementById("botonAumentarCantidad");
                    var botonReducirCantidad = document.getElementById("botonReducirCantidad");
                  
                    //Listeners
                    radioEsTarjeta.addEventListener("click", mostrarEsTarjeta);
                    radioEsPaypal.addEventListener("click", mostrarEsPaypal);
                  
                    radioEsDigital.addEventListener("click", mostrarEsDigital);
                    radioEsFisico.addEventListener("click", mostrarEsFisico);
                  
                    botonAumentarCantidad.addEventListener("click", aumentarCantidad);
                    botonReducirCantidad.addEventListener("click", reducirCantidad);
                  
                    comboTipoEnvio.addEventListener("change", function() {
                        
                        switch(comboTipoEnvio.value) {
                          case 'comun':
                              envio = 0.005 * precio;
                              break;
                          case 'especial':
                              envio = 0.02  * precio;
                              break;
                          case 'premium':
                              envio = 0.05  * precio;
                              break;
                          default:
                            envio = 0;
                      }
                      labelEnvio.innerHTML = envio.toFixed(2);
                      recalcularPrecioFinal();
                    });
                  
                  }
                  )
                  

         var modal = document.getElementById('myModal');
         
      
         var btn = document.getElementById("myBtn");
         
         var span = document.getElementsByClassName("close")[0];
         
        
         btn.onclick = function() {
             modal.style.display = "block";
         }
         
         
         span.onclick = function() {
             modal.style.display = "none";
         }
         
         
         window.onclick = function(event) {
             if (event.target == modal) {
                 modal.style.display = "none";
             }
         }