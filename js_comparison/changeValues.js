const person = {
    name : 'alif rahman',
    age : 25,
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav place': ['Bandarban', 'saint martin', 'coxs bazar']
}

// person.salary = 30000;
// person.age = 26;
// person["fav place"] = ['maldives', 'pataya', 'bali'];
// console.log(person);

const propName = 'profession';
person[propName] = 'devops';
console.log(person);
