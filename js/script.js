function playErrorSound() {
  var audio = document.getElementById("error-sound");
  audio.play();
}

var helpLink = document.querySelector(".help-link");
var helpText = document.querySelector(".help-text");

helpLink.addEventListener("click", function(event) {
  event.preventDefault();
  helpText.style.display = "flex"
});

const dateInput = document.getElementById('dateInput');
const errorText = document.getElementById('errorText');

dateInput.addEventListener('click', function() {
  errorText.style.display = 'block';
});
