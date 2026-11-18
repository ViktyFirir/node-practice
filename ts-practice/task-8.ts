import { users } from './users';
import { getTotalOrders } from './utils';

interface UserTotal {
  name: string;
  totalOrders: number;
}

const totals: UserTotal[] = users.map(user => ({
  name: user.name,
  totalOrders: getTotalOrders(user)
}));

totals.sort((a, b) => b.totalOrders - a.totalOrders);

totals.forEach(user => {
  console.log(`User: ${user.name}, Total Orders: ${user.totalOrders}`);
});