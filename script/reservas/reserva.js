import dbAccommodations from '../db/dbAccommodations.js';
import { showServices, clearServices, confirmServices, createService } from './services.js';
import { showDetails, confirmBook } from './details.js';
import { createAccommodation } from './accommodations.js';
import handleClick from '../functions/handleClick.js';
import putElement from '../functions/putElement.js';
import { getDateInput, sliceDate } from '../functions/getDate.js';

let id, accommodation, checkIn, checkOut, qty, total;
let services = [];

const init = () => {
  const radios = document.querySelectorAll('input[type="radio"]');

  if (!localStorage.booking) {    
    radios[0].checked = true;

    document.getElementById('checkin').value = `${getDateInput().year}-${getDateInput().month}-${getDateInput().day}`;
    document.getElementById('checkout').value = `${getDateInput().year}-${getDateInput().month}-${getDateInput().day+1}`;
    document.getElementById('qtd_adultos').value = 1;
  } else {
    const bookingStorage = JSON.parse(localStorage.getItem('booking'));

    radios[bookingStorage.id].checked = true;

    document.getElementById('checkin').value = `${sliceDate(bookingStorage.checkIn).year}-${sliceDate(bookingStorage.checkIn).month}-${sliceDate(bookingStorage.checkIn).day}`;
    document.getElementById('checkout').value = `${sliceDate(bookingStorage.checkOut).year}-${sliceDate(bookingStorage.checkOut).month}-${sliceDate(bookingStorage.checkOut).day}`;
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
  let sumServices = 0;
  
  const bookingStorage = JSON.parse(localStorage.getItem('booking'));
  const inputCheckin = document.getElementById('checkin').value;
  const inputCheckout = document.getElementById('checkout').value;
  
  id = document.querySelector('input[name="quarto"]:checked').value;
  accommodation = dbAccommodations[id].accommodation;
  checkIn = new Date(sliceDate(inputCheckin).year, sliceDate(inputCheckin).month-1, sliceDate(inputCheckin).day);
  checkOut = new Date(sliceDate(inputCheckout).year, sliceDate(inputCheckout).month-1, sliceDate(inputCheckout).day);
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
