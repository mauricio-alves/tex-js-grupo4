import { dbServices } from './db.js';
import { overview } from './reserva.js';

const modal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName('close')[0];

const createService = (services) => {
  const overviewServices = document.getElementById('servicos');
  overviewServices.innerHTML = '';

  if (services && services.length) {
    overviewServices.innerHTML = '<p><span>Serviços Adicionais:<span></p>';

    services.forEach(service => {
      const p = document.createElement('p');
      const span = document.createElement('span');

      span.appendChild(document.createTextNode(`${dbServices[service.id].service}: `));
      p.appendChild(span);
      p.appendChild(document.createTextNode(`R$ ${dbServices[service.id].price.toFixed(2)}`));
      overviewServices.appendChild(p);
    });
  } else { 
    const p = document.createElement('p');
    p.appendChild(document.createTextNode('Nenhum serviço adicional'));
    overviewServices.appendChild(p);
  };
};

const getServices = () => {
  const bookingStorage = JSON.parse(localStorage.getItem('booking'));
  const servicesContent = document.getElementById('services-content');
  servicesContent.innerHTML = '';

  for (let i = 0; i < dbServices.length; i++) {
    const p = document.createElement('p');
    const input = document.createElement('input');

    input.type = 'checkbox';
    input.id = dbServices[i].id;

    if (bookingStorage && bookingStorage.services.length) {
      bookingStorage.services.map(item => {
        if (dbServices[i].id === item.id) input.checked = true;
      });
    };

    p.appendChild(input);
    p.appendChild(document.createTextNode(` ${dbServices[i].service} -> R$ ${dbServices[i].price.toFixed(2)}`));

    servicesContent.appendChild(p);
  };
};

const showServices = () => {
  getServices();
  modal.style.display = 'block';
};
  
// When the user clicks on <span> (x), close the modal
closeModal.onclick = () => {
  modal.style.display = 'none';
};
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  };
};
  
const clearServices = () => {
  const checkServices = document.querySelectorAll('input[type="checkbox"]');
  checkServices.forEach(item => item.checked = false);
};

const confirmServices = () => {
  const checkServices = document.querySelectorAll('input[type="checkbox"]');
  let services = [];

  checkServices.forEach(service => {
    if (service.checked)
      services.push(dbServices[service.id]);
  });

  localStorage.setItem('booking', JSON.stringify({ services }));

  closeModal.onclick();
  overview();
};

export { showServices, clearServices, confirmServices, createService };
