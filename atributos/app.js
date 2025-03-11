import { Generos } from "./module.js";
import { Lenguaje } from "./lenguaje.js";



const body = document.querySelector("body");
const formulario = document.querySelector("#formulario");
const nombre = document.getElementById("nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const documento = document.querySelector("#documento");
const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contrasena");
const btn = document.querySelector("button");

const terminos = document.createElement("input");
terminos.setAttribute("type", "checkbox");
const Rado = document.createElement("input");
Rado.setAttribute("type", "radio");
btn.disabled = true;
btn.insertAdjacentElement("beforebegin", terminos);

//convertir archivo json a datos primitivos JS
const ciudades = async () => {
  const data = await fetch("data.json");
  const ciudades = await data.json();
  const combo = document.createElement("select");
  combo.name = "ciudad_id";
  combo.id = "ciudad_id";
  const defecto = document.createElement("option");
  defecto.textContent = "Seleccione ciudad...";
  combo.append(defecto);
  const opciones = document.createDocumentFragment();
  ciudades.forEach(({ nombre, id }) => {
    const option = document.createElement("option");
    // combo.setAttribute("requerid")
    option.textContent = nombre;
    option.value = id;
    const clon = document.importNode(option, true);
    opciones.append(clon);
  });
  combo.append(opciones);
  formulario.insertAdjacentElement("afterbegin", combo);
};
ciudades();



// validar un formulario
const validar = (event) => {
  // detenemos el evento
  event.preventDefault();

  // validamos los campos
  if (nombre.value == "") {
    alert("El nombre es obligatorio");
    nombre.focus();
  }
  if (apellido.value == "") {
    alert("El apellido es obligatorio");
    apellido.focus();
  }
  if (telefono.value == "") {
    alert("El telefono es obligatorio");
    telefono.focus();
  }
  if (documento.value == "") {
    alert("El documento es obligatorio");
    documento.focus();
  }
  if (usuario.value == "") {
    alert("El usuario es obligatorio");
    usuario.focus();
  }
  if (contrasena.value == "") {
    alert("La contraseña es obligatoria");
    contrasena.focus();
  }
};
const contextMenu = () => {
//   alert("?"); 
};
const dblclick = () => {
//   alert("doble click"); 
};
const mousedown = () => {
//   alert(
//     "El evento funciona cuando se mantiene presiono cualquier click sobre el elemento"
//   );
}; 
const keydown = (event) => {
//   alert(`Presionaste la tecla ${event.key}`);
}; 


//Validar checkbox
const validar_terminos = () => {
//   if (terminos.checked) {
//     btn.removeAttribute("disabled", "");
//   } else {
//     btn.setAttribute("disabled", "");
//   }
(terminos.checked) ? btn.removeAttribute("disabled", " "): btn.setAttribute("disabled", " ");
};
nombre.addEventListener("keydown",keydown);
terminos.addEventListener("change",validar_terminos);
// btn.addEventListener("click", validar);
terminos.addEventListener("submit", validar);




// // nombre.addEventListener("keydown", keydown)
// box.addEventListener("change", validar_terminos)



// const validar = (event) => {
//     // detenemos el evento
//     event.preventDefault()
// if (nombre.value != ``) {
//     alert("el nombre es obligatotia");
//     nombre.focus()
// }
// }

// // le pongo el evento click
// btn.addEventListener(`click`, validar)
// // le quito el evento click
// btn.removeEventListener(`click`, validar)


// // capturar el click derecho en el formulario
// const contextmenu = () => {
// alert(`?`)
// }
// body.addEventListener(`contextmenu`, contextmenu )
// // formulario.addEventListener(`contextmenu`, contextmenu )


// // capturar doble click sale el mensaje
// const dblclick = () => {
//     alert(`doble click`)
// }
// body.addEventListener(`dblclick`, dblclick)


// // captura cualquier click y se muestra la alerta
// const mousedown = () => {
//     alert(` el evento funciona cuando se presiona cualquier boton sobre el elemento`)
// }
// body.addEventListener(`mousedown`,mousedown)

// presionaste la tecla 
// const keydown = (event) => {
//     // console.log(`presionaste la tecla ${event.key}`)
//     // console.log(`presionaste ${event.keypress}`);
//     // console.log(`presionaste ${event.keyup}`);
    
// }
// nombre.addEventListener(`keydown`, keydown)


// formulario.addEventListener("Submit", function(event) {
//  const $nombre = documento.getElementById("nombre").value.trim();
//  event.preventDefault();

// let valido = true;

// if ($nombrenombre === " ") {
//   mostrarError("el nombre no puede estar vacio", inputNombre);
//   valido = false;
// }


// });









