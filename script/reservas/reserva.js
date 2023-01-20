import { dbAccommodations } from './db.js';
import { showServices, clearServices, confirmServices, createService } from './services.js';
import { showDetails, confirmBook } from './details.js';

let id, accommodation, checkIn, checkOut, qty, total;
let services = [];

const init = () => {
  // ======== proximos passos ========
  // se existe localstorage entao carrega localstorage
  // senao carrega init

  // referencia serviços

  const date = new Date();
  const dateStart = date.toLocaleDateString('af-ZA');
  const dateEnd = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString('af-ZA');
  
  const radios = document.querySelectorAll('input[type="radio"]');
  radios[0].checked = true;

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
  
  id = document.querySelector('input[name="quarto"]:checked').value;

  let sumServices = 0;

  accommodation = dbAccommodations[id].accommodation;
  checkIn = document.getElementById('checkin').value;
  checkOut = document.getElementById('checkout').value;
  qty = document.getElementById('qtd_adultos').value;

  // looking for services
  services = [];
  if (bookingStorage && bookingStorage.services.length) {
    bookingStorage.services.forEach(service => {
      services.push(service);
      sumServices += service.price;
    });
  };

  total = sumServices + (qty * dbAccommodations[id].price);

  putElement('Quarto', 'span-quarto', accommodation);
  putElement('Check in', 'span-checkin', checkIn);
  putElement('Check out', 'span-checkout', checkOut);
  putElement('Pessoas', 'span-qtd', qty);
  putElement('Total', 'span-total', `R$ ${total.toFixed(2)}`);

  // createServices()
  createService(bookingStorage ? bookingStorage.services : null);
};

const bookDetails = () => {
  // overview();

  // localStorage
  const booking = { id, accommodation, checkIn, checkOut, qty, services, total };
  localStorage.setItem('booking', JSON.stringify(booking));

  showDetails();
};

const cleanBook = () => {
  localStorage.clear();
  init();
  overview();
};

// ============= book =============
document.querySelector('#bookDetails').addEventListener('click', bookDetails);
document.querySelector('#cleanBook').addEventListener('click', cleanBook);
document.querySelector('#confirmBook').addEventListener('click', confirmBook);
// ============= book =============


// ========= modalServices =========
document.querySelector('#showServices').addEventListener('click', showServices);
document.querySelector('#clearServices').addEventListener('click', clearServices);
document.querySelector('#confirmServices').addEventListener('click', confirmServices);
// ========= modalServices =========


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

// initial values
init();

form.forEach((item) => {
  // item.addEventListener("change", (e) => overView(e.target));
  item.addEventListener("change", () => overview());
});

overview();

export { overview, cleanBook };
