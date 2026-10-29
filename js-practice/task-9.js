async function fetchUsersInCity(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Ошибка HTTP: ' + response.status);
    const users = await response.json();
    const countByCity = users.reduce((result, user) => {
        const city = user.address.city;
        if (!result[city]) {
            result[city] = 0;
        }
        result[city]++;
        return result;
    }, {});
    return countByCity;
} 

async function main() {
    try {
        let countByCity = await fetchUsersInCity();
        console.log(countByCity);
    } catch (error) {
        console.log('Error:', error);
    }   }
main();