$(document).ready(function(){
    $("#formOlvidado").submit(function(e){
        e.preventDefault();

        var email_ol = $("#emailO").val();

        let msjMostrarOlvidado = "";
        let enviar = false;

        //valida email
        if((email_ol).trim().indexOf('@', 0) == -1 || (email_ol).trim().indexOf('.', 0) == -1) {
            msjMostrarOlvidado += "-El correo electrónico introducido es invalido. Debe contener un @";
            enviar = true;
        }



        if(enviar){
            $("#mensaje_Olvidado").html(msjMostrarOlvidado);
        }
        else{
            $("#mensaje_Olvidado").html("Enviado");
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