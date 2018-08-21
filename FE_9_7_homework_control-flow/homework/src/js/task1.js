// Your code goes here

let login = prompt('Hello! Enter your login, please:', 'User');

if (login === 'User') {
    getPassword();
    } else if (login === null || login === '') {
        alert('Canceled');
    } else if (login.length <= 4) {
        alert('I don\'t know any users having name length less than 4 symbols');
    } else {
        alert('I don\'t know you');
}

function getHours() {
    let time = new Date().getHours();

    if (time < 20) {
        alert('Good day!\n^_^)');
    } else {
        alert('Good evening!\n^_^');
    }
}

function getPassword() {
    let password = prompt('Enter your password, please','SuperUser');

    if (password === 'SuperUser') {
        getHours();
    } else if (password === null || password === '') {
        alert('Canceled');    
    } else {
        alert('Wrong Password');
    }
}

