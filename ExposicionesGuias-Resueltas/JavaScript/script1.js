var elemento=document.createElement("li");
    contenido=document.createTextNode("Nuevo texto de la lista");

elemento.appendChild(contenido);

var padre=document.getElementsByTagName("li")[0].parentNode;
padre.appendChild(elemento);


var primerElemento=document.getElementById("primero");
primerElemento.innerHTML="Nuevo <strong>Texto1</strong>"


var elemento=document.createElement("li"),
    contenido=document.createTextNode("Nuevo texto3");

elemento.appendChild(contenido);
var padre=document.getElementsByTagName("li")[0].parentNode;
var referencia=document.getElementsByTagName("li")[1];
padre.replaceChild(elemento,referencia);

var padre=document.getElementsByTagName("li")[0].parentNode;
var referencia=document.getElementsByTagName("li")[0];
padre.removeChild(referencia);
