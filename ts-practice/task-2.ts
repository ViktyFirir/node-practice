import { users } from './users';
import { getTotalOrders } from './utils';

const result: string[] = users.map(user => {
  const totalOrders: number = getTotalOrders(user);
  return `User: ${user.name}, Total Orders: ${totalOrders}`;
});
console.log(result);