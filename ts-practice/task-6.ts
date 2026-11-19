import { isApiUser } from './utils';

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Ошибка HTTP: ' + response.status);
    const data: unknown = await response.json();
    if (!Array.isArray(data) || !data.every(isApiUser)) {
      throw new Error('Ответ API не соответствует ожидаемому формату');
    }
    data.forEach(user => {
      console.log(`User: ${user.name}`);
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchUsers();