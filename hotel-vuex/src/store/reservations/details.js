import dbAccommodations from '../db/dbAccommodations.js';
import dbServices from '../db/dbServices.js';
import { cleanBook } from './index.js';

const modal = document.getElementById('modalDetails');
const closeModal = document.getElementById('closeModalDetails');

const showDetails = () => {
  const bookingStorage = JSON.parse(localStorage.getItem('booking'));

  const image = document.getElementById('detailsImage');
  image.setAttribute('src', dbAccommodations[bookingStorage.id].image)
  image.setAttribute('width', '80%');

  document.getElementById('detailsAccommodation').innerText = bookingStorage.accommodation;
  document.getElementById('detailsDescription').innerText = dbAccommodations[bookingStorage.id].description;
  document.getElementById('detailsCheckin').innerText = `Check in: ${new Date(bookingStorage.checkIn).toLocaleDateString('pt-br')}`;
  document.getElementById('detailsCheckout').innerText = `Check out: ${new Date(bookingStorage.checkOut).toLocaleDateString('pt-br')}`;
  
  document.getElementById('detailsQty').innerText = `Hóspedes: ${bookingStorage.qty}`;
  
  const detailsServices = document.getElementById('detailsServices');
  detailsServices.innerHTML = '';

  // summary details
  const detailsSummary = document.getElementById('detailsSummary');
  detailsSummary.innerHTML = '';

  const h2 = document.createElement('h2');
  const pAccommodation = document.createElement('p');
  const pGuests = document.createElement('p');
  const pRates = document.createElement('p');
  const pTotal = document.createElement('p');
  const br = document.createElement('br');

  h2.appendChild(document.createTextNode('Resumo'));
  pAccommodation.appendChild(document.createTextNode(`${bookingStorage.accommodation} -> R$ ${dbAccommodations[bookingStorage.id].price.toFixed(2)}`));
  pGuests.appendChild(document.createTextNode(`Hóspedes -> ${bookingStorage.qty}`));
  pRates.innerHTML = `Diárias -> ${bookingStorage.rates}`;
  
  detailsSummary.appendChild(h2);
  detailsSummary.appendChild(pAccommodation);
  detailsSummary.appendChild(pGuests);
  detailsSummary.appendChild(pRates);

  for (let i = 0; i < bookingStorage.services.length; i++) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(dbServices[i].service));
    detailsServices.appendChild(p);
    
    const pSummaryServices = document.createElement('p');
    pSummaryServices.appendChild(document.createTextNode(`${dbServices[i].service} -> R$ ${dbServices[i].price.toFixed(2)}`));
    detailsSummary.appendChild(pSummaryServices);
  };

  pTotal.appendChild(document.createTextNode(`TOTAL: R$ ${bookingStorage.total.toFixed(2)}`));
    
  detailsSummary.appendChild(br);
  detailsSummary.appendChild(pTotal);

  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
// closeModal.onclick = () => {
//   modal.style.display = 'none';
// };

// When the user clicks anywhere outside of the modal, close it
// window.onclick = (event) => {
//   if (event.target == modal)
//     modal.style.display = 'none';
// };

const confirmBook = () => {
  closeModal.onclick();
  cleanBook();
  alert('Reserva realizada com sucesso!');
}

export { showDetails, confirmBook }
