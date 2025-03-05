export async function Lenguaje(formulario) {
    try {
        const data = await fetch(`lenguajeProgramacion.json`)
        const lenguajeData = await data.json();
        const containerCheck = document.createElement("div")
        lenguajeData.forEach(lenguaje => {
           const $checkbox = document.createElement("input");
           $checkbox.setAttribute("type", "checkbox");
           $checkbox.setAttribute("name", "lenguaje")
           $checkbox.setAttribute("id",`lenguajes-${lenguaje.id}`)
           $checkbox.setAttribute("value", `${lenguaje.lenguaje}`)

           const labelCheck = document.createElement("label")
           labelCheck.setAttribute("id", `lenguajes-${lenguaje.id}`)
           labelCheck.textContent = lenguaje.lenguaje
           labelCheck.append($checkbox, labelCheck)

        });

const input = formulario.querySelector("#telefeno")
input.insertAdjacentElement("beforegefin", containerCheck)
    } catch (error) {
        console.log("error al cargar el JSON", error);
        
    }
}


// export const Lenguaje = async () => {
//     const lenguajeProgramacion = await fetch("lenguajeProgramacion.json");
//     const Lenguaje = await lenguajeProgramacion.json();

//     console.log(Lenguaje);

//  const containerCheck = document.createElement("div")
//  containerCheck.classList.add("div1");
 
//  lenguajeProgramacion.forEach(lengua => {
//     const $checkbox = document.createElement("input")
//     $checkbox.setAttribute("type", "checkbox")
//     $checkbox.setAttribute("name", "lengua")
//     $checkbox.setAttribute(`id`, `lenguajes-${lengua.id}`)
//     $checkbox.setAttribute("value", `${lengua.lengua}`)
//     const boxLabel = document.createElement("label")
//     boxLabel.setAttribute("id", `lenguajes-${lengua.id}`)
//     boxLabel.textContent = lengua.lengua
//     containerCheck.append($checkbox, boxLabel)
//  });
//  const input = formulario.querySelector("#telefono")
//  input.insertAdjacentElement("beforebegin", containerCheck)
// }

Lenguaje();
