define(function() {
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

  return {
    handleNameChange: handleNameChange,
    clearInputName: clearInputName,
    displayMessage: displayMessage
  };
});