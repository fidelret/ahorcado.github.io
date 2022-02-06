"use strict"                   //SE PUEDEN COMPROBAR LOS EVENTOS EN LA CONSOLA

var arrayPalabra = ["ALURA","ORACLE","GATO","PERRO","CONEJO"];         
var palabra = palabraRandom();

//var palabra = ""; //randomiza la palabra desde el principio. Y no coincide con el valor calculado al iniciar el juego
                               //Necesito el valor de la funcion sin que vuelva a calcular la palabra. Esto es para iterar las letras ingresadas.
                               // Mas abajo en /*-BOTÓN COMPROBAR-*/

/*------------------PALABRA RANDOM----------------*/
function palabraRandom(){
    var random = Math.floor(Math.random()*arrayPalabra.length); //Calcula la palabra random que se va a mostrar para adivinar.
    var palRandom = arrayPalabra[random];
    console.log(palRandom)                                    
    return palRandom;
}

/*------------------INICIO DE JUEGO----------------*/ //Se utilizará esta función para incluirlos en los displays
function iniciarJuego(){
    var palabraSecreta = palabra;
    console.log(palabraSecreta);
    document.querySelector("#input-mascara").value = palabraSecreta.replace(/./g, "_"); ;
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
        iniciarJuego();
});
    
/*------------------BOTÓN COMPROBAR-----------------*/
/*var btnComprobar = */document.querySelector("#comprobar").addEventListener("click",function(event){
    /*btnComprobar.addEventListener("click",function(event){*/
    event.preventDefault(); 
    console.log("botón presionado");
    //var palabra; //Capturar la palabra random.
        var letra = document.querySelector("#letra-ingresada").value;
            for (var i = 0; i < palabra.length; i++){   
                if (letra == palabra[i]){       
                console.log(palabra + " contiene la letra > " + letra + "; en index > " + i ); 
                document.querySelector("#letra-ingresada").value = "";  
                }
            }      
});
