const aboutUsButton = document.querySelector('.aboutus__button');
const aboutUsButtonMore = document.querySelector('.aboutus__button--more');
const aboutUsButtonCollapse = document.querySelector('.aboutus__button--collapse');
const mobileHiddenText = document.querySelector('[data-text-status="mobile-hidden"]');
const hiddenText = document.querySelector('[data-text-status="hidden"]');

const textToggle = () => {

  if (aboutUsButton.classList.contains('is-closed')) {
    aboutUsButton.classList.remove('is-closed');
    aboutUsButton.classList.add('is-opened');
    aboutUsButtonMore.style.display = 'none';
    aboutUsButtonCollapse.style.display = 'block';
    if (window.innerWidth >= 768) {
      hiddenText.style.height = `${hiddenText.previousElementSibling.clientHeight}px`;
    } else {
      hiddenText.style.height = '340px';
    }
    if (window.innerWidth < 768) {
      mobileHiddenText.style.height = '130px';
    }
  } else {
    aboutUsButton.classList.remove('is-opened');
    aboutUsButton.classList.add('is-closed');
    aboutUsButtonCollapse.style.display = 'none';
    aboutUsButtonMore.style.display = 'block';
    hiddenText.style.height = null;
    if (window.innerWidth < 768) {
      mobileHiddenText.style.height = null;
    } else {
      mobileHiddenText.style.display = 'block';
      mobileHiddenText.style.height = '100%';
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
