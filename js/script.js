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
