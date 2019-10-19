// ----------------------------------------------------------------------------
// Create variables to hold details about the message and not initialized
var greeting = '[not initialized]' ; 
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// ----------------------------------------------------------------------------
// Create variables to hold details about the sign and not initialized
var sign = '[not initialized]';
var tiles = '[not initialized]';
var subTotal = '[not initialized]';
var shipping = '[not initialized]';
var grandTotal = '[not initialized]';


// ----------------------------------------------------------------------------
// Set text generic function
function setTextContentById(getId, setText){
  // Get ID
  var el = document.getElementById(getId);
  // Set text
  el.textContent = setText;  
}
// ----------------------------------------------------------------------------
// Set text generic function with dollar sign
function setTextPlusDollarSign(getId, setText){
  // Get ID
  var el = document.getElementById(getId);
  // Set text
  el.textContent = '$' + setText;  
}
// ----------------------------------------------------------------------------
function initiateVars() {
  greeting = 'Howdy ';
  name = 'Molly';
  message = ', please check your order:';
  welcome = greeting + name + message;
  sign = 'Montague House';
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}


//----------------------------------------------------------------------------
// Function Calls and using a IIFE wrapper
(function(){

  initiateVars();
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextPlusDollarSign('subTotal', subTotal);
  setTextPlusDollarSign('shipping', shipping);
  setTextPlusDollarSign('grandTotal', grandTotal);
}());


//----------------------------------------------------------------------------
// Creates an action listener and if the Reset button is clicked then
// the variables are reset to "clear".
document.getElementById('reset').addEventListener('click', resetVars).preventDefault();
                                                  
function resetVars(){
  document.getElementById("greeting").innerHTML = "clear";
  document.getElementById("tiles").innerHTML = "clear";
  document.getElementById("subTotal").innerHTML = "clear";
  document.getElementById("shipping").innerHTML = "clear";
  document.getElementById("grandTotal").innerHTML = "clear";
  document.getElementById("userSign").innerHTML = "clear";
}