const users = require('./users');

const userNames = users.filter(user => user.age > 20).map(user => user.name);
console.log(userNames);