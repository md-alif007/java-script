const price = 3000 ;

if (price >= 5000) {
    const discount = price * 10 / 100 ;
    const payPrice = price - discount;
    console.log("Your discount amount is : " , discount);
    console.log("pay: " ,payPrice);
}
else if (price >= 3000) {
    const discount = price * 5 / 100 ;
    const payPrice = price - discount;
    console.log("Your discount amount is : " , discount);
    console.log("pay: " ,payPrice); 
}
else {
    console.log("No discount");
    console.log("pay:" , price);
}