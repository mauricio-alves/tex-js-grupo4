const putElement = (type, element, value) => {
  document.getElementById(element).innerHTML = `<span>${type}: </span>${value}`;
};

export default putElement;
