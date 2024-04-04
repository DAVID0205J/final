import { lista_de_componentes } from "./data.js";

let div_soporte = document.querySelector(".contenido")

lista_de_componentes.forEach((cada_categoria)=>{

    let div=document.createElement("div")
    div.innerHTML=`
    
        <img src="${cada_categoria.img}" alt="">
        <h2>${cada_categoria.nombre}</h2>
        <span>${cada_categoria.cantidad}</span>
        <div class="div_categoria"></div>

    `;

    div_soporte.appendChild(div);

})