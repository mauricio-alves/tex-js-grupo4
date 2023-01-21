import dbAccommodations from '../db/dbAccommodations.js';
import { showServices, clearServices, confirmServices, createService } from './services.js';
import { showDetails, confirmBook } from './details.js';
import { createAccommodation } from './accommodations.js';

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

// ===================== support functions =====================
const putElement = (type, element, value) => {
  document.getElementById(element).innerHTML = `<span>${type}: </span>${value}`;
};

const bookDetails = () => {
  // localStorage
  const booking = { id, accommodation, checkIn, checkOut, qty, services, total };
  localStorage.setItem('booking', JSON.stringify(booking));

  showDetails();
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

const cleanBook = () => {
  localStorage.clear();
  init();
  overview();
};

const handleClick = (componentId, fn) => {
  document.querySelector(componentId).addEventListener('click', fn);
};


// ============= book =============
handleClick('#bookDetails', bookDetails);
handleClick('#cleanBook', cleanBook);
handleClick('#confirmBook', confirmBook);
// ============= book =============


// ========= modalServices =========
handleClick('#showServices', showServices);
handleClick('#clearServices', clearServices);
handleClick('#confirmServices', confirmServices);
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
