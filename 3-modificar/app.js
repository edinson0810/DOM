// // inserAdjacent

const card =  {
    id: 1,
    name: "Titulo de la nueva card",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  };

  const $cards = document.querySelector("#cards");
  

//  crear elementos de la cards
const $card = document.createElement("div");
const $card_header = document.createElement("div");
const $card_h2 = document.createElement("h2");
const $card_body = document.createElement("div");
const $card_img = document.createElement("img");
const $card_paragraph = document.createElement("p")
const $button = document.createElement("a");
const $button_span = document.createElement("span");
const $button_icon = document.createElement("i");


// agregar los estilos

$card.classList.add("card");
$card_header.classList.add("card_header");
$card_h2.classList.add("card_title");
$card_body.classList.add("card_body");
$card_img.classList.add("card_img");
$card_paragraph.classList.add("card_paragraph");
$button.classList.add("button", "button--outline");
$button_span.classList.add("button_text");
$button_icon.classList.add("bx", "bxs-chevro-right", "button_icon");

// agregamos los valores del objeto a los elementos

$card_h2.textContent = card.name;
$card_paragraph.textContent = card.paragraph;
$button_span.textContent = "saber mas";
  
// agregar los atributos

$card_img.setAttribute("src", card.img);
$card_img.setAttribute("alt", card.name);
$button.setAttribute("href", "#");

// agregamos los elementos hijos
$card_header.append($card_h2);
$button.append($button_span, $button_icon);
$card_body.append($card_img, $card_paragraph, $button);
$card.append($card_header, $card_body);

// insertAdjacent...
// se agrega de primera dentro de la cards
// $cards.insertAdjacentElement("afterbegin", $card)
// se agrega por fuera de ultimo
// $cards.insertAdjacentElement("afterend", $card);
// antes de la cards
// $cards.insertAdjacentElement("beforebegin", $card);
// se agrega de ultimo
// $cards.insertAdjacentElement("beforeend", $card);

console.log($cards.children);


// recorrer la HTMLCollection
// for (let i = 0; $cards.children.length > i; i++) {
//     console.log($cards.children[i]);
        
// }

// arreglo para recorrer la HTMLAllCollection
const array = [...cards.children];
array.map((item, index, array) => {
    console.log(item);
    // eliminar el hijo
    // $cards.removeChild(item);

    // cambiar el color a los botenes si es par o impar
    if (index % 2 === 0) {
        console.log((item.querySelector("a")));
        item.querySelector(`a`).classList.toggle(`bg-error`)
        
        } else {
            item.querySelector(`a`).classList.toggle(`bg-white`)
       
    }
})

// const rray = [...cards.children];
// rray.map((item, index, rray) => {
//     if (index % 2 === 0) {
//         item.querySelector(`h2`).classList.toggle(`bg-error`)
        
//     } else{
//         item.querySelector(`h2`).classList.toggle(`bg-white`)
//     }
// })


