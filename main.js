// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card__content');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';
const productTitle = document.querySelector('.products__title');
const toggleColorBtn = document.querySelector('#toggle-color-btn');

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card__content');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})


// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}


// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  console.log(message);
}


// Изменение текста заголовка

productTitle.addEventListener('mouseenter', () => {
  console.log(productTitle.textContent);
  productTitle.style.color = greenColorHash; 
});

productTitle.addEventListener('mouseleave', () => {
  productTitle.style.color = ''; 
});

toggleColorBtn.addEventListener('click', () => {
  productTitle.classList.toggle('active-color');
});
