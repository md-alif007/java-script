const numbers = [12, 32, 33, 37];

// push : add last
console.log(numbers);
numbers.push(44);
console.log(numbers);

// unshift : add first
const newNumbers = [12, 32, 33, 37];
console.log(newNumbers);
newNumbers.unshift(7);
console.log(newNumbers);

// pop : deletes the last one
const friends = ['ami', 'tmi', 'tini', 'uni'];
console.log(friends);
friends.pop();
console.log(friends);

// shift : deletes the first one
const newfriends = ['ami', 'tmi', 'tini', 'uni', 'rini'];
console.log(newfriends);
newfriends.shift();
console.log(newfriends);