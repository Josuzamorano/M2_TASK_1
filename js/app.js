import { MyData } from './model.js';
import { DomElement } from './view.js'

let detashe = "";

let datita = new MyData();
let view = new DomElement();
let eventos;
let deta = localStorage.getItem("detashe");

main();

function main() {
    let page = window.location.pathname.split("/").pop();

    if (page === "index.html") {
        eventos = datita.get__data.events;
    }
    else if (page === "past-events.html") {
        eventos = datita.get__pastEvents;
    }
    else if (page === "up-events.html") {
        eventos = datita.get__upcommingEvents;
    }
    else if (page === "details.html") {
        console.log(deta);
        eventos = buscarObjetoByName(datita.get__data.events, deta.toLocaleLowerCase());
        console.dir(eventos);
    }
    view.card_selection(eventos);
}


view.checkbox_selection(datita.get__Categoria(eventos));
let anc =document.querySelectorAll('.btn-color'); 
let button = document.querySelector("#button-input");
let text = document.querySelector('#input-search')
let checkB = document.querySelector('#check-conteiner');
let checkboxes = document.querySelectorAll('.checkbox');
button.addEventListener("click", search);
checkB.addEventListener("click", checkSearch);
text.addEventListener('keyup', logKey);
anc.forEach(e => e.addEventListener("click", element =>{
    detashe =  document.querySelector(`#tittleCard_${e.id.slice(-1)}`).textContent ;
    
    localStorage.setItem("detashe", detashe);
    console.log(deta);
} ) );



console.dir(eventos);
function checkSearch() {
    let b_active = [];

    checkboxes.forEach(e => {
        if (e.checked == true) {
            b_active.push(e.value);
            main();
            return;
        }
    });
    console.dir(b_active);
    if (b_active.length == 0) {
        main();
        return;
    }
    view.clearCards();
    eventos = buscarObjetoByCategory(eventos, b_active);
    view.card_selection(eventos);

}



function search() {
    view.clearCards();
    view.card_selection(buscarObjetoByName(eventos, formatString(text.value)));
}


function logKey(e) {
    if (text.value.trim() === "") {
        view.clearCards();
        view.card_selection(eventos);
    }
    else if (e.code === 'Enter') {
        view.clearCards();
        view.card_selection(buscarObjetoByName(eventos, formatString(text.value)));
    }
}
function formatString(tringa) {

    if (tringa === '') {
        return;
    }
    else if (tringa.match(/\d+/g)) {
        alert('Los nombres de eventos no tienen numeros ' + '\uD83D\uDD14');
        return;
    }
    else {
        console.log("aca")
        tringa = tringa.toLowerCase().trim();
        console.log(tringa);
        return tringa;
    }
}


function buscarObjetoByName(data, tringa) {
    return data.filter(data => data.name.toLowerCase().trim().includes(tringa) );
}

function buscarObjetoByCategory(data, tringa) {
    let eventosARR = [];
    tringa.forEach(e => {
        data.forEach(data => {
            if (data.category === e) {
                eventosARR.push(data);
            }
        });
    });
    return eventosARR;
}




