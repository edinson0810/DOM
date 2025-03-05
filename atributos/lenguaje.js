export async function Lenguaje() {
    try {
        const data = await fetch(`lenguajeProgramacion.json`)
        const lenguajeData = await data.json();
        console.log(lenguajeData);
        
        const checkboxContainer = document.createElement("div")
       
        lenguajeData.forEach(lenguaje => {
           const $checkbox = document.createElement("input");
           $checkbox.setAttribute("type", "checkbox");
           $checkbox.setAttribute("name", "lenguaje")
           $checkbox.setAttribute("id",`lenguajes-${lenguaje.id}`)
           $checkbox.setAttribute("value", `${lenguaje.tipo}`)
        //    console.log($checkbox);
           

           const checkboxLabel = document.createElement("label")
           checkboxLabel.setAttribute("id", `lenguaje-${lenguaje.tipo}`)
           checkboxLabel.textContent = lenguaje.tipo
           checkboxContainer.append(checkboxLabel, $checkbox)
        //    console.log(checkboxLabel);
           
          
           
        });
formulario.append(checkboxContainer)
const input = formulario.querySelector("#telefono")
input.insertAdjacentElement("beforebegin", checkboxContainer)
    } catch (error) {
        console.log("error al cargar el JSON", error);
        
    }
    
}

Lenguaje();



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

// Lenguaje();
