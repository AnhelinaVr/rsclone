import create from '../main/utils/create';
import { changeLogButtonState } from '../main/utils/utils';
import { AccountManager } from '../firebase/accountManager';
import languageData from '../../languageDate/languageDate.json';

export default class HeaderPart {
  header: HTMLElement;
  hiddenTitleBlock: HTMLElement;
  infoBlock: HTMLElement;
  languageBlock: HTMLElement;
  containerButtonLog: HTMLElement;
  buttonConfirmForm: HTMLElement;
  containerButtonHot: HTMLElement;
  accountManager: AccountManager;
  indexLanguage: number;

  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.container-xl');
    this.header = create('header', 'header col-sm-12 d-flex align-items-center justify-content-between flex-wrap', null, parent);
    this.addHiddenTitleH1();
    this.addButtonOpenConfirmForm();
    this.addButtonOpenHotkeysModal();
    this.addContactInfo();
    this.addLanguageBlock();
  }

  addHiddenTitleH1() {
    this.hiddenTitleBlock = create('h1', 'header__hidden-title', 'Super Hotel', this.header);
  }

  addContactInfo() {
    this.infoBlock = create('div', 'header__info-part d-flex flex-wrap', [
      create('a', 'header__info-part__content d-flex align-items-center flex-nowrap',
        `<img class="header__info-part__content__icon" src="assets/icons/telephone.svg" alt="phone">
      <p class="header__info-part__content__text">+777 777 777</p>`, this.infoBlock, ['href', 'tel:+777 777 777'], ['tabindex', '0']),
      create('a', 'header__info-part__content d-flex align-items-center flex-nowrap',
        `<img class="header__info-part__content__icon" src="assets/icons/placeholder.svg" alt="placeholder">
      <p class="header__info-part__content__text">Kahuku, HI 96731</p>`, this.infoBlock, ['href', 'https://www.google.ru/maps/place/Kuilima+Dr,+Kahuku,+HI+96731,+%D0%A1%D0%A8%D0%90/@21.5409981,-157.9387017,9.75z/data=!4m5!3m4!1s0x7c005055eaf7c119:0xadac5046fe3ba1ce!8m2!3d21.7052579!4d-157.9987524'], ['tabindex', '0']),
    ], this.header);
  }

  addLanguageBlock() {
    this.languageBlock = create('div', 'header__language-block', [
      create('select', 'header__language-block__list',
        `<option class="header__language-block__list__item" value="EN">EN</option>
         <option class="header__language-block__list__item" value="RU">RU</option>
         <option class="header__language-block__list__item" value="DE">DE</option>`,
        this.languageBlock, ['id', 'select__language'], ['tabindex', '0']),
    ], this.header);
    (<HTMLOptionElement>document.querySelectorAll('.header__language-block__list__item')
    [this.indexLanguage]).selected = true;
  }

  async addButtonOpenConfirmForm() {
    this.containerButtonLog = create('div', 'header__container-button-log', null, this.header);
    this.buttonConfirmForm = create('button', 'button-open-modal header__container-button-log__button',
      languageData.logButton[this.indexLanguage], this.containerButtonLog, ['id', 'button-open-confirm-form'], ['tabindex', '0']);
    this.accountManager = new AccountManager(this.indexLanguage);
    const state = await this.accountManager.getUserState();
    if (state) {
      let name = await this.accountManager.getUserName();
      changeLogButtonState(true, name);
    }
  }

  addButtonOpenHotkeysModal() {
    this.containerButtonHot = create('div', 'header__container-button-hotkeys', null, this.header);
    this.buttonConfirmForm = create('button', 'button-open-modal header__container-button-hotkeys__button',
      '&#128293;', this.containerButtonHot, ['tabindex', '0']);
  }
}
