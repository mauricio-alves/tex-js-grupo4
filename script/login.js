import dbLogin from './db/dbLogin.js';
import handleClick from './functions/handleClick.js';

const getElement = (elementId) => {
  return document.getElementById(elementId).value;
};

const removeQuotesSpaces = (str) => {
  return str.replaceAll('\'', '').replaceAll('\"', '').trim();
};

const login = () => {
  const email = getElement('email');
  const password = getElement('password');

  // check blank    
  if (email === '' || password === '')
    return alert('Atenção! Os campos usuário e senha devem ser preenchidos.');

  const filteredEmail = removeQuotesSpaces(email);
  if (filteredEmail !== dbLogin.email || password !== dbLogin.password)
    return alert('Atenção! Email ou senha inválidos.');

  // send to localStorage  
  localStorage.setItem('login', JSON.stringify({ name: 'Usuário', email: filteredEmail }));
  
  // redirect to home
  window.location.href = '/';
};

handleClick('#login', login);
