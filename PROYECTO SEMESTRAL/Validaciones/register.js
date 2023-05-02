$(document).ready(function(){
    $("#formregister").submit(function(e){
        e.preventDefault();
        var nombre    = $("#nombre").val();
        var apellido  = $("#apellido").val();
        var clave     = $("#password").val();
        var con_clave = $("#con_password").val();
        var correo    = $("#email").val();
        var contacto  = $("#telefono").val();
        var edad      = $("#edad").val();
        var f_nac     = $("#f_nac").val();
        
        let msjMostrar = "";
        let enviar = false;

        //validar nombre
        if(nombre.trim().length < 4 || nombre.trim().length > 10){
            msjMostrar = msjMostrar + "-El nombre debe tener entre 4 y 10 caracteres.";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>-El nombre debe comenzar con mayúscula.";
            enviar = true;
        }
    
        
        if(nombre.trim() == ""){
            msjMostrar += "<br>-El campo nombre no puede estar vacio.";
            enviar = true;
        }

        if (nombre.match(/([0-9])/)){
            msjMostrar += "<br>-Nombre invalido, no puede contener numeros.";
            enviar = true;
         }

        //Validar Apellido
        if(apellido.trim().length < 4 || apellido.trim().length > 10){
            msjMostrar = msjMostrar + "<br>-El apellido debe tener entre 4 y 10 caracteres.";
            enviar = true;
        }

        var letra = apellido.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>-El apellido debe comenzar con mayúscula.";
            enviar = true;
        }


        if(apellido.trim() == ""){
            msjMostrar += "<br>-El campo apellido no puede estar vacio.";
            enviar = true;
        }

        if (apellido.match(/([0-9])/)){
            msjMostrar += "<br>-Apellido invalido, no puede contener numeros.";
            enviar = true;
         }

        //validar password
        if(clave.trim().length < 8 || clave.trim().length > 12){
            msjMostrar = msjMostrar + "<br>-Clave invalida debe tener entre 8 y 12 caracteres.";
            enviar = true;
        }

        if(clave.trim()  == ""){
            msjMostrar += "<br>-Clave invalida no puede estar vacia.";
            enviar = true;
        }

        if (!clave.match(/([A-Z])/)){
           msjMostrar += "<br>-Clave invalida Falta una letra mayuscula.";
            enviar = true;
        }

        if (!clave.match(/([a-z])/)){
            msjMostrar += "<br>-Clave invalida Falta una letra minuscula.";
             enviar = true;
         }

         if (!clave.match(/([0-9])/)){
            msjMostrar += "<br>-Clave invalida Debe contener al menos un numero.";
            enviar = true;
         }

        if (!clave.match(/([!,%,&,@,#,$,^,,?,_,~,.])/)){
            msjMostrar += "<br>-Clave invalida Debe contener un caracter especial  !,%,&,@,#,$,^,,?,_,~,.";
            enviar = true;
         }

        //valida la clave confirmada

        if (con_clave.trim() != clave.trim()){
            msjMostrar += "<br>-La clave confirmada  no es la misma.";
            enviar = true;

        }


        //validar correo

        if((correo).trim().indexOf('@', 0) == -1 || (correo).trim().indexOf('.', 0) == -1) {
            msjMostrar += "<br>-El correo electrónico introducido es invalido. Debe contener un @.";
            enviar = true;
        }

        if(correo.trim() == ""){
            msjMostrar += "<br>-El campo correo no puede estar vacio.";
            enviar = true;
        }

        //validar telefono


        if(contacto.trim() == ""){
            msjMostrar += "<br>-El campo teléfono no puede estar vacio.";
            enviar = true;
        }
        
        if(contacto.trim().length < 9 || contacto.trim().length > 12){
            msjMostrar += "<br>-El télefono son entre 9 y 11 numeros.";
            enviar = true;
        }

        if (contacto.match(/([a-z , A-Z])/)){
            msjMostrar +="<br>-El campo télefono no permite letras.";
            enviar = true;
         }

        if (contacto.match(/([!,%,&,@,#,$,^,,?,_,~,.,])/)){
            msjMostrar += "<br>-El teléfono no permite caracteres especiales excepto el +";
            enviar = true;
         }

        

        //validar edad
        
        if(edad < 15){
            msjMostrar += "<br>-Para registrarse debe tener una edad minima de 15 años. ";
            enviar = true;

        }
        

        if(enviar){
            $("#mensaje_register").html(msjMostrar);
        }
        else{
            $("#mensaje_register").html("Enviado");
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