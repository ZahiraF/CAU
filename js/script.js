function mostrarQR(){
  document.getElementById("qr-wpp").style.display = "block";
  
}
function ocultarQR(){
  document.getElementById("qr-wpp").style.display = "none";
}
function mostrarEmail(){
  document.getElementById("mostrar-email").style.display = "block";
}
function ocultarEmail(){
  document.getElementById("mostrar-email").style.display = "none";
}
function mostrarTel(){
  document.getElementById("mostrar-tel").style.display = "block";
}
function ocultarTel(){
  document.getElementById("mostrar-tel").style.display = "none";
}
function modal1(){
  document.getElementById("modal1").style.display = "block";
  document.body.style.overflow = "hidden";
}
function ocultarMod1(){
  document.getElementById("modal1").style.display = "none";
  document.body.style.overflow = "auto";
}
function modal2(){
  document.getElementById("modal2").style.display = "block";
  document.body.style.overflow = "hidden";
}
function ocultarMod2(){
  document.getElementById("modal2").style.display = "none";
  document.body.style.overflow = "auto";
}
function modal3(){
  document.getElementById("modal3").style.display = "block";
  document.body.style.overflow = "hidden";
}
function ocultarMod3(){
  document.getElementById("modal3").style.display = "none";
  document.body.style.overflow = "auto";
}

function mostrarCampos() {
  var opcion = document.getElementById("categoria-incidente").value;
  
  // Ocultar todos los campos
  document.getElementById("one-login").style.display = "none";
  document.getElementById("redes").style.display = "none"; 
  document.getElementById("delivery").style.display = "none"; 
  document.getElementById("peuptics").style.display = "none";
  document.getElementById("servicios-web").style.display = "none";
   

  // Mostrar los campos según la opción seleccionada
  if (opcion === "one-login") {
    document.getElementById("one-login").style.display = "block";
  } else if (opcion === "redes") {
    document.getElementById("redes").style.display = "block";
  } else if (opcion === "delivery") {
    document.getElementById("delivery").style.display = "block";
  } else if (opcion === "peuptics") {
    document.getElementById("peuptics").style.display = "block";
  } else if (opcion === "servicios-web") {
    document.getElementById("servicios-web").style.display = "block";
  }
}
function mostrarFormulario(){
  document.getElementById("formulario").style.display = "block";

}
function enviarFormulario() {
    var hora = new Date().toLocaleTimeString();
    document.getElementById("horaEnvio").value = hora;
    document.getElementById("formulario").style.display = "none";
}
function modal4(){
  document.getElementById("modal4").style.display = "block";
  document.body.style.overflow = "hidden";
}
function ocultarMod4(){
  document.getElementById("modal4").style.display = "none";
  document.body.style.overflow = "auto";
}
