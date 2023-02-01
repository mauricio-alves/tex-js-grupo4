import dbBanners from './db/dbBanner.js';

// ================================== aula dia 12/01/2023 ==================================
const sorteio = () => {
  // gerar número aleatório entre 0 e 4
  const position = parseInt(Math.random() * 5);

  document.getElementById('imagem-fundo').setAttribute('src', dbBanners[position].image);
  document.getElementById('texto').textContent = dbBanners[position].slogan;
};

export { sorteio };
