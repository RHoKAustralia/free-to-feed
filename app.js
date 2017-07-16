const currentDate = new Date().toISOString();

const baseCheckfrontApiUrl = 'https://freeto.checkfront.com/api/3.0';

const classCategoryId = '1';
const experienceCategoryId = '4';

const classGetUrl = `${baseCheckfrontApiUrl}/item?category_id=${classCategoryId}&start_date=${encodeURI(currentDate)}`;
const experienceGetUrl = `${baseCheckfrontApiUrl}/item?category_id=${experienceCategoryId}&start_date=${encodeURI(currentDate)}`;

const data = {
    baseUrl: baseCheckfrontApiUrl,
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

const classList = new Vue({
    el: '#class-list',
    data: data,
    methods: {
        bookNow: bookNow
    }
});

function bookNow(itemId, event) {
    new DROPLET.Widget({
        host: 'freeto.checkfront.com',
        target: 'CHECKFRONT_WIDGET_01',
        item_id: itemId,
        provider: 'droplet'
    }).render();
}
