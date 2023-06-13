// *1st message
const dateInput = document.getElementById('dateInput');
const errorText = document.getElementById('errorText');

dateInput.addEventListener('click', function() {
  errorText.style.display = 'block';
});

// *2nd message
const textInput = document.getElementById('textInput');
const errorMessage = document.getElementById('errorMessage');

function playErrorSound() {
  var audio = document.getElementById("error-sound");
  audio.play();
  errorMessage.style.display = 'block';
}


// *3rd message

const fileInput = document.getElementById('fileInput');
const helpText = document.getElementById('.helpText');

function giveHelpLink() {
  helpText.style.display = 'flex';
}
// var fileInput = document.querySelector("fileInput");
// var helpText = document.querySelector(".help-text");

// fileInput.addEventListener("click", function(event) {
//   event.preventDefault();
//   helpText.style.display = "flex"
// });
