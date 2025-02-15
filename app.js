const win = window
const dom = document;
const head = dom.head;
const body = dom.body;
const title = dom.title;
// const header = dom.header;
const header = dom.querySelector(`header`);
const paragraph = dom.querySelector(`p`);
let styles = dom.styleSheets;
const script = dom.scripts;
// para saber cuantos links tenemos
const links = dom.links; 
// para saber cuantas imagenes tenemos
const img = dom.images;
// para saber cuantos formularios tenemos
const form = dom.forms;
const documento = dom.getElementById("documento");
const api = dom.getElementById("api");
// const lista = dom.getElementsByClassName(`item`);
// solo el primero 
// const lista = dom.querySelector(`.item`)
const lista = dom.querySelectorAll(`.item`);

const padre = dom.querySelector(`ul`);
const hermanos = dom.querySelectorAll(`ul.list>li.item`);



// console.log(dom);

// console.log(head);

// console.log(body);

// console.log(title);
// console.log(header);
// console.log(paragraph);
// console.log(styles);
// console.log(script);
// console.log(links);
// console.log(img);
// console.log(form);
// console.log(documento);
// console.log(api);
// console.log(lista);
// console.log(hermanos);
// documento.innerHTML = "que es el dom";
// documento.innerText = " ¿que es el dom? ";
// console.log(padre);
// console.log(padre.childNodes);
// console.log(padre.chidElementCount);
// console.log(padre.children);
// console.log(padre.firstChild);
// console.log(padre.lastChild);

// console.log(padre.nextSibling);
// console.log(padre.previousSibling);
// console.log(padre.previousElementSibling);
// console.log(padre.nextElementSibling);

console.log(padre.parentNode);
console.log(padre.parentElement);



























