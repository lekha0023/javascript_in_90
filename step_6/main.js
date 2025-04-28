import { handleNameChange, clearInputName, displayMessage } from 'inputModule.js';

function init() {
  const inputElement = document.getElementById('inputText');
  const resetButton = document.getElementById('resetButton');
  const displayButton = document.getElementById('displayButton');

  inputElement.onchange = handleNameChange;
  resetButton.onclick = clearInputName;
  displayButton.onclick = displayMessage;
}

document.addEventListener('DOMContentLoaded', init);