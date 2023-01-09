let userStorage = JSON.parse(localStorage.getItem('login'));

document.getElementById('user').innerHTML = `Olá, ${userStorage.name}!`;
document.getElementById('email').innerHTML = `email: ${userStorage.email}`;

const clearStorage = () => {
  localStorage.clear();
  document.getElementById('user').innerHTML = '';
  document.getElementById('email').innerHTML = '';
};
