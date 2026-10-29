const users = require('./users');

const userCity = users.reduce((cities, user) => {
    if (!cities[user.city]) {
        cities[user.city] = [];
    }
    cities[user.city].push(user);
    return cities;
}, {});
console.log(userCity);