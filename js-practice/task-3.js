let users = require('./users');

let userTotal = 0;
let superUser = null;

users.forEach(user => {
  let totalOrders = user.orders.reduce((sum, order) => sum + order, 0);
    if (totalOrders > userTotal)    
        {
            userTotal = totalOrders;
            superUser = user;
        } })

console.log(`User: ${superUser.name}, Total Orders: ${userTotal}`)