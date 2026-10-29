const users = require('./users');

function getUserById(id) {
    const findUser = users.find(user => user.id === id);
    if (!findUser) {
        console.log(`пользователь с id ${id} не найден`);
        return null;
    }
    console.log(findUser);
    return findUser;
}

getUserById(2);
getUserById(99);