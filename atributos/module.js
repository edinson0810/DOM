 export const Generos = async () => {
    const generos = await fetch("generos.json");
    const Generos = await generos.json();





const div = document.createElement("div")
div.classList.add("div1")

// primer label y radio

const label = document.createElement("label")
label.textContent = "Femino"
label.setAttribute("for", "radio1")

const radio = document.createElement("input")
radio.type = "radio"
radio.id = "radio1"
radio.name = "opciones";

// segundo label y radio

const  label1 = document.createElement("label")
 label1.textContent = "Masculino"
 label1.setAttribute("for", "radio2")

const radio1 = document.createElement("input")
radio1.type= "radio"
radio1.id = "radio2"
radio1.name = "opciones"

div.appendChild(label)
div.appendChild(radio)
div.appendChild(label1);
div.appendChild(radio1)

formulario.appendChild(div)

const btn = formulario.querySelector("button")
btn.insertAdjacentElement("beforebegin", div);

const div2 = document.createElement("div")
div.classList.add("div1")

// // segundo label y radio

// const label2 = document.createElement("label")
// label.textContent = "HTML"
// label.setAttribute("for", "checkbox")

// const checkbox = document.createElement("input")
// checkbox.type = "checkbox"
// checkbox.id = "checkbox"
// checkbox.name = "opciones";

// // // segundo label y radio

// const  label3 = document.createElement("label")
//  label3.textContent = "CSS"
//  label3.setAttribute("for", "checkbox2")

// const checkbox1 = document.createElement("input")
// checkbox1.type= "checkbox"
// checkbox.id = "checkbox2"
// checkbox.name = "opciones"

// div2.appendChild(label2)
// div2.appendChild(checkbox)
// div2.appendChild(label3);
// div2.appendChild(checkbox1)





// const newLabel = document.createElement('label');
// newLabel.innerHTML ="Femenino";
// //agregando el label
// var contenedor = document.getElementById('formulario');
// contenedor.append(newLabel);


// const Femenino = document.createElement("input")
// Femenino.setAttribute("type", "radio");

// const newLabel1 = document.createElement('label');
// newLabel1.innerHTML ="Masculino";
// //agregando el label
// var contenedor = document.getElementById('formulario');
// contenedor.append(newLabel1);


// const masculino = document.createElement("input")
// masculino.setAttribute("type", "radio")



//   formulario.append(newLabel,Femenino,newLabel1,masculino)



      };

  Generos();


