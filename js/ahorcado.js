"use strict"

var arrayPalabra = ["ALURA","ORACLE","GATO","PERRO","CONEJO"];
var random = Math.floor(Math.random()*arrayPalabra.length); //calcular palabra aleatoria - Math.floor() devuelve el valor entero redondeado más bajo. = indice
var palRandom = arrayPalabra[random];                       //muestra la palabra del arreglo
var palabraSecreta = palRandom.replace(/./g, "_");          //enmascara palabra random 
    document.querySelector("#input-mascara").value = palabraSecreta ;
//var longitud = palRandom.length; //cantidad de caracteres
                                                   
  console.log("Palabra random > " + palRandom);             //Muestra palabra random
  console.log(palRandom + " - " + palabraSecreta);    

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
    
});
     
