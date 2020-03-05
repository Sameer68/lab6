const listElement = document.getElementById('shopping');

function addItem(item) {
  const itemElement = document.createElement('li');
  itemElement.textContent = item;
  listElement.appendChild(itemElement);
};
