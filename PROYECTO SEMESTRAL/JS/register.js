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
            msjMostrar = msjMostrar + "-El nombre debe tener entre 4 y 10 caracteres";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>-El nombre debe comenzar con mayúscula";
            enviar = true;
        }
    
        
        if(nombre.trim() == ""){
            msjMostrar += "<br>-El campo nombre no puede estar vacio";
            enviar = true;
        }

        //Validar Apellido
        if(apellido.trim().length < 4 || apellido.trim().length > 10){
            msjMostrar = msjMostrar + "<br>-El apellido debe tener entre 4 y 10 caracteres";
            enviar = true;
        }

        var letra = apellido.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>-El apellido debe comenzar con mayúscula";
            enviar = true;
        }


        if(apellido.trim() == ""){
            msjMostrar += "<br>-El campo apellido no puede estar vacio";
            enviar = true;
        }

        //validar password
        if(clave.trim().length < 8 || clave.trim().length > 12){
            msjMostrar = msjMostrar + "<br>-Clave invalida debe tener entre 8 y 12 caracteres";
            enviar = true;
        }

        if(clave.trim()  == ""){
            msjMostrar += "<br>-Clave invalida no puede estar vacia";
            enviar = true;
        }

        if (!clave.match(/([A-Z])/)){
           msjMostrar += "<br>-Clave invalida Falta una letra mayuscula";
            enviar = true;
        }

        if (!clave.match(/([a-z])/)){
            msjMostrar += "<br>-Clave invalida Falta una letra minuscula";
             enviar = true;
         }

         if (!clave.match(/([0-9])/)){
            msjMostrar += "<br>-Clave invalida Debe contener al menos un numero";
            enviar = true;
         }

        if (!clave.match(/([!,%,&,@,#,$,^,,?,_,~,.])/)){
            msjMostrar += "<br>-Clave invalida Debe contener un caracter especial";
            enviar = true;
         }

        //valida la clave confirmada

        if (con_clave.trim() != clave.trim()){
            msjMostrar += "<br>-La clave no es la misma";
            enviar = true;

        }


        //validar correo

        if((correo).trim().indexOf('@', 0) == -1 || (correo).trim().indexOf('.', 0) == -1) {
            msjMostrar += "<br>-El correo electrónico introducido es invalido. Debe contener un @";
            enviar = true;
        }

        if(correo.trim() == ""){
            msjMostrar += "<br>-El campo correo no puede estar vacio";
            enviar = true;
        }

        //validar telefono


        if(contacto.trim() == ""){
            msjMostrar += "<br>-El campo telefono no puede estar vacio";
            enviar = true;
        }
        if(contacto.trim().length < 9 || contacto.trim().length > 9){
            msjMostrar += "<br>-Telefono invalido. Deben ser 9 numeros "
            enviar = true;
        }

        //validar edad
        
        if(edad < 15){
            msjMostrar += "<br>-Para registrarse debe tener una edad minima de 15 años";
            enviar = true;
        }

        //validar fecha nacimiento

        function isValidDate(dateString){
        // revisar el patrón
            if(!/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateString))
            return false;

        // convertir los numeros a enteros
            var parts = dateString.split("/");
            var day = parseInt(parts[2], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[0], 10);

        // Revisar los rangos de año y mes
            if( (year < 1000)  (year > 3000)  (month == 0)  (month > 12) ){

            
            return false;
            }
            var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Ajustar para los años bisiestos
            if(year % 400 == 0  (year % 100 != 0 && year % 4 == 0))
                monthLength[1] = 29;
                
           

        // Revisar el rango del dia
        return day > 0 && day <= monthLength[month - 1];
        
        
        
        };

        
        

        $("#formregister").click(function() {
            alert( isValidDate($("#f_nac").val()) );

            msjMostrar += "hola";
            enviar = true;

        });

            

        

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