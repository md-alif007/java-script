const productAndPrice = [
    { name: 'shampo', price: 300, quantity: 5 },
    { name: 'toothpaste', price: 200, quantity: 2 },
    { name: 'shirt', price: 100, quantity: 3 },
    { name: 'pant', price: 500, quantity: 4 }
]

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total += thisProductCost;
    }
    return total;
}

const price = cartTotal(productAndPrice);
console.log(price);
