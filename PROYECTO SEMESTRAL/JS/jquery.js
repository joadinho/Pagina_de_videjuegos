$(document).ready(function(){
    $("#formRegistro").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var clave = $("#password").val();
        var con_clave = $("#con_password").val();
        var correo = $("#email").val();
        var contacto = $("#telefono").val();
        var edad = $("#edad").val();

        let msjMostrar = "";
        let enviar = false;

        if(nombre.trim().lenght < 4 || nombre.trim().lenght > 10){
            msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
            enviar = true;
        }
    });
});