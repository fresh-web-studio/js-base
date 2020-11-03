let TITLES = [
    'MANGO PEOPLE T-SHIRT',
    'BANANA PEOPLE T-SHIRT',
];
let PRICES = [52, 68];

const basket = {
    items: [],
    total: null,
    container: null, //basket-items
    wrapper: null, // basket all
    init() {
        this.container = document.query

    }
}



function createItem(index) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productId: `prod_${index + 1}` //'prod_1'
    }
}

