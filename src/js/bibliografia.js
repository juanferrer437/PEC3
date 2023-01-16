const jsonData = require('./obras.json');
let salida = "<table><thead><th>Imagen</th><th>Año</th><th>Título no original (español)</th><th>Título original</th></thead><tbody>";
for (let element of jsonData) {
    if (element.id % 2 == 0) {
        if (element.id==14) {
            salida += `<tr><td><a href="./detalle.html"><img class="icono" src="https://dainty-starburst-7bf821.netlify.app/logodetalle2.1b7c0a85.webp"></a></td><td><a href="./detalle.html">${element.date}</a></td><td><a href="./detalle.html">${element.titulo}</a></td><td><a href="./detalle.html">${element.original}</a></td></tr>`;        
        }
        else {
        salida += `<tr><td></td><td>${element.date}</td><td>${element.titulo}</td><td>${element.original}</td></tr>`;
    }}
    else {
        salida += `<tr class="alt"><td></td><td>${element.date}</td><td>${element.titulo}</td><td>${element.original}</td></tr>`;
    }
}


salida += "</tbody></table>";
document.querySelector("#tabla").innerHTML = salida;