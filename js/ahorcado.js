"use strict"

var arrayPalabra = ["ALURA","ORACLE","GATO","PERRO","CONEJO"];         
var palabra = iniciarJuego();
//var longitud = palRandom.length; //cantidad de caracteres

function iniciarJuego(){
    var random = Math.floor(Math.random()*arrayPalabra.length); 
    var palRandom = arrayPalabra[random];
    console.log(palRandom); 
    return palRandom;  
}

function enmascarar(){
    var palabraRandom = iniciarJuego();
    var palabraSecreta = palabraRandom.replace(/./g, "_");          
    document.querySelector("#input-mascara").value = palabraSecreta;
}

/*------------------INGRESO PALABRA NUEVA----------------*/
function entrada(){
    var palabraNueva = document.querySelector("#input-nueva-palabra");
    return palabraNueva.value;     
}

/*------------------BOTÓN NUEVA PALABRA-----------------*/
var btnPalabra = document.querySelector("#nueva-palabra");
    btnPalabra.addEventListener("click",function(event){
    event.preventDefault();  
    //console.log("botón presionado");
    var texto = entrada();  
    var validacion = validarTexto(texto);
        if (!validacion){
            arrayPalabra.push(entrada());
            document.querySelector("#input-nueva-palabra").value = "";
            juego();
        }else{
            document.querySelector("#input-nueva-palabra").value = "";
            alert("Ingrese por favor sólo letras MAYÚSCULAS y sin tilde. No se permiten caracteres especiales".toUpperCase());
        } 
        enmascarar();
});
     
var btnComprobar = document.querySelector("#comprobar");
    btnComprobar.addEventListener("click",function(event){
    event.preventDefault(); 
    console.log("botón presionado");
    
        var letra = document.querySelector("#letra-ingresada").value;
            for (var i = 0; i < palabra.length; i++){   
                if (letra == palabra[i]){       
                console.log(palabra + " contiene la letra > " + letra + "; en index > " + i ); 
                document.querySelector("#letra-ingresada").value = "";  
                }
            }
           
});
