// *1st message
const dateInput = document.querySelector('.dateInput');
// const errorText = document.getElementById('errorText');

dateInput.addEventListener('click', function() {
  errorText.style.display = 'block';
});

// *2nd message
const textInput = document.querySelector('.textInput');
const errorMessage = document.getElementById('errorMessage');

function playErrorSound() {
  var audio = document.getElementById("error-sound");
  audio.play();
  errorMessage.style.display = 'block';
}


// *3rd message

const fileInput = document.getElementById('rangeInput');
const helpText = document.querySelector('.helpText');

rangeInput.addEventListener('input', function() {
  const value = parseInt(this.value);

  if ( value > 50) {
    helpText.style.display = 'flex';
  } else {
    helpText.style.display = 'none';
  }
});

//*4th message
function giveErrorMessage(){
  wrongMessage.style.display = 'block';
}

const changeStyleButton = document.getElementById('buttonInput');

changeStyleButton.addEventListener('click', function() {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(function(block) {
    switch (block.id) {
      case 'block1':
        block.style.border = '2px solid blue';
        break;
      case 'block2':
        block.style.border = '2px solid red';
        break;
      case 'block3':
        block.style.border = '2px solid green';
        break;
      case 'block4':
        block.style.border = '2px solid yellow';
        break;
      default:
        break;
    }
  });
});
