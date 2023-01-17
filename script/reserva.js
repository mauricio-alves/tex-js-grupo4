// init
let accommodation, checkIn, checkOut, qty, total;

const date = new Date();
const dateStart = date.toLocaleDateString('af-ZA');
const dateEnd = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString('af-ZA');

document.getElementById('checkin').value = dateStart;
document.getElementById('checkout').value = dateEnd;
document.getElementById('qtd_adultos').value = 1;

// get all changeable form components
const form = document.querySelectorAll('input[name="quarto"], input[type="date"], input[type="number"]');

form.forEach((item) => {
  // item.addEventListener("change", (e) => overView(e.target));
  item.addEventListener("change", () => overView());
});

// set accommodations
const accommodations = [{ accommodation: 'Apartamento Casal',
                          price: 190 
                        },
                        { accommodation: 'Suíte Executiva',
                          price: 350
                        },
                        { accommodation: 'Suíte Presidencial Luxo',
                          price: 600
                        }];

// send values to booking panel
const putElement = (type, element, value) => {
  document.getElementById(element).innerHTML = `<span>${type}: </span>${value}`;
};

const overView = () => {
  const indexAcc = document.querySelector('input[name="quarto"]:checked').value;

  accommodation = accommodations[indexAcc].accommodation;
  checkIn = document.getElementById('checkin').value;
  checkOut = document.getElementById('checkout').value;
  qty = document.getElementById('qtd_adultos').value;
  total = (qty * accommodations[indexAcc].price).toFixed(2);

  putElement('Quarto', 'span-quarto', accommodation);
  putElement('Check in', 'span-checkin', checkIn);
  putElement('Check out', 'span-checkout', checkOut);
  putElement('Pessoas', 'span-qtd', qty);
  putElement('Total', 'span-total', `R$ ${total}`);
};

const book = () => {
  // localStorage
  const booking = { accommodation, checkIn, checkOut, qty, total };
  localStorage.setItem('booking', JSON.stringify(booking));
}

overView();