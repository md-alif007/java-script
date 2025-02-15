/*

first 100 -----> 100
second 100 -----> 90
above 200 ------> 70

*/

function layerdDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    } else if (quantity <= 200) {
        const first100Cost = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingQuantityPrice = remainingQuantity * 90;
        const total = first100Cost + remainingQuantityPrice;
        return total;
    } else {
        const first100Cost = 100 * first100Price;
        const second100Cost = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingQuantityPrice = remainingQuantity * above200Price;
        const total = first100Cost + second100Cost + remainingQuantityPrice;
        return total;
    }
}

const price = layerdDiscount(300);
console.log(price);
