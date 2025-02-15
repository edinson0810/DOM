// const padre = document.querySelector(`.container`);
// console.log(padre);
// const nodo = document.createElement("h2");
// padre.appendChild(nodo);
// identificar el id list
const list = document.querySelector("#list");
// crear una nueva lista
let html = document.createElement("li");
// agregar nuevo item
html.textContent = "Item Nuevo";
// agregar el nuevo texto
html.classList.add("item");
list.appendChild(html);


let html1 = document.createElement("li");
let css = document.createElement("li");
let js = document.createElement("li");

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JS";

html.classList.add("item");
css.classList.add("item");
js.classList.add("item");

list.appendChild(html);
list.appendChild(css);
list.appendChild(js);


const card = document.querySelector(".card");
const final = document.querySelector("#list");
const titulo = document.createElement("h2");
titulo.textContent = "Soy el titulo nuevo";
// card.appendChild(titulo);
card.insertBefore(titulo, final);


