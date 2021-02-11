import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';
import { showAndAddStructureModal, changeModalContent, addListenerForCloseModal } from '../utils/utils';

export default class Modal {
  modalContent: HTMLElement;
  indexLanguage: number;
  modal: HTMLElement;
  audio: HTMLAudioElement;
  modalHeaderTitle: HTMLElement;
  span: HTMLSpanElement;
  confirmForm: HTMLFormElement;

  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main');
    this.modal = create('div', 'main__modal', null, parent, ['id', 'main__modal']);
    this.addListenersForButtonsOpenModal();
  }

  addListenersForButtonsOpenModal() {
    const buttonsWhichOpenModal = document.querySelectorAll('.button-open-modal');
    buttonsWhichOpenModal.forEach((button: HTMLButtonElement) => {
      button.onclick = () => {
        document.body.style.overflow = 'hidden';
        const param = button.textContent;
        showAndAddStructureModal();
        addListenerForCloseModal();

        if (param === languageData.galleryButton[this.indexLanguage]) {
          changeModalContent('gallery', this.indexLanguage);
        } else if (param === languageData.logButton[this.indexLanguage]) {
          changeModalContent('logIn', this.indexLanguage);
        } else if (param === '🔥') {
          changeModalContent('hotKeys', this.indexLanguage);
        } else {
          changeModalContent('setting', this.indexLanguage);
        }
      };
    });
  }
}
