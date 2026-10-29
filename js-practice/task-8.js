const users = require('./users');

const totals = users.map(user => ({
    name: user.name,
    totalOrders: user.orders.reduce((sum, order) => sum + order, 0)
}));

totals.sort((a, b) => b.totalOrders - a.totalOrders);

totals.forEach(user => {
    console.log(`User: ${user.name}, Total Orders: ${user.totalOrders}`);
});