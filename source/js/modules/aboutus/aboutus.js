const mobileHiddenText = document.querySelector('[data-text-status="mobile-hidden"]');
const hiddenText = document.querySelector('[data-text-status="hidden"]');
const aboutUsButton = document.querySelector('[data-expand-button="data-expand-button"]');

const textToggle = () => {
  if (aboutUsButton.classList.contains('is-closed')) {
    aboutUsButton.classList.remove('is-closed');
    aboutUsButton.classList.add('is-opened');
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
