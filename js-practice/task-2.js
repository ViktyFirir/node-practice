const users = require('./users');

const result = users.map(user => {
    const totalOrders = user.orders.reduce((sum, order) => sum + order, 0);
    return `User: ${user.name}, Total Orders: ${totalOrders}`;
});
console.log(result);