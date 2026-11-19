import type { User } from './types';
import { users } from './users';
import { getTotalOrders } from './utils';

let userTotal: number = 0;
let superUser: User | null = null;

for (const user of users) {
  const totalOrders: number = getTotalOrders(user);
  if (totalOrders > userTotal) {
    userTotal = totalOrders;
    superUser = user;
  }
}

if (superUser) {
  console.log(`User: ${superUser.name}, Total Orders: ${userTotal}`);
} else {
  console.log('Пользователь не найден');
}