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
            msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El nombre debe comenzar con mayúscula";
            enviar = true;
        }
    
        
        if(nombre.trim() == ""){
            msjMostrar += "<br>El nombre no puede estar vacio";
            enviar = true;
        }

        //Validar Apellido
        if(apellido.trim().length < 4 || apellido.trim().length > 10){
            msjMostrar = msjMostrar + "<br>El apellido debe tener entre 4 y 10 caracteres";
            enviar = true;
        }

        var letra = apellido.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El apellido debe comenzar con mayúscula";
            enviar = true;
        }


        if(apellido.trim() == ""){
            msjMostrar += "<br>El apellido no puede estar vacio";
            enviar = true;
        }

        //validar password
        if(clave.trim().length < 8 || clave.trim().length > 12){
            msjMostrar = msjMostrar + "<br>La clave debe tener entre 8 y 12 caracteres";
            enviar = true;
        }

        


        //validar correo

        if((correo).trim().indexOf('@', 0) == -1 || (correo).trim().indexOf('.', 0) == -1) {
            msjMostrar += "<br>El correo electrónico introducido es invalido. Debe contener un @";
            enviar = true;
        }

        if(correo.trim() == ""){
            msjMostrar += "<br>El correo no puede estar vacio";
            enviar = true;
        }

        //validar telefono


        if(contacto.trim() == ""){
            msjMostrar += "<br>El telefono no puede estar vacio";
            enviar = true;
        }
        if(contacto.trim().length < 9 || contacto.trim().length > 9){
            msjMostrar += "<br> telefono invalido. Deben ser 9 numeros "
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