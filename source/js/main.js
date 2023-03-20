import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {aboutUsButtonClick} from './modules/aboutus/aboutus';
import {initAccordions} from './modules/accordeon/init-accordion';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
    aboutUsButtonClick();
  });
});
