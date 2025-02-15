const mobiles = [
   { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },

   { name: 'xiomi', price: 30000, camera: '12mp', color: 'black' },

   { name: 'oppo', price: 25000, camera: '12mp', color: 'black' },

   { name: 'iphone', price: 100000, camera: '12mp', color: 'black' },

   { name: 'htc', price: 12000, camera: '12mp', color: 'black' },
]

function getCheapestPhone(phones) {
   let min = phones[0];
   for (const phone of phones) {
      if (phone.price < min.price) {
         min = phone;
      }
   }
   return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('cheapest phone is : ', cheap);
