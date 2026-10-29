const users = require('./users');

const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(averageAge.toFixed(1));