const aboutUsButton = document.querySelector('.aboutus__button');
const aboutUsButtonMore = document.querySelector('.aboutus__button--more');
const aboutUsButtonCollapse = document.querySelector('.aboutus__button--collapse');
const mobileHiddenText = document.querySelector('.aboutus__text--mobile-hidden');
const hiddenTexts = document.querySelectorAll('[data-text-status="hidden"]');

const textToggle = () => {

  if (aboutUsButton.classList.contains('is-closed')) {
    aboutUsButton.classList.remove('is-closed');
    aboutUsButton.classList.add('is-opened');
    aboutUsButtonMore.style.display = 'none';
    aboutUsButtonCollapse.style.display = 'block';
    for (let i = 0; i < hiddenTexts.length; i++) {
      hiddenTexts[i].style.display = 'block';
    }
    if (window.innerWidth < 768) {
      mobileHiddenText.style.display = 'inline';
    }
  } else {
    aboutUsButton.classList.remove('is-opened');
    aboutUsButton.classList.add('is-closed');
    aboutUsButtonCollapse.style.display = 'none';
    aboutUsButtonMore.style.display = 'block';
    for (let i = 0; i < hiddenTexts.length; i++) {
      hiddenTexts[i].style.display = 'none';
    }
    if (window.innerWidth < 768) {
      mobileHiddenText.style.display = 'none';
    } else {
      mobileHiddenText.style.display = 'inline';
    }
  }
};

const onButtonClick = () => {
  textToggle();
};

const aboutUsButtonClick = () => {
  aboutUsButton.addEventListener('click', onButtonClick);
};

export {aboutUsButtonClick};
