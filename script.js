"use strict"

// TASK 1 ===============================================
let user = {
    //user.generator = createUser()
    //непонятно как добавить в свойство объекта свою функцию
    //гетеры и сетеры что-то не поддаются понимаю
    //вроде понятно что один для чтения а второй для записи
    //но как их применять на практике не очень ясно ((
};

function createUser() {
    let title = '';
    let value = '';
    let i = 0;
    let counter = +prompt('сколько свойсв добавить объекту?');

    while (i < counter) {
        title = prompt('введите название свойства');
        value = prompt('введите значение свойства');
        i++;
        Object.defineProperty(user, title, {
            value: value,
            configurable: true,
            enumerable: true,
            writable: true
        });

    }
};
createUser()

console.log(user);


// TASK 2 ===============================================

user.changeValue = function () {
    this.value = prompt('введите новое значение свойства');

};

user.changeValue();

console.log(user);

//НЕТ - здесь я что-то делаю не так, но без твоей подсказки мне не разобраться
// видимо я что-то важное упустил и теперь трачу слишком много времени безрезультатно ((












