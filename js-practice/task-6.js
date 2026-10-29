async function fetchUsers() {   
    try {   
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error("Ошибка HTTP: " + response.status);
        let users = await response.json();
        users.forEach(user => {
            console.log(`User: ${user.name}`);
        });
        }   
        catch (error) {
            console.log('Error:', error);
        } }

fetchUsers();