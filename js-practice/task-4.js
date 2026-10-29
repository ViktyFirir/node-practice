let users = require('./users');

let userCity = users.reduce((citys, user) => {
    if (!citys[user.city]) {
        citys[user.city] = [];
    }
    citys[user.city].push(user.name);
    return citys
},{})
console.log(userCity);