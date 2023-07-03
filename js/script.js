/*const aWhatsApp = document.getElementById('qr');
function ocultarMostrarImagen(){
    aWhatsApp.style.display = ' ';
}
    //aWhatsApp.addEventListener('click'){

    //}
const botonCerrar = document.getElementsByClassName('cerrar');
function cerrar(){
    botonCerrar.style.display="none"
}  
*/
/*function mostrar(){
    const abrirWhatsApp = document.getElementById('qr');
    const verQR = document.getElementById("qr-wpp");
    const ocultarQR = document.getElementById('ocultar-qr');

    /*abrirWhatsApp.addEventListener('click',()=> {
        verQR.style.display='block';
        ocultarQR.style.display='block';
    });
    
    verQR.style.display='block';
    ocultarQR.style.display='block';
    
}
function ocultar(){
    const verQR = document.getElementById("qr-wpp");
    const ocultarQR = document.getElementById('ocultar-qr');
    
    verQR.style.display='none';
    ocultarQR.style.display='none';

}

/*
const verQR = document.getElementById('qr');
const popUpQR = document.getElementById('qr-wpp')
verQR.addEventListener('click',()=>{
    popUpQR.show();
})
    const ocultarQR = document.getElementById('ocultar-qr');
 
document.getElementById('qr').addEventListener('click', function () {
    var qrWpp = document.getElementById('qr-wpp');
    var ocultarButton = document.getElementById('ocultar-qr');
  
    if (qrWpp.style.display === 'none') {
      qrWpp.style.display = 'block';
      ocultarButton.style.display = 'block';
    } else {
      qrWpp.style.display = 'none';
      ocultarButton.style.display = 'none';
    }
  });
  
  document.getElementById('ocultar-qr').addEventListener('click', function () {
    var qrWpp = document.getElementById('qr-wpp');
    var ocultarButton = document.getElementById('ocultar-qr');
  
    qrWpp.style.display = 'none';
    ocultarButton.style.display = 'none';
  });

*/
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
function mostrarCampos() {
  var opcion = document.getElementById("categoria-incidente").value;
  
  // Ocultar todos los campos
  document.getElementById("one-login").style.display = "none";
  document.getElementById("redes").style.display = "none"; 
  document.getElementById("delivery").style.display = "none"; 
  document.getElementById("servicios-web").style.display = "none"; 

  // Mostrar los campos según la opción seleccionada
  if (opcion === "one-login") {
    document.getElementById("one-login").style.display = "block";
  } else if (opcion === "redes") {
    document.getElementById("redes").style.display = "block";
  } else if (opcion === "delivery") {
    document.getElementById("delivery").style.display = "block";
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
