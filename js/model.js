
export class MyData {


    constructor() {
        this.data;
        this.db_path = 'https://mh-amazing.herokuapp.com/amazing'; 
    }


    get get__data() {
        return this.data;
    }


    get__pastEvents(in_data) {

        let now_date = new Date(in_data.date);
        let past_events = [];
        let event_data = new Date();

        this.data.events.forEach(element => {
            event_data = new Date(element.date);
            if (event_data.getTime() < now_date.getTime()) {
                past_events.push(element);
            }
        });

        return past_events;
    }


    get__upcommingEvents(in_data) {
        let now_date = new Date(in_data.date);
        let upcomming_events = [];
        let event_data = new Date();

        this.data.events.forEach(element => {
            event_data = new Date(element.date);
            if (event_data.getTime() > now_date.getTime()) {
                upcomming_events.push(element);
            }
        });

        return upcomming_events;
    }


    get__Categoria(data) {
        let arr = [];
        data.forEach((element, i) => {
            if (!arr.includes(element.category)) {
                arr.push(element.category);
            }
        });
        return arr;
    }


    get__DB = async () => {
        fetch(this.db_path)
            .then(res => res.json())
            .then((dat) => {
                this.data = dat;
            }).catch(err => { console.error(err) });
    }



}