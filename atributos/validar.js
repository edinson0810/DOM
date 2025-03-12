const dom = document;

const is_valid = (event, formulario) => {
    event.preventDefault();
    const lista = dom.querySelector(formulario);
    console.log(lista.children);

    for (const child of lista.children) {
        if (child.tagName == "SELECT") {
            // console.log(child.tagName);
            // console.log(child.atributes);
            for(const name of child.getAttributeNames()){
                const value = child.dataset.required;
                if(name === "data-required" && value === "true") {
                    // console.log(name, value, child);
                    
                    if ( child.selectedIndex == 0) {
                        child.classList.add("error");
                    } else {
                        child.classList.remove("error")
                    }
                }
            }
            
            
        }
        
    }
    return bandera;    
}
export default is_valid;



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



