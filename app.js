var link = 'https://janiduw.checkfront.com/api/3.0/item';
var data = {
    baseUrl: "https://janiduw.checkfront.com",
    classList: null
};

Vue.http.get(link).then(function (response) {
    data.classList = response.data.items;
}, function (error) {
    console.log(error.statusText);
});

var example1 = new Vue({
    el: '#class-list',
    data: data,
    methods: {
        bookNow: bookNow
    }
});

function bookNow(itemId, event) {
    console.log("Clicked Item Id" + itemId);
    new DROPLET.Widget({
        host: 'janiduw.checkfront.com',
        target: 'CHECKFRONT_WIDGET_01',
        item_id: itemId,
        provider: 'droplet'
    }).render();
}