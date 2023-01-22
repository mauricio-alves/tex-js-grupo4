import dbAccommodations from '../db/dbAccommodations.js';
import { showServices, clearServices, confirmServices, createService } from './services.js';
import { showDetails, confirmBook } from './details.js';
import { createAccommodation } from './accommodations.js';
import handleClick from '../functions/handleClick.js';
import putElement from '../functions/putElement.js';
import { getDateForInput } from '../functions/getDate.js';

let id, accommodation, checkIn, checkOut, qty, total;
let services = [];

const init = () => {
  const radios = document.querySelectorAll('input[type="radio"]');

  if (!localStorage.booking) {    
    radios[0].checked = true;

    document.getElementById('checkin').value = getDateForInput().checkIn;
    document.getElementById('checkout').value = getDateForInput().checkOut;
    document.getElementById('qtd_adultos').value = 1;
  } else {
    const bookingStorage = JSON.parse(localStorage.getItem('booking'));

    radios[bookingStorage.id].checked = true;

    const yearCheckin = bookingStorage.checkIn.slice(0, 4);
    const monthCheckin = bookingStorage.checkIn.slice(5, 7);
    const dayCheckin = bookingStorage.checkIn.slice(8, 10);

    const yearCheckout = bookingStorage.checkOut.slice(0, 4);
    const monthCheckout = bookingStorage.checkOut.slice(5, 7);
    const dayCheckout = bookingStorage.checkOut.slice(8, 10);

    checkIn = `${yearCheckin}-${monthCheckin}-${dayCheckin}`;
    checkOut = `${yearCheckout}-${monthCheckout}-${dayCheckout}`;

    document.getElementById('checkin').value = checkIn;
    document.getElementById('checkout').value = checkOut;
    document.getElementById('qtd_adultos').value = bookingStorage.qty;
  };
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

  const yearCheckin = document.getElementById('checkin').value.slice(0, 4);
  const monthCheckin = document.getElementById('checkin').value.slice(5, 7);
  const dayCheckin = document.getElementById('checkin').value.slice(8);

  const yearCheckout = document.getElementById('checkout').value.slice(0, 4);
  const monthCheckout = document.getElementById('checkout').value.slice(5, 7);
  const dayCheckout = document.getElementById('checkout').value.slice(8);
    

  accommodation = dbAccommodations[id].accommodation;
  checkIn = new Date(yearCheckin, monthCheckin-1, dayCheckin);
  checkOut = new Date(yearCheckout, monthCheckout-1, dayCheckout);
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
  putElement('Check in', 'span-checkin', new Date(checkIn).toLocaleDateString('pt-br'));
  putElement('Check out', 'span-checkout', new Date(checkOut).toLocaleDateString('pt-br'));
  putElement('Pessoas', 'span-qtd', qty);
  putElement('Total', 'span-total', `R$ ${total.toFixed(2)}`);

  // createServices()
  createService(bookingStorage ? bookingStorage.services : null);
};

const cleanBook = () => {
  localStorage.removeItem('booking');
  init();
  overview();
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
