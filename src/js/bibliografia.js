const jsonData = require('./obras.json');
let salida = ` <table class="colapsado">
<thead><th>Imagen</th><th>Año</th><th>Título no original (español)</th><th>Título original</th></thead><tbody></tbody>`;
for (let element of jsonData) {
        if (element.id==14) {
            salida += `<tr><td><a href="./detalle.html"><img alt="icono" class="icono" src="https://dainty-starburst-7bf821.netlify.app/logodetalle2.1b7c0a85.webp"></a></td><td><a href="./detalle.html"><strong>${element.date}</strong></a></td><td><a href="./detalle.html"><strong>${element.titulo}</strong></a></td><td><a href="./detalle.html"><strong>${element.original}</strong></a></td></tr>`;        
        }
        else {
        salida += `<tr><td></td><td>${element.date}</td><td>${element.titulo}</td><td>${element.original}</td></tr>`;
    }
}   
    
salida+=`</table>`;
document.querySelector("#tabla").innerHTML=salida;




