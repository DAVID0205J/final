
let root = document.querySelector("#root");

function cargarDiv (){
    divs.innerHTML = `
    <header id="header">Titulo</header>
    <div class="descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dicta maiores ipsam praesentium. Necessitatibus, expedita animi ex illo unde corrupti tempora obcaecati consequatur adipisci odit, possimus, doloribus alias asperiores cum?</div>
    <footer class="boton"> <button>boton</button></footer>
    `;
}
cargarDiv();

root.innerHTML =  componentes;