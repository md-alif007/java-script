const computer = {
    brand : 'lenovo',
    price : 30000,
    processor : 'intel',
    hdd : '512gb'
}

for (const component in computer) {
   console.log(component);
   console.log(computer[component]);
}