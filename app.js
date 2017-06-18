var currentDate = new Date().toISOString();

var classGetUrl = 'https://janiduw.checkfront.com/api/3.0/item?category_id=5&start_date=' + encodeURI(currentDate);
var experienceGetUrl = 'https://janiduw.checkfront.com/api/3.0/item?category_id=4&start_date=' + encodeURI(currentDate);

var data = {
    baseUrl: "https://janiduw.checkfront.com",
    classList: null,
    experienceList: null
};

Vue.http.get(classGetUrl).then(function (response) {
    data.classList = response.data.items;
}, function (error) {
    console.log(error.statusText);
});

Vue.http.get(experienceGetUrl).then(function (response) {
    data.experienceList = response.data.items;
}, function (error) {
    console.log(error.statusText);
});

var classList = new Vue({
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
