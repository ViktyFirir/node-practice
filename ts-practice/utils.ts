import type { ApiUser, User } from './types';

export function getTotalOrders(user: User): number {
  return user.orders.reduce((sum, order) => sum + order, 0);
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function isApiUser(value: unknown): value is ApiUser {
  if (!isRecord(value)) return false;
  const address = value.address;
  return (
    typeof value.id === 'number' &&
    typeof value.name === 'string' &&
    typeof value.username === 'string' &&
    typeof value.email === 'string' &&
    isRecord(address) &&
    typeof address.city === 'string'
  );
}