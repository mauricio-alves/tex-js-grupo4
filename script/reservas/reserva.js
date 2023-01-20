import { dbAccommodations } from './db.js';
import { showServices, clearServices, confirmServices, createService } from './services.js';

let accommodation, checkIn, checkOut, qty, total;
let services = [];

const init = () => {  
  const date = new Date();
  const dateStart = date.toLocaleDateString('af-ZA');
  const dateEnd = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString('af-ZA');
  
  document.getElementById('checkin').value = dateStart;
  document.getElementById('checkout').value = dateEnd;
  document.getElementById('qtd_adultos').value = 1;
};

const createAccommodation = (image, accommodation, description, price, idLabel, id) => {
  const cards = document.getElementById('cards');

  const divCard = document.createElement('div');
  const divInfo = document.createElement('div');
  const divInput = document.createElement('div');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const pDesc = document.createElement('p');
  const pPrice = document.createElement('p');
  const input = document.createElement('input');
  const label = document.createElement('label');

  divCard.setAttribute('class', 'card');
    img.setAttribute('src', image);
    img.setAttribute('alt', accommodation);
    img.setAttribute('title', accommodation);

  divInfo.setAttribute('class', 'info');
    h3.appendChild(document.createTextNode(accommodation));
    pDesc.appendChild(document.createTextNode(description));
    pPrice.appendChild(document.createTextNode(`R$ ${price.toFixed(2)}`));

    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'quarto');
    input.setAttribute('id', idLabel);
    input.setAttribute('value', id);

    label.setAttribute('for', idLabel);
    label.appendChild(document.createTextNode('Selecionar Apartamento Casal'));

  divInput.appendChild(input);
  divInput.appendChild(label);

  divInfo.appendChild(h3);
  divInfo.appendChild(pDesc);
  divInfo.appendChild(pPrice);
  divInfo.appendChild(divInput); 

  divCard.appendChild(img);
  divCard.appendChild(divInfo);

  cards.appendChild(divCard);
};

// send values to booking panel
const putElement = (type, element, value) => {
  document.getElementById(element).innerHTML = `<span>${type}: </span>${value}`;
};

const overview = () => {
  const bookingStorage = JSON.parse(localStorage.getItem('booking'));

  const indexAcc = document.querySelector('input[name="quarto"]:checked').value;

  let sumServices = 0;

  accommodation = dbAccommodations[indexAcc].accommodation;
  checkIn = document.getElementById('checkin').value;
  checkOut = document.getElementById('checkout').value;
  qty = document.getElementById('qtd_adultos').value;

  // looking for services
  if (bookingStorage && bookingStorage.services.length) {
    services = [];

    bookingStorage.services.forEach(service => {
      services.push(service);
      sumServices += service.price;
    });
  };

  total = (sumServices + (qty * dbAccommodations[indexAcc].price)).toFixed(2);

  putElement('Quarto', 'span-quarto', accommodation);
  putElement('Check in', 'span-checkin', checkIn);
  putElement('Check out', 'span-checkout', checkOut);
  putElement('Pessoas', 'span-qtd', qty);
  putElement('Total', 'span-total', `R$ ${total}`);

  // createServices()
  createService(bookingStorage ? bookingStorage.services : null);
};

const book = () => {
  // localStorage
  const booking = { accommodation, checkIn, checkOut, qty, services, total };
  localStorage.setItem('booking', JSON.stringify(booking));
};

const cleanBook = () => {
  localStorage.clear();
  init();
  overview();
};

// ============= book =============
document.querySelector('#book').addEventListener('click', book);
document.querySelector('#cleanBook').addEventListener('click', cleanBook);
// ============= book =============


// ============= modal =============
document.querySelector('#showServices').addEventListener('click', showServices);
document.querySelector('#clearServices').addEventListener('click', clearServices);
document.querySelector('#confirmServices').addEventListener('click', confirmServices);
// ============= modal =============


init();

// accommodations
dbAccommodations.forEach(item => {
  createAccommodation(item.image,
                      item.accommodation,
                      item.description,
                      item.price,
                      item.idLabel,
                      item.id);
});

// get all changeable form components
const form = document.querySelectorAll('input[name="quarto"], input[type="date"], input[type="number"]');

form.forEach((item) => {
  // item.addEventListener("change", (e) => overView(e.target));
  item.addEventListener("change", () => overview());
});

// overview();

export { overview, book };
