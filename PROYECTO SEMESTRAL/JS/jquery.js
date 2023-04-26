$(document).ready(function(){
    $("#formRegistro").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var clave = $("#password").val();
        var con_clave = $("#con_password").val();
        var correo = $("#email").val();
    });
});