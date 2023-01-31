import dbAccommodations from '../db/dbAccommodations.js';
// import { showServices, clearServices, confirmServices, createService } from './services.js';
// import { showDetails, confirmBook } from './details.js';
// import { createAccommodation } from './accommodations.js';
// import handleClick from '../functions/handleClick.js';
// import putElement from '../functions/putElement.js';
import { getDateInput, sliceDate } from '../functions/getDate.js';

// import store from '@/store'

let id, accommodation, checkIn, checkOut, qty, rates, total;
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

const overview = () => {
  let sumServices = 0;
  
  const bookingStorage = JSON.parse(localStorage.getItem('booking'));
  const inputCheckin = document.getElementById('checkin').value;
  const inputCheckout = document.getElementById('checkout').value;
  
  id = document.querySelector('input[name="quarto"]:checked').value;
  store.state.reservation.id = id;

  accommodation = dbAccommodations[id].accommodation;
  store.state.reservation.accommodation = accommodation;

  checkIn = new Date(sliceDate(inputCheckin).year, sliceDate(inputCheckin).month-1, sliceDate(inputCheckin).day);
  store.state.reservation.checkin = `${getDateInput().year}-${getDateInput().month}-${getDateInput().day}`;;
  
  checkOut = new Date(sliceDate(inputCheckout).year, sliceDate(inputCheckout).month-1, sliceDate(inputCheckout).day);
  store.state.reservation.checkout = `${getDateInput().year}-${getDateInput().month}-${getDateInput().day+1}`;;
  
  qty = document.getElementById('qtd_adultos').value;
  store.state.reservation.qty = qty;

  // looking for services
  services = [];
  if (bookingStorage && bookingStorage.services.length) {
    bookingStorage.services.forEach(service => {
      services.push(service);
      store.state.reservation.services.push(service);

      sumServices += service.price;
    });
  };

  // difference between dates (rates) by 24 hours (in milliseconds)
  rates = (checkOut - checkIn) / 86400000;
  store.state.reservation.rates = rates;

  total = sumServices + (rates * qty * dbAccommodations[id].price);
  store.state.reservation.total = total;

//   putElement('Quarto', 'span-quarto', accommodation);
//   putElement('Check in', 'span-checkin', new Date(checkIn).toLocaleDateString('pt-br'));
//   putElement('Check out', 'span-checkout', new Date(checkOut).toLocaleDateString('pt-br'));
//   putElement('Hóspedes', 'span-qtd', qty);
//   putElement('Diárias', 'span-diaria', rates);
//   putElement('Total', 'span-total', `R$ ${total.toFixed(2)}`);

  // createServices()
  // createService(bookingStorage ? bookingStorage.services : null);

  // set localStorage
  const booking = { id, accommodation, checkIn, checkOut, qty, rates, services, total };
  localStorage.setItem('booking', JSON.stringify(booking));
};

// const cleanBook = () => {
//   localStorage.removeItem('booking');
//   init();
//   overview();
// };


// ============= book =============
// handleClick('#bookDetails', showDetails);
// handleClick('#cleanBook', cleanBook);
// handleClick('#confirmBook', confirmBook);
// ============= book =============


// ========= modalServices =========
// handleClick('#showServices', showServices);
// handleClick('#clearServices', clearServices);
// handleClick('#confirmServices', confirmServices);
// ========= modalServices =========


// accommodations
// dbAccommodations.forEach(item => {
//   createAccommodation(item.image,
//                       item.accommodation,
//                       item.description,
//                       item.price,
//                       item.idLabel,
//                       item.id);
// });

// // get all changeable form components
// const form = document.querySelectorAll('input[name="quarto"], input[type="date"], input[type="number"]');

// // initial values
// // init();

// form.forEach((item) => {
//   item.addEventListener("change", () => {
//     if (item.id === 'checkout') {
//       const checkin = document.getElementById('checkin').value;

//       if (item.value <= checkin) {
//         item.value = `${sliceDate(checkin).year}-${sliceDate(checkin).month}-${parseInt(sliceDate(checkin).day) + 1}`;
//         alert('Atenção! A data de Check out não pode ser menor ou igual à data de Check in.');
//       };
//     };

//     overview();
//   });
// });

// overview();

export { init, overview };
