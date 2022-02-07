"use strict"

/*------------------DISPLAYS----------------*/
var ingresoPalabra = document.querySelector(".ingreso-palabra");
var ahorcado = document.querySelector(".juego");
var inicio = document.querySelector(".inicio");

function juego(){
    ingresoPalabra.style.display = "none";
    ahorcado.style.display = "block";
    }

var comenzar = document.querySelector("#comenzar");
    comenzar.addEventListener("click",function(event){
    event.preventDefault();  
    iniciarJuego();
    juego();
    teclado();
    });

var displayPalabra = document.querySelector("#displayInputPalabra");
    displayPalabra.addEventListener("click",function(event){
    event.preventDefault();  
    ingresoPalabra.style.display = "block";
    ahorcado.style.display = "none";
    inicio.style.display = "none";
    iniciarJuego();
    }); 
   
var displayjuego = document.querySelector("#iniciar-juego");
    displayjuego.addEventListener("click",function(event){ 
    event.preventDefault();
    ingresoPalabra.style.display = "none";
    ahorcado.style.display = "block";
    inicio.style.display = "none";
    iniciarJuego();
    teclado();
    });

var reinicio = document.querySelector("#cancelar");
    reinicio.addEventListener("click",function(event){
    event.preventDefault();  
    ingresoPalabra.style.display = "none";
    ahorcado.style.display = "none";
    inicio.style.display = "block";
    location.reload();
    }); 

var salir = document.querySelector("#salir");
    salir.addEventListener("click",function(event){
    event.preventDefault();  
    ingresoPalabra.style.display = "none";
    ahorcado.style.display = "none";
    inicio.style.display = "block";
    location.reload();
    }); 