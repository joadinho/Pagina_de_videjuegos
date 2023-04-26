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

        //validar nombre
        if(nombre.trim().length < 4 || nombre.trim().length > 10){
            msjMostrar = msjMostrar + "<br>El nombre debe tener entre 4 y 10 caracteres";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El nombre debe comenzar con mayúscula";
            enviar = true;
        }

        if(nombre == "1","2","3","4","5","6","7","8","9","0"){
            msjMostrar += "<br>El nombre no puede contener numeros";
            enviar = true;
        }
        if(nombre.trim() == ""){
            msjMostrar += "<br>El nombre no puede estar vacio";
            enviar = true;
        }

        //Validar Apellido
        if(apellido.trim().length < 4 || nombre.trim().length > 10){
            msjMostrar = msjMostrar + "<br>El apellido debe tener entre 4 y 10 caracteres";
            enviar = true;
        }

        var letra = apellido.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El apellido debe comenzar con mayúscula";
            enviar = true;
        }

        if(apellido == "1","2","3","4","5","6","7","8","9","0"){
            msjMostrar += "<br>El apellido no puede contener numeros";
            enviar = true;
        }

        if(nombre.trim() == ""){
            msjMostrar += "<br>El apellido no puede estar vacio";
            enviar = true;
        }


        

        if(enviar){
            $("#warnings").html(msjMostrar);
        }
        else{
            $("#warnings").html("Enviado");
        }
    });
    function esMayuscula(letra){
        console.log("Estoy aqui");
        console.log(letra);
        console.log(letra.toUpperCase());

        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }
});