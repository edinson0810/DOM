
/**
 * 
 * @param {*} event 
 * @param {*} formularioId 
 * @returns 
 */
export const is_valid = (event, formularioId) => {
    event.preventDefault();

    const form = document.querySelector(formularioId); // Obtiene el formulario correctamente
    
    if (!form) {
        console.error("Formulario no encontrado:", formularioId);
        return;
    }

    
    for (const child of form.children) {        
        if (child.tagName === "SELECT") { 
            console.log(child);
            child.focus();
            
            for (const name of child.getAttributeNames()) {
                const value = child.dataset.required;
                console.log(value);                
                if (name === 'data-required' && value === "true") {
                    if (child.selectedIndex == 0) {
                        alert(`El campo "${child.name}" es obligatorio`);
                        child.classList.add('error');
                    } else {
                        child.classList.remove('error');
                    }
                }
            }
        }
        if (child.tagName === "INPUT") { 
            child.setAttribute('data-required', 'true')
            if (child.hasAttribute("data-required") && child.dataset.required === "true") {
                if (child.value.trim() === "") { // Verifica si el input está vacío
                    alert(`El campo "${child.name}" es obligatorio`);
                    child.classList.add('error');
                } else {
                    child.classList.remove('error');
                }
            }
        }
        if (nombre.value == "") {
            alert("El nombre es obligatorio");
            nombre.focus();
            return;
        }
        

        
    }
    let bandera = true;
    return bandera;
}


// export const is_valid = (event, formularioId) => {
//     event.preventDefault();

//     const form = document.querySelector(formularioId); // Obtiene el formulario correctamente
    
//     if (!form) {
//         console.error("Formulario no encontrado:", formularioId);
//         return;
//     }

//     let bandera = true;

//     for (const child of form.children) {        
//         if (child.tagName === "SELECT") { 
//             const isRequired = child.dataset.required === "true";
            
//             if (isRequired && child.selectedIndex === 0) {
//                 alert(`El campo "${child.name}" es obligatorio`);
//                 child.classList.add('error');
//                 child.focus();  // Agregamos el focus si no tiene opción seleccionada
//                 bandera = false;
//                 return;  // Salimos de la función después del primer error
//             } else {
//                 child.classList.remove('error');
//             }
//         }

//         if (child.tagName === "INPUT") { 
//             child.setAttribute('data-required', 'true');
            
//             if (child.dataset.required === "true" && child.value.trim() === "") { 
//                 alert(`El campo "${child.name}" es obligatorio`);
//                 child.classList.add('error');
//                 child.focus();  // Agregamos el focus en el primer campo vacío
//                 bandera = false;
//                 return;  // Detenemos la validación en el primer error
//             } else {
//                 child.classList.remove('error');
//             }
//         }
//     }

//     return bandera;
// }








// // validando sin el select ni checkout, radio
// const btn = document.querySelector("button");
//  export const validarFormulario = (event) => {
//     event.preventDefault(); 

//        if (nombre.value == "") {
//         alert("El nombre es obligatorio");
//         nombre.focus();
//         return;
//     }
//     if (apellido.value == "") {
//         alert("El apellido es obligatorio");
//         apellido.focus();
//         return;
//     }
//     if (telefono.value == "") {
//         alert("El teléfono es obligatorio");
//         telefono.focus();
//         return;
//     }
//     if (documento.value == "") {
//         alert("El documento es obligatorio");
//         documento.focus();
//         return;
//     }
//     if (usuario.value == "") {
//         alert("El usuario es obligatorio");
//         usuario.focus();
//         return;
//     }
//     if (contrasena.value == "") {
//         alert("La contraseña es obligatoria");
//         contrasena.focus();
//         return;
//     }

//     alert("Formulario enviado correctamente");
//     formulario.submit(); 
// };

// btn.addEventListener("click", validarFormulario);



