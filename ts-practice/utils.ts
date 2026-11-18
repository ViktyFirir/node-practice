import type { User } from './types';

export function getTotalOrders(user: User): number {
  return user.orders.reduce((sum, order) => sum + order, 0);
}