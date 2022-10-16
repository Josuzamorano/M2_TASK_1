import { MyData } from './model.js';
import { DomElement } from './view.js'


let datita = new MyData();
let view = new DomElement();
let eventos;
let page = window.location.pathname.split("/").pop();


console.log(page);
if (page === "index.html") {
    eventos = datita.get__data.events;
}
else if (page === "past-events.html") {
    eventos = datita.get__pastEvents;
}
else if (page === "up-events.html") {
    eventos = datita.get__upcommingEvents;
}


view.card_selection(eventos);
view.checkbox_selection(datita.get__Categoria(eventos));
console.dir();


let button = document.querySelector("#button-input");
let text = document.querySelector('#input-search')
/* button.addEventListener("click", (e) => console.log(e.code)); */
text.addEventListener('keydown', logKey);





function xd() {
    return new Promise(function (resolve, reject) {
        console.log("perate");
        setTimeout(() => {
            resolve("yolo");
        }, 3);
    });
}



async function perate() {
    console.log('ready mi wacho');
    let text;
    console.log(typeof (document.querySelector("#input-search").value));
}


function search() {
    console.log(card_selection(buscarObjeto(formatString(data, busqueda))));
}


function logKey(e) {
    if (e.code.match(/\d+/g)) {
        alert('Los nombres de eventos no tienen numeros ' + '\uD83D\uDD14');
        return;
    }
    else if (e.code === 'Enter') {
        view.clearCards();
        console.dir(view.card_selection(buscarObjeto(eventos, formatString(text.value))));
    }
}
function formatString(tringa) {
    if (tringa === '') {
        return;
    }
    else {
        console.log("aca")
        tringa = tringa.toLowerCase().trim();
        console.log(tringa);
        return tringa;
    }
}


function buscarObjeto(data, tringa) {
    return data.filter(data => data.name.toLowerCase().trim() === tringa);
}




