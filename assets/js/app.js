import { MyData } from './data-controller.js';
import {DomElement} from './view.js'


let datita = new MyData();
let view   = new DomElement();


if( document.title == "Past Events"){
    view.card_selection(datita.get__pastEvents);
}
else if( document.title == "Past Events"){
    view.card_selection(datita.get__upcommingEvents);
}
else if(document.title == "Home"){
    view.card_selection(datita.get__data.events);
}
else if(document.title =="Up comming Events"){
    view.card_selection(datita.get__upcommingEvents);
}


