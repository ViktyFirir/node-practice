import { users } from './users';

const averageAge: number = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(averageAge.toFixed(1));