import { dbAccommodations, dbServices } from './db.js';
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

// get all changeable form components
const form = document.querySelectorAll('input[name="quarto"], input[type="date"], input[type="number"]');

form.forEach((item) => {
  // item.addEventListener("change", (e) => overView(e.target));
  item.addEventListener("change", () => overview());
});

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


overview();
init();

export { overview, book };


// ================ criação no final da aula do dia 19jan2023 ================
// ====== rotina para automatizar a lista de quartos (dbAccommodations) ======

// const createAccommodation = () => {
//   const div = document.createElement('div');
//   const a = document.createElement('a');
//   const h3 = document.createElement('h3')
//   const img = document.createElement('img');

  



//   span.appendChild(document.createTextNode(`${dbServices[service.id].service}: `));
//       p.appendChild(span);
//       p.appendChild(document.createTextNode(`R$ ${dbServices[service.id].price.toFixed(2)}`));
//       overviewServices.appendChild(p);

// };

