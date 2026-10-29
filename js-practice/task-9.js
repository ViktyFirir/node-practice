async function fetchUsersInCity(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error("Ошибка HTTP: " + response.status);
    let users = await response.json();
    let countByCity = users.reduce((result, user) => {
        if (!result[user.address.city]) {
            result[user.address.city] = 0;
        }
        result[user.address.city]++;
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