import dbBanners from './db/dbBanner.js';
import handleClick from './functions/handleClick.js';

const checkStorage = () => {
  const userStorage = JSON.parse(localStorage.getItem('login'));

  if (!userStorage) {
    document.getElementById('painel').style.display = 'none';
  } else {
    document.getElementById('painel').style.display = 'block';
    document.getElementById('user').innerHTML = `Olá, ${userStorage.name}!`;
    document.getElementById('email').innerHTML = `email: ${userStorage.email}`;
  };
};

const clearStorage = async () => {
  localStorage.removeItem('login');
  checkStorage();
};

checkStorage();

handleClick('#clearStorage', clearStorage);


// ================================== aula dia 12/01/2023 ==================================
const sorteio = () => {
  // gerar número aleatório entre 0 e 4
  const position = parseInt(Math.random() * 5);

  document.getElementById('imagem-fundo').setAttribute('src', dbBanners[position].image);
  document.getElementById('texto').textContent = dbBanners[position].slogan;
};

sorteio();
