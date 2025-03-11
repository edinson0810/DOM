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

// Crear el formulario dinámicamente
const form = document.createElement("form");
form.id = "miFormulario";

// Crear campo de Nombre
const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.placeholder = "Nombre";
inputNombre.id = "nombre";
form.appendChild(inputNombre);

// Crear campo de Correo
const inputCorreo = document.createElement("input");
inputCorreo.type = "email";
inputCorreo.placeholder = "Correo";
inputCorreo.id = "correo";
form.appendChild(inputCorreo);

// Crear campo de Contraseña
const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.placeholder = "Contraseña";
inputPassword.id = "password";
form.appendChild(inputPassword);

// Botón de envío
const botonEnviar = document.createElement("button");
botonEnviar.textContent = "Enviar";
botonEnviar.type = "submit";
form.appendChild(botonEnviar);

// Agregar el formulario al cuerpo
document.body.appendChild(form);

// Capturar el evento de envío y validar
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío por defecto

  // Obtener valores
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  // Expresión regular para validar el correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Limpiar mensajes previos
  document.querySelectorAll(".error").forEach((el) => el.remove());

  let valido = true;

  // Validar Nombre
  if (nombre === "") {
    mostrarError("El nombre no puede estar vacío", inputNombre);
    valido = false;
  }

  // Validar Correo
  if (!emailRegex.test(correo)) {
    mostrarError("Correo inválido", inputCorreo);
    valido = false;
  }

  // Validar Contraseña
  if (password.length < 6) {
    mostrarError("La contraseña debe tener al menos 6 caracteres", inputPassword);
    valido = false;
  }

  // Si todo es válido, mostrar mensaje
  if (valido) {
    alert("Formulario enviado correctamente");
  }
});

// Función para mostrar mensajes de error
function mostrarError(mensaje, elemento) {
  const error = document.createElement("p");
  error.textContent = mensaje;
  error.style.color = "red";
  error.classList.add("error"); // Clase para eliminar después
  elemento.insertAdjacentElement("afterend", error);
}








