// *1st message
const dateInput = document.getElementById('dateInput');
// const errorText = document.getElementById('errorText');

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

const fileInput = document.getElementById('rangeInput');
const helpText = document.getElementById('helpText');

rangeInput.addEventListener('input', function() {
  const value = parseInt(this.value);

  if ( value > 50) {
    helpText.style.display = 'flex';
  } else {
    helpText.style.display = 'none';
  }
});

//*4th message

const changeStyleButton = document.getElementById('buttonInput');
const block = document.getElementById('.wrongPassword');

changeStyleButton.addEventListener('click', function() {
  block.classList.toggle('.wrongChange');
});
