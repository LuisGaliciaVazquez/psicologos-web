// Ejemplo de un script simple
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada y lista.");
});
function mostrarFormulario() {
    document.getElementById('formulario-cita').style.display = 'block';
}

function enviarWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;
    
    var url = "https://wa.me/525545066089?text=" 
            + "Nombre: " + encodeURIComponent(nombre) 
            + "%0ATeléfono: " + encodeURIComponent(telefono)
            + "%0AMensaje: " + encodeURIComponent(mensaje);
    
    window.open(url, '_blank');
}

function enviarCorreo() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;
    
    var asunto = "Solicitud de cita - " + nombre;
    var body = "Nombre: " + nombre + "%0A" 
             + "Correo: " + email + "%0A"
             + "Teléfono: " + telefono + "%0A"
             + "Mensaje: " + mensaje;
    
    window.location.href = "mailto:tucorreo@dominio.com?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(body);
}

