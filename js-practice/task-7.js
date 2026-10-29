let users = require('./users');

let middleAgedUsers = users.reduce((result, user) => {return result + user.age}, 0) / users.length;
console.log(middleAgedUsers);