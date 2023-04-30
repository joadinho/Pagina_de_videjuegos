$(document).ready(function(){
    $("#formlogin").submit(function(e){
        e.preventDefault();

        var email_login    = $("#loginEmail").val();
        var password_login = $("#loginPassword").val();

        let msjMostrarLogin = "";
        let enviar = false;

        
        //valida email
        if((email_login).trim().indexOf('@', 0) == -1 || (email_login).trim().indexOf('.', 0) == -1) {
            msjMostrarLogin += "-El correo electrónico introducido es invalido. Debe contener un @";
            enviar = true;
        }
        
        //valida password
        if(password_login.trim().length < 8 || password_login.trim().length > 12){
            msjMostrarLogin = msjMostrarLogin + "<br>-Clave invalida debe tener entre 8 y 12 caracteres";
            enviar = true;
        }

        if(password_login.trim()  == ""){
            msjMostrarLogin += "<br>-Clave invalida no puede estar vacia";
            enviar = true;
        }

        if (!password_login.match(/([A-Z])/)){
           msjMostrarLogin += "<br>-Clave invalida Falta una letra mayuscula";
            enviar = true;
        }

        if (!password_login.match(/([a-z])/)){
            msjMostrarLogin += "<br>-Clave invalida Falta una letra minuscula";
             enviar = true;
         }

         if (!password_login.match(/([0-9])/)){
            msjMostrarLogin += "<br>-Clave invalida Debe contener al menos un numero";
            enviar = true;
         }

        if (!password_login.match(/([!,%,&,@,#,$,^,,?,_,~,.])/)){
            msjMostrarLogin += "<br>-Clave invalida Debe contener un caracter especial";
            enviar = true;
         }












    

        if(enviar){
            $("#mensaje").html(msjMostrarLogin);
        }
        else{
            $("#mensaje").html("Enviado");
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
