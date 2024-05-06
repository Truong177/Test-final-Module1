class Mobile {
    constructor(code, name, manufacturer, price) {
        this.code = code;
        this.name = name;
        this.manufacturer = manufacturer;
        this.price = price;
    }

    setCode(code) {
        this.code = code;
    }

    getCode() {
        return this.code;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer
    }

    getManufacturer() {
        return this.manufacturer;
    }

    setPrice(price) {
        this.price = price
    }

    getPrice() {
        return this.price;
    }

    toString() {
        return "Code" + this.code + " Name" + this.name + "Manufacturer" + this.manufacturer + "Price " + this.price
    }
}
const mobiles = [
    {code: "ABC123", name: "iPhone 12", manufacturer: "Apple", price: 1000},
    {code: "DEF456", name: "Samsung Galaxy S21", manufacturer: "Samsung", price: 900},
    {code: "GHI789", name: "Google Pixel 5", manufacturer: "Google", price: 800}
];

function initMobileList() {
    const mobileList = document.getElementById("mobileList");
    let list = "";
    for (const mobile of mobiles) {
        list += "<tr>" +
            "<td>" + mobile.name + "</td>" +
            "<td>" + mobile.code + "</td>" +
            "<td>" + mobile.manufacturer + "</td>" +
            "<td>" + mobile.price + "</td>" +
            "</tr>";
    }

    mobileList.innerHTML = list;
}

initMobileList();


