import { Generos } from "./module.js";
import { Lenguaje } from "./lenguaje.js";
import { ciudades } from "./ciudades.js";
// import { validarFormulario } from "./validar.js";
import { is_valid } from "./validar.js";


const body = document.querySelector('body')
const form = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const documento = document.querySelector('#documento');
const usuario = document.querySelector('#usuario');
const password = document.querySelector('#contrasena');
const sel_ciudades = document.createElement('select');
const terminosCheck = document.createElement('input');
const labelTerminos = document.createElement('label');
const label_Gender = document.createElement('h3');
const btn = document.querySelector('button');
const div_genero = document.createElement('div');
const label_lenguajes = document.createElement('h3');
const div_lenguajes = document.createElement('div');
const op_city = document.createElement('option');

sel_ciudades.setAttribute('data-required', 'true');

terminosCheck.type = 'checkbox';
terminosCheck.id = 'terminos'
labelTerminos.textContent = 'Acepta los terminos y politicas de nuestra empresa';
labelTerminos.classList.add('center');
label_Gender.textContent = '¿Cual es tu genero?'
label_lenguajes.textContent = '¿Que lenguajes deseas aprender?'
op_city.textContent = 'Seleccione Ciudad';


div_genero.setAttribute('class', 'div_margin');
div_lenguajes.setAttribute('class', 'div_margin');

btn.insertAdjacentElement('beforebegin', labelTerminos);
btn.insertAdjacentElement('beforebegin', terminosCheck);



div_genero.append(label_Gender);
form.insertBefore(div_genero, btn);


div_lenguajes.append(label_lenguajes);
form.insertBefore(div_lenguajes, telefono)


// form.insertAdjacentElement('afterbegin', sel_ciudades);
// sel_ciudades.append(op_city);


// ciudades(sel_ciudades);
// Generos(div_genero);
// Lenguaje(div_lenguajes);

//btn.addEventListener("click", (event) => validando(event, "#formulario"));
const contextmenu = () => {
    alert('?')
}

const dbleClick = () => {
    alert('Doble Click')
}

const mouseDown = () => {
    alert('mouseDown')
}

const keydown = (event) => {
    console.log(`Presionaste una tecla ${event.key}`);
}

const IsChecked = () =>{
    (!terminosCheck.checked) ? btn.setAttribute('disabled', '') : btn.removeAttribute('disabled', '');
} 

btn.addEventListener("click", (event) => is_valid(event, "#formulario"));

//btn.addEventListener('click', validando);
terminosCheck.addEventListener('change', IsChecked);
// btn.removeEventListener('click', validando)
// body.addEventListener('contextmenu', contextmenu);
// body.addEventListener('dblclick', dbleClick);
// body.addEventListener('mousedown', mouseDown);
// body.addEventListener('keydown', keydown);





