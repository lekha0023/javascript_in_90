(function() {
  var name = ''; // This 'name' variable is now local to this IIFE

  window.handleNameChange = function () { // Expose as a global function
    name = document.getElementById('inputText').value;
  };

  window.clearInputName = function (){ // Expose as a global function
    document.getElementById('inputText').value = '';
    name = '';
  };

  window.displayMessage = function(){ // Expose as a global function
    alert('name given in input is ' + name);
  };
})();