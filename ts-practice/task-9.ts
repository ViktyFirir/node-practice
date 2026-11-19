import { isApiUser } from './utils';

async function fetchUsersInCity(): Promise<Record<string, number>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data) || !data.every(isApiUser)) {
    throw new Error('Ответ API не соответствует ожидаемому формату');
  }

  const users = data;

  const countByCity = users.reduce<Record<string, number>>((result, user) => {
    const city = user.address.city;

    if (!result[city]) {
      result[city] = 0;
    }

    result[city]++;
    return result;
  }, {});

  return countByCity;
}

async function main(): Promise<void> {
  try {
    const countByCity = await fetchUsersInCity();
    console.log(countByCity);
  } catch (error) {
    console.log('Error:', error);
  }
}

main();