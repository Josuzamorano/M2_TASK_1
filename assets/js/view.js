export class DomElement {
    constructor() { }


    createCard(img_src, title_text, context_text, price, new_id) {

        let old_card = document.getElementById("card");
        let new_card = old_card.cloneNode(true);
        new_card.id = 'card_' + new_id;
        document.getElementById("card-img").src = img_src;
        document.getElementById("card-title").textContent = title_text;
        document.getElementById("card-text").textContent = context_text;
        document.getElementById("card-price").textContent = 'Picre: ' + price;
        document.getElementById("card-cotainer").appendChild(new_card)
    }

    card_selection(data) {
        data.forEach((element, i) => {

            this.createCard(element.image, element.name, element.description, element.price, i)
        });
        let a = document.getElementById("card-cotainer")
        a.removeChild(document.getElementById("card_0"));
    }


}