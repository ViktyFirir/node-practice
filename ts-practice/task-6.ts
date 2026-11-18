import type { ApiUser } from './types';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isApiUser(value: unknown): value is ApiUser {
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