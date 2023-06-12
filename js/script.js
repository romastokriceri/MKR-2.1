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
  // Показати повідомлення про помилку

// *3rd message
var helpLink = document.querySelector(".help-link");
var helpText = document.querySelector(".help-text");

helpLink.addEventListener("click", function(event) {
  event.preventDefault();
  helpText.style.display = "flex"
});
