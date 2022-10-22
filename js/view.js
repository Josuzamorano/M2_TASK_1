export class DomElement {
    constructor() { }


    createCard(img_src, title_text, context_text, price_card, new_id) {

        let card = document.createElement('div');
        let img = document.createElement('img');
        let body = document.createElement('div');
        let tittle = document.createElement('h5');
        let text = document.createElement('p');
        let price = document.createElement('p');
        let anchor = document.createElement('a');

        card.id = 'card_' + new_id;
        img.id = 'imgCard_' + new_id;
        body.id = 'bodyCard_' + new_id;
        tittle.id = 'tittleCard_' + new_id;
        text.id = 'textCard_' + new_id;
        price.id = 'priceCard_' + new_id;
        anchor.id = 'anchorCard_' + new_id;

        card.className = "card shadow-sm";
        img.className = "card-img-top";
        body.className = "card-body";
        tittle.className = "card-title";
        text.className = "card-text";
        anchor.className = "btn btn-color";


        img.src = img_src;
        tittle.textContent = title_text;
        text.textContent = context_text;
        price.textContent = 'Picre: ' + price_card;
        anchor.href = '../pages/details.html';
        anchor.textContent ='Details'

        card.appendChild(img);
        card.appendChild(body);
        body.appendChild(tittle);
        body.appendChild(text);
        body.appendChild(price);
        body.appendChild(anchor);

        return card;


    }

    card_selection(data) {
        const fragment = document.createDocumentFragment();
        data.forEach((element, i) => {
            fragment.append(this.createCard(element.image, element.name, element.description, element.price, i));
        });
        document.getElementById("card-cotainer").appendChild(fragment);
    }

    clearCards() {
        let elemnt = document.getElementById("card-cotainer")
        elemnt.innerHTML = "";
    }

    createCheckBox(new_id, name) {
        let div = document.createElement('div');
        let checkB = document.createElement('input');
        let label = document.createElement('label');

        checkB.type = "checkbox";
        checkB.className = "checkbox";
        checkB.value = name;
        div.id = "divCheckbox_" + new_id;
        checkB.id = "checkbox_" + new_id;
        label.id = "label_" + new_id;
        label.textContent = name;

        div.appendChild(label);
        div.appendChild(checkB);

        return div;
    }

    checkbox_selection(data) {
        const fragment = document.createDocumentFragment();
        data.forEach((element, i) => {
            fragment.append(this.createCheckBox(i, element));
        });
        document.getElementById("check-conteiner").appendChild(fragment);

    }

}