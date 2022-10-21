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
        anchor.textContent = 'Details'

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

    create_statics_stats(max_percent, min_percent, max_cap) {
        const stat_conteiner = document.querySelector("#statics_stats");
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');
        let td_3 = document.createElement('td');

        th.textContent = 1;
        td_1.textContent = `${max_percent.name} with ${((max_percent.assistance / max_percent.capacity) * 100).toFixed(2)}%`
        td_2.textContent = `${min_percent.name} with ${((min_percent.assistance / min_percent.capacity) * 100).toFixed(2)}%`
        td_3.textContent = `${max_cap.name} with a capacity of: ${max_cap.capacity}`
        console.dir(td_1);
        tr.appendChild(th);
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);

        return tr;
    }

    select_statics(data) {
        const fragment = document.createDocumentFragment();
        let percent_big = 0;
        let index_big = 0;
        let percent_small = 100;
        let index_small = 0;
        let cap_max = 0;
        let cap_index = 0;
        console.dir(data);

        data.forEach((element, i) => {
            let percent_now = (element.assistance / element.capacity) * 100;
            if (percent_now > percent_big) {
                percent_big = percent_now;
                index_big = i;
            }
            if (percent_now < percent_small) {
                percent_small = percent_now;
                index_small = i;
            }
            if (element.capacity > cap_max) {
                cap_max = element.capacity;
                cap_index = i;
            }
        });
        fragment.append(this.create_statics_stats(data[index_big], data[index_small], data[cap_index]));
        document.getElementById("statics_stats").appendChild(fragment);

    }

    create_up_stats(data, id) {
        const stat_conteiner = document.querySelector("#up_stats");
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');
        let td_3 = document.createElement('td');

        th.textContent = id + 1;
        td_1.textContent = data.category;
        td_2.textContent = (data.capacity * data.price)
        td_3.textContent = data.estimate;

        tr.appendChild(th);
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);

        return tr;
    }


    select_up_stats(data) {
        const fragment = document.createDocumentFragment();
        data.forEach((e, i) => {
            fragment.append(this.create_up_stats(e, i));
        });
        document.getElementById("up_stats").appendChild(fragment);
    }


    create_past_stats(data, id) {
        const stat_conteiner = document.querySelector("#up_stats");
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');
        let td_3 = document.createElement('td');

        th.textContent = id + 1;
        td_1.textContent = data.category;
        td_2.textContent = (data.assistance * data.price);
        td_3.textContent = ((data.assistance / data.capacity) * 100).toFixed(2);

        tr.appendChild(th);
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);

        return tr;
    }

    select_past_stats(data) {
        const fragment = document.createDocumentFragment();
        data.forEach((e, i) => {
            fragment.append(this.create_past_stats(e, i));
        });
        document.getElementById("past_stats").appendChild(fragment);
    }

}