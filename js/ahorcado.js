"use strict"                 

var arrayPalabra = ["ALURA","ORACLE","GATO","PERRO","CONEJO"];         
var palabra = palabraRandom(arrayPalabra);
var mascara = document.querySelector("#input-mascara");
var letrasRestantes = palabra.length;

/*------------------SALIDA----------------*/
var palabraSecreta = [];
    for (var i = 0; i < palabra.length; i++) {
        palabraSecreta[i] = "_";   
    }
    mascara.value = palabraSecreta.join("");

/*------------------PALABRA RANDOM----------------*/
function palabraRandom(){
    var random = Math.floor(Math.random()*arrayPalabra.length); 
    var palRandom = arrayPalabra[random];
    console.log(palRandom)                                    
    return palRandom;
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
            console.log(arrayPalabra);
            
        }else{
            alert("Ingrese por favor sólo letras MAYÚSCULAS y sin tilde. No se permiten caracteres especiales".toUpperCase());
        } 
        document.querySelector("#input-nueva-palabra").value = "";
});
     
/*------------------TECLADO-----------------*/
function teclado(){
       var A = 65;
       var Z = 91;
       var teclas = document.querySelector("#letras");

       for (var i = A; i < Z; i++){
           var char = String.fromCharCode(i);

           var tecla = document.createElement("div");
           tecla.classList.add("abc",)
           tecla.setAttribute("id", "letr", + char);
           tecla.textContent = char;
           tecla.addEventListener("click", function(event){
                 var clickLetra = event.target.textContent
                 document.querySelector("#letra").value = clickLetra;
                 console.log(clickLetra);
           });
           teclas.appendChild(tecla);
       }
}

/*------------------BOTÓN COMPROBAR-----------------*/
var btnComprobar = document.querySelector("#comprobar");
    btnComprobar.addEventListener("click",function(event){
    event.preventDefault(); 
    console.log("botón presionado");
        var letra = document.querySelector("#letra").value;
            for (var x = 0; x < palabra.length; x++){   
                if (palabra[x] === letra){       
                //reemplazo();
                palabraSecreta[x] = letra;
                console.log(palabra + " contiene la letra > " + letra + "; en index > " + i );
                letrasRestantes--;    
                }
                mascara.value = palabraSecreta.join("");
            }  
            document.querySelector("#letra").value = "";     
});