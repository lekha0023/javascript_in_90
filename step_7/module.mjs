let name = '';

function handleNameChange() {
  name = document.getElementById('inputText').value;
}

function clearInputName() {
  document.getElementById('inputText').value = '';
  name = '';
}

function displayMessage() {
  alert(`name given in input is ${name}`);
}

function init() {
  const inputElement = document.getElementById('inputText');
  const resetButton = document.querySelector('button:nth-child(2)');
  const displayButton = document.querySelector('button:nth-child(3)');

  inputElement.onchange = handleNameChange;
  resetButton.onclick = clearInputName;
  displayButton.onclick = displayMessage;
}

document.addEventListener('DOMContentLoaded', init);