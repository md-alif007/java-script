const productAndPrice = [
    { name: 'shampo', price: 300 },
    { name: 'toothpaste', price: 200 },
    { name: 'shirt', price: 100 },
    { name: 'pant', price: 500 }
]

function getThePrice(prodducts) {
    let sum = 0;
    for (const prodduct of prodducts) {
        sum += prodduct.price;
    }
    return sum;
}

const total = getThePrice(productAndPrice);
console.log(total);
