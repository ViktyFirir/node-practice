import type { User } from './types';
import { users } from './users';

const userCity: Record<string, User[]> = users.reduce<Record<string, User[]>>((cities, user) => {
  const cityUsers: User[] = cities[user.city] ?? [];
  cityUsers.push(user);
  cities[user.city] = cityUsers;
  return cities;
}, {});
console.log(userCity);