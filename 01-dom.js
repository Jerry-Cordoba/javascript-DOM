/* document.write("Hola desde javascript"); */
/* Devuelve un arreglo de los elementos que tengan esa etiqueta */
/* const title = document.getElementsByTagName("h1");
title[0].innerHTML = "Titulo cambiado desde javascritp";
const texto = document.getElementById("text");
texto.innerHTML = "Este texto esta escrito desde javascritp";
texto.style.background = "blue";
texto.style.color = "white";
console.log(title);
console.log(texto); */

/* Obtiene un elemento por id */
document.getElementById;
/* Obtiene todos los elementos de una clase y devuelve un arreglo */
document.getElementsByClassName;
/* Obtiene todos los elementos por nombre y devuelve un arreglo */
document.getElementsByName;

const texto = document.querySelector("#text");
texto.textContent = "Estoy escribiendo desde el javascritp";

/* Crear elementos html */

const div = document.createElement("div");
const body = document.querySelector("body");

body.append(div);