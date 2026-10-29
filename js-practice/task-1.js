const users = require('./users');

let userNames = users.filter(user => user.age >= 20).map(user => user.name);
console.log(userNames);