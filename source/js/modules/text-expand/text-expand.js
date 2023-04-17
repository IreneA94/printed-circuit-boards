const mobileHiddenText = document.querySelector('[data-text-status="mobile-hidden"]');
const hiddenText = document.querySelector('[data-text-status="hidden"]');
const expandButton = document.querySelector('[data-expand-button="data-expand-button"]');

const textToggle = () => {
  if (expandButton.classList.contains('is-closed')) {
    expandButton.classList.remove('is-closed');
    expandButton.classList.add('is-opened');
    if (window.innerWidth >= 768) {
      hiddenText.style.height = `${hiddenText.previousElementSibling.clientHeight}px`;
    } else {
      hiddenText.style.height = `${hiddenText.previousElementSibling.clientHeight * 1.65}px`;
    }
    if (window.innerWidth < 768) {
      mobileHiddenText.style.display = 'block';
      mobileHiddenText.style.height = `${hiddenText.previousElementSibling.clientHeight * 0.7}px`;
    }
  } else {
    expandButton.classList.remove('is-opened');
    expandButton.classList.add('is-closed');
    hiddenText.style.height = null;
    if (window.innerWidth < 768) {
      mobileHiddenText.style.display = 'none';
      mobileHiddenText.style.height = null;
    } else {
      mobileHiddenText.style.display = 'block';
      mobileHiddenText.style.height = '100%';
    }
  }
};

const onButtonClick = (evt) => {
  evt.preventDefault();
  textToggle();
};

const textExpand = () => {
  expandButton.addEventListener('click', onButtonClick);
};

export {textExpand};
