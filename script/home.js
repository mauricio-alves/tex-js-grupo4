let userStorage = JSON.parse(localStorage.getItem('login'));

const checkStorage = () => {
  if (!Object.keys(localStorage).length) {
    document.getElementById('painel').style.display = 'none';
  } else {
    document.getElementById('painel').style.display = 'block';
    document.getElementById('user').innerHTML = `Olá, ${userStorage.name}!`;
    document.getElementById('email').innerHTML = `email: ${userStorage.email}`;
  };
};

const clearStorage = async () => {
  localStorage.clear();
  checkStorage();
};

checkStorage();
