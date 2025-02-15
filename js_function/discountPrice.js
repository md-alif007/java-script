/*

upto 100 ----> 100
more than 101-200 ----> 90
more than 200 -----> 70

*/

function discountPrice(tickets) {
    if (tickets <= 100) {
        const total = tickets * 100;
        return total;
    } else if (tickets <= 200) {
        const total = tickets * 90;
        return total;
    } else {
        const total = tickets * 70;
        return total;
    }
}

const price = discountPrice(201);
console.log(price);
