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

  divCard.setAttribute('class', 'cards__images__card');
    img.setAttribute('src', image);
    img.setAttribute('alt', accommodation);
    img.setAttribute('title', accommodation);

  divInfo.setAttribute('class', 'cards__images__card__info');
    h3.appendChild(document.createTextNode(accommodation));
    pDesc.appendChild(document.createTextNode(description));
    pPrice.appendChild(document.createTextNode(`R$ ${price.toFixed(2)}`));

    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'quarto');
    input.setAttribute('id', idLabel);
    input.setAttribute('value', id);

    label.setAttribute('for', idLabel);
    label.appendChild(document.createTextNode(`Selecionar ${accommodation}`));

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

export { createAccommodation };
