const handleClick = (componentId, fn) => {
  document.querySelector(componentId).addEventListener('click', fn);
};

export default handleClick;
