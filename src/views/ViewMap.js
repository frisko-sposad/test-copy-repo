export default class {
    init(locArr) {
        var myMap = new ymaps.Map("geolocation__map", {
            center: locArr,
            zoom: 7
        });
    }
}