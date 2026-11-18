import { users } from './users';

const userNames: string[] = users.filter(user => user.age > 20).map(user => user.name);
console.log(userNames);