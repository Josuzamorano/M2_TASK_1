import { MyData } from './model.js';
import { DomElement } from './view.js'
let detashe = "";
let datita = new MyData();
let view = new DomElement();
let eventos;
let url;
let deta = localStorage.getItem("detashe");
datita.get__DB();



setTimeout(Main, 1000); ///timer load and main invocation

function Main() {



    Router();


    function Router() {
        let page = window.location.pathname.split("/").pop();

        if (page === "index.html" || page === "") {
            eventos = datita.get__data.events;
            url = "./pages/details.html";
            console.dir(datita.get__data);
        }
        else if (page === "past-events.html") {
            eventos = datita.get__pastEvents(datita.get__data);
            url = "./details.html";
        }
        else if (page === "up-events.html") {
            eventos = datita.get__upcommingEvents(datita.get__data);
            url = "./details.html";
        }
        else if (page === "details.html") {
            eventos = buscarObjetoByName(datita.get__data.events, deta.toLocaleLowerCase());


        }
        else if (page === "stats.html") {
            eventos = datita.get__upcommingEvents(datita.get__data);
            console.dir(eventos);
            view.select_statics(datita.get__pastEvents(datita.get__data));
            view.select_up_stats(datita.get__upcommingEvents(datita.get__data));
            view.select_past_stats(datita.get__pastEvents(datita.get__data));
        }
        console.log("eventos");
        console.dir(eventos);
        view.card_selection(eventos,url);
    }

    view.checkbox_selection(datita.get__Categoria(eventos));
    let anc = document.querySelectorAll('.btn-color');
    let button = document.querySelector("#button-input");
    let text = document.querySelector('#input-search')
    let checkB = document.querySelector('#check-conteiner');
    let checkboxes = document.querySelectorAll('.checkbox');
    button.addEventListener("click", search);
    checkB.addEventListener("click", checkSearch);
    text.addEventListener('keyup', logKey);
    anc.forEach(e => e.addEventListener("click", btn_detashe));



    function btn_detashe() {
        detashe = document.querySelector(`#tittleCard_${e.id.slice(-1)}`).textContent;
        localStorage.setItem("detashe", detashe);
    }

    function checkSearch() {
        let b_active = [];

        checkboxes.forEach(e => {
            if (e.checked) {
                b_active.push(e.value);
                Router();
                return;
            }
        });
        if (b_active.length == 0) {
            Router();
            return;
        }
        view.clearCards();
        eventos = buscarObjetoByCategory(eventos, b_active);
        view.card_selection(eventos,url);

    }



    function search() {
        view.clearCards();
        view.card_selection(buscarObjetoByName(eventos, formatString(text.value)),url);
    }


    function logKey(e) {
        if (text.value.trim() === "") {
            view.clearCards();
            view.card_selection(eventos,url);
        }
        else if (e.code === 'Enter') {
            view.clearCards();
            view.card_selection(buscarObjetoByName(eventos, formatString(text.value)),url);
        }
    }
    function formatString(string_a) {

        if (string_a === '') {
            return;
        }
        else if (string_a.match(/\d+/g)) {
            alert('Los nombres de eventos no tienen numeros ' + '\uD83D\uDD14');
            return;
        }
        else {
            console.log("aca")
            string_a = string_a.toLowerCase().trim();
            console.log(string_a);
            return string_a;
        }
    }


    function buscarObjetoByName(data, string_a) {
        return data.filter(data => data.name.toLowerCase().trim().includes(string_a));
    }

    function buscarObjetoByCategory(data, string_a) {
        let eventosARR = [];
        string_a.forEach(e => {
            data.forEach(data => {
                if (data.category === e) {
                    eventosARR.push(data);
                }
            });
        });
        return eventosARR;
    }




}