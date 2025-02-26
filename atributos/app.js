const body = document.body;
const formulario = document.querySelector(`#formulario`)
const nombre = document.getElementById(`nombre`)
const apellido = document.querySelector(`#apellido`)
const telefono = document.querySelector(`#telefono`)
const documento = document.querySelector(`#documento`)
const usuario = documento.querySelector(`#usuario`)
const contrasena = documento.querySelector(`#contrasena`)
const btn = document.querySelector(`button`)

const ciudades = async() => {
    const data = await fetch(`data.json`);
    const ciudades = await data.json();
    console.log(ciudades);
  
  const selectCiudad = document.createElement("select")
  ciudades.forEach(ciudad => {
    const opcion = document.createElement("option");
    opcion.value = ciudades.nombre;
    opcion.textContent = ciudad.nombre;
    selectCiudad.append(opcion)
  });



  formulario.append(selectCiudad)
}

ciudades();





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

// // presionaste la tecla 
// const keydown = (event) => {
//     console.log(`presionaste la tecla ${event.key}`)
//     console.log(`presionaste ${event.keypress}`);
//     console.log(`presionaste ${event.keyup}`);
    
// }
// nombre.addEventListener(`keydown`, keydown)











