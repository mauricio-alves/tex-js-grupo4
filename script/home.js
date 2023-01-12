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


// ================================== aula dia 12/01/2023 ==================================
const sorteio = () => {
  const header = [ { image: 'https://cdn.wallpapersafari.com/35/90/BrmIE3.jpg',
                     slogan: 'slogan imagem 1'
                   },
                   { image: 'https://www.pixelstalk.net/wp-content/uploads/images6/Beach-Wallpaper-HD-Free-download.jpg',
                     slogan: 'slogan imagem 2'
                   },
                   { image: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701310099.jpg',
                     slogan: 'slogan imagem 3'
                   },
                   { image: 'https://wallpapersmug.com/download/1920x1080/1bdf93/beach-sunset-ocean-coast.jpg',
                     slogan: 'slogan imagem 4'
                   },
                   { image: 'https://free4kwallpapers.com/uploads/originals/2015/11/01/the-most-beautiful-beach-wallpaper.jpg',
                     slogan: 'slogan imagem 5'
                   }
                 ];

  // gerar número aleatório entre 0 e 4
  const position = parseInt(Math.random() * 5);

  document.getElementById('imagem-fundo').setAttribute('src', header[position].image);
  document.getElementById('texto').textContent = header[position].slogan;
};

sorteio();
