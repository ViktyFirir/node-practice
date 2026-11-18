import type { ApiUser } from './types';

async function fetchUsersInCity(): Promise<Record<string, number>> {
  const response = await fetch('https://typicode.com');
  
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const users: ApiUser[] = await response.json();

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
