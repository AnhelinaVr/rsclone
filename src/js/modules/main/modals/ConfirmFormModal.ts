import create from '../utils/create';
import { AccountManager } from '../../firebase/accountManager';
import languageData from '../../../languageDate/languageDate.json'
import MainModal from '../modals/MainModal';
import { changeModalContent, changeLogButtonState, modalClose } from '../utils/utils';

export default class ConfirmForm {
  submitType: string;
  indexLanguage: number;
  accountManager: AccountManager;
  contentForm: HTMLElement;
  modal: MainModal;

  constructor(submitType: string, indexLanguage: number) {
    this.submitType = submitType;
    this.indexLanguage = indexLanguage;
    this.accountManager = new AccountManager(this.indexLanguage);
    this.contentForm = this.createForm();
    this.validate();
  }

  createForm() {
    const parent = document.querySelector('.main__modal__content__body');
    switch (this.submitType) {
      case 'registration':
        return create('div', 'container__confirm-form',
          `<div class="container__confirm-form__error-message hidden"></div>
          <div class="container__confirm-form__message">
          </div>
          <form id="confirm-form" class="container__confirm-form__form" novalidate>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.name[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" name="name" required>
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.Email[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.password[this.indexLanguage]}:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.confirmPassword[this.indexLanguage]}:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password-confirm" data-confirm-password>
            </div>
             <button class="container__confirm-form__button" type="submit">${languageData.confirmFormField.button[this.indexLanguage]}</button>
          </form>`,
          parent);
      case 'logIn':
        return create('div', 'container__confirm-form',
          `<div class="container__confirm-form__error-message hidden"></div>
          <div class="container__confirm-form__message">
                      </div>
          <form id="confirm-form" class="container__confirm-form__form" novalidate>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.Email[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.password[this.indexLanguage]}:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password">
            </div>
            <button class="container__confirm-form__button" data-object="reset-password">${languageData.confirmFormField.forgotPassword[this.indexLanguage]}</button>
            <button class="container__confirm-form__button" type="submit">${languageData.confirmFormField.button[this.indexLanguage]}</button>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.notRegister[this.indexLanguage]}</label>
              <button class="container__confirm-form__button" data-object="register">${languageData.confirmFormField.register[this.indexLanguage]}</button>
            </div>
          </form>`,
          parent);
      case 'resetPassword':
        return create('div', 'container__confirm-form',
          `<div class="container__confirm-form__error-message hidden"></div>
          <div class="container__confirm-form__message">
                      </div>
          <form id="confirm-form" class="container__confirm-form__form" novalidate>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.Email[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email">
            </div>
            <button class="container__confirm-form__button" type="submit">${languageData.confirmFormField.button[this.indexLanguage]}</button>
          </form>`,
          parent);
      default:
        break;
    }
  }

  validate() {
    const form = document.getElementById('confirm-form');
    const messageContainer = document.querySelector('.container__confirm-form__message');
    form.addEventListener('click', (e: any) => {
      if (e.target.tagName === 'BUTTON' && e.target.dataset.object) {
        form.outerHTML = '';
        form.remove();
        switch (e.target.dataset.object) {
          case 'register':
            changeModalContent('registration', this.indexLanguage);
            break;
          case 'reset-password':
            // this.accountManager.resetPassword()
            changeModalContent('resetPassword', this.indexLanguage);
            break;
          default:
            break;
        }

      }
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      switch (this.submitType) {
        case 'logIn':
          await this.accountManager.signInUser(messageContainer);
          break;
        case 'registration':
          await this.accountManager.registerUser(messageContainer);
          break;
        case 'resetPassword':
          await this.accountManager.resetPassword(messageContainer)
          break;
        default:
          break;
      }
      let name = await this.accountManager.getUserName();
      changeLogButtonState(true, name);
      setTimeout(() => {
        modalClose()
      }, 2000);
    }, false);
  }
}
