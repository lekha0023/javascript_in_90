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

// Export the functions
module.exports = {
  handleNameChange: handleNameChange,
  clearInputName: clearInputName,
  displayMessage: displayMessage
};

// export the 'name' variable if other modules needed direct access
// module.exports.name = name; // Though often better to manage state within the module