let users = require('./users');

users.forEach(user => {
  let totalOrders = user.orders.reduce((sum, order) => sum + order, 0);
  console.log(`User: ${user.name}, Total Orders: ${totalOrders}`);
});