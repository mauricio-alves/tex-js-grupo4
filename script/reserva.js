// const checkIn = document.getElementById('checkin');
// const checkOut = document.getElementById('checkout');
// const qtd = document.getElementById('qtd_adultos');

// const radios = document.querySelectorAll('input[name="quarto"]');


// get all changeable form components
const form = document.querySelectorAll('input[name="quarto"], input[type="date"], input[type="number"]');


// get accommodation
// let accommodation;

// radios.forEach((elem) => {
//   elem.addEventListener("change", (e) => {
//     accommodation = e.target.value;
//     console.log(accommodation);
//   });
// });

form.forEach((item) => {
  // item.addEventListener("change", (e) => overView(e.target));
  item.addEventListener("change", () => overView());
});

const accommodations = [{ accommodation: 'Apartamento Casal',
                          price: 190 
                        },
                        { accommodation: 'Suíte Executiva',
                          price: 350
                        },
                        { accommodation: 'Suíte Presidencial Luxo',
                          price: 600
                        }];

const putElement = (type, element, value) => {
  document.getElementById(element).innerHTML = `<span>${type}: </span>${value}`;
}


const overView = () => {
  const checkIn = document.getElementById('checkin').value;
  const checkOut = document.getElementById('checkout').value;
  const qtd = document.getElementById('qtd_adultos').value;
  const indexAcc = document.querySelector('input[name="quarto"]:checked').value;

  putElement('Quarto', 'span-quarto', accommodations[indexAcc].accommodation);
  putElement('Check in', 'span-checkin', checkIn);
  putElement('Check out', 'span-checkout', checkOut);
  putElement('Pessoas', 'span-qtd', qtd);
  putElement('Total', 'span-total', `R$ ${(qtd * accommodations[indexAcc].price).toFixed(2)}`);
}
