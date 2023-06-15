// *1st message
const dateInput = document.querySelector('.dateInput');
const errorSymbol = document.querySelector('.errorSymbol');
// Поява символа загрози, який вказує на помилку
dateInput.addEventListener('click', function() {
  errorSymbol.style.display = 'block';
});

// *2nd message
const textInput = document.querySelector('.textInput');
const errorMessage = document.querySelector('.errorMessage');
// Поява повідомлення та звукового супроводу
function playErrorSound() {
  var audio = document.getElementById("error-sound");
  audio.play();
  errorMessage.style.display = 'block';
}


// *3rd message
const rangeInput = document.querySelector('.rangeInput');
const helpText = document.querySelector('.helpText');
// Поява повідомлення та посилання з поясненням
rangeInput.addEventListener('input', function() {
  const value = parseInt(this.value);

  if ( value > 50) {
    helpText.style.display = 'flex';
  } else {
    helpText.style.display = 'none';
  }
});

//*4th message
const wrongMessage = document.querySelector('.wrongMessage')
const passwordInput = document.querySelector('.passwordInput')

  const changeStyleButton = document.querySelector('.buttonInput');

let isStyleChanged = false;
// Зміна стилей при натисканні
changeStyleButton.addEventListener('click', function() {

  if (isStyleChanged) {
    // Зміна стилів для .wrongMessage
    const wrongMessage = document.querySelector('.wrongMessage');
    wrongMessage.style.display = 'none';

      // Зміна стилів для .error-message:nth-child(5)>.titleOfMessage
  const titleOfMessage = document.querySelector('.error-message:nth-child(5)>.titleOfMessage');
  titleOfMessage.style.color = '#27b53ac2';

    // Зміна стилів для .buttonInput
    changeStyleButton.style.background = '#85eb81';
    changeStyleButton.style.border = '2px solid #5ead68a9';
    changeStyleButton.style.textShadow = '1px 2px 2px #315536';

    // Зміна стилів для .error-message:nth-child(5)
    const errorMessage = document.querySelector('.error-message:nth-child(5)');
    errorMessage.style.backgroundColor = '#d0ffce';
    errorMessage.style.border = '1px solid #27b53a';

    // Зміна стилів для .passwordInput
    passwordInput.style.background = '#daf8d9';
    passwordInput.style.border = '2px solid #5ead68a9';
    passwordInput.value = '';


    // Зміна стилів для .passwordInput:focus
    passwordInput.addEventListener('focus', function() {
      passwordInput.style.borderColor = '#458b4e';
    });

    isStyleChanged = false;
  } else {
    // Повернення до початкових стилів

    // Зміна стилів для .wrongMessage
    const wrongMessage = document.querySelector('.wrongMessage');
    wrongMessage.style.display = 'block';

    const titleOfMessage = document.querySelector('.error-message:nth-child(5)>.titleOfMessage');
    titleOfMessage.style.color = '#b52c27a2';

    // Зміна стилів для .buttonInput
    changeStyleButton.style.background = '#fca3a3';
    changeStyleButton.style.border = '2px solid #b52b27';
    changeStyleButton.style.textShadow = '1px 2px 2px #745353';

    // Зміна стилів для .error-message:nth-child(5)
    const errorMessage = document.querySelector('.error-message:nth-child(5)');
    errorMessage.style.backgroundColor = '#ffebe6';
    errorMessage.style.border = '2px solid #b52b27';

    // Зміна стилів для .passwordInput
    passwordInput.style.background = '#ffe6e6';
    passwordInput.style.border = '2px solid #ff6e69';
    passwordInput.value = '';

    // Зміна стилів для .passwordInput:focus
    passwordInput.addEventListener('focus', function() {
      passwordInput.style.borderColor = '#b60b05';
    });

    isStyleChanged = true;
  }
});
