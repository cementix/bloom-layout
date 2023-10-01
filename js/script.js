const dropdownMenu = document.querySelector('.dropdownMenu')
const toggleNavButton = document.querySelector('.toggleNavButton')

let isMenuActive = false;

toggleNavButton.addEventListener('click', () => {

  const buttonImage = toggleNavButton.querySelector('img');
  if (isMenuActive) {
    buttonImage.src = './assets/images/barsLogo.svg';
    dropdownMenu.classList.remove('active');
  } else {
    buttonImage.src = './assets/images/xLogo.svg';
    dropdownMenu.classList.add('active');
  }

  isMenuActive = !isMenuActive;
});