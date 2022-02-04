/*--------------------VALIDACIONES--------------------------*/
function validarTexto(texto){
    var array = texto.split(''); 
    for(var i = 0; i < array.length; i++){
       if(array[i].codePointAt(0) < 65 || array[i].codePointAt(0) > 90){   
           return true;
    
       }
    }
}