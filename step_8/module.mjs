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
  const resetButton = document.getElementById('resetButton');
  const displayButton = document.getElementById('displayButton');

  inputElement.onchange = handleNameChange;
  resetButton.onclick = clearInputName;
  displayButton.onclick = displayMessage;
}

export { init };