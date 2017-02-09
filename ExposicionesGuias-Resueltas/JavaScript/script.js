var elemento = document.createElement("h2");
var contenido = document.createTextNode("Este es el titular");
elemento.appendChild(contenido);
elemento.setAttribute("align","center");
document.getElementById("subtitulo").appendChild(elemento);
