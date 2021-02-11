import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class HotKeysModal {
  indexLanguage: number;
  contentForm: HTMLElement;

  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main__modal__content__body');
    this.contentForm = create('div', 'container__hotkeys',
      `<p class="container__hotkeys__text">${languageData.hotKeysContent[this.indexLanguage][0]}</p>
       <p class="container__hotkeys__text">${languageData.hotKeysContent[this.indexLanguage][1]}</p>
       <p class="container__hotkeys__text">${languageData.hotKeysContent[this.indexLanguage][2]}</p>
       <p class="container__hotkeys__text">${languageData.hotKeysContent[this.indexLanguage][3]}</p>
       <p class="container__hotkeys__text">${languageData.hotKeysContent[this.indexLanguage][4]}</p>
       <p class="container__hotkeys__text">${languageData.hotKeysContent[this.indexLanguage][5]}</p>`,
      parent);
  }
}
