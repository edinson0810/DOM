 export const Generos = async () => {
    const generos = await fetch("generos.json");
    const Generos = await generos.json();
console.log(Generos);




const newLabel = document.createElement('label');
newLabel.innerHTML ="Femenino";
//agregando el label
var contenedor = document.getElementById('formulario');
contenedor.append(newLabel);


const Femenino = document.createElement("input")
Femenino.setAttribute("type", "radio");

const newLabel1 = document.createElement('label');
newLabel1.innerHTML ="Masculino";
//agregando el label
var contenedor = document.getElementById('formulario');
contenedor.append(newLabel1);


const masculino = document.createElement("input")
masculino.setAttribute("type", "radio")



  formulario.append(newLabel,Femenino,newLabel1,masculino)



      };

  Generos();


