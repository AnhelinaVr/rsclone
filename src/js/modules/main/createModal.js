import ConfirmForm from './confirmForm';
import SwiperGalery from './addGalery';
import create from '../create';
import languageData from '../../languageDate/languageDate.json';

export default class Modal {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main');
    this.modal = create('div', 'main__modal', null, parent, ['id', 'main__modal']);
    this.addListenersForButtonsOpenModal();
  }

  addListenersForButtonsOpenModal() {
    const buttonsWhichOpenModal = document.querySelectorAll('.button-open-modal');
    this.audio = document.querySelector('.audio');
    buttonsWhichOpenModal.forEach((button) => {
      button.onclick = () => {
        document.body.style.overflow = 'hidden';
        const param = button.textContent;
        this.modal.innerHTML = `<div class="main__modal__content">
                                    <div class="main__modal__content__header">
                                      <span class="main__modal__content__close">&times;</span>
                                      <h2 class="main__modal__content__header-title"></h2>
                                    </div>
                                    <div class="main__modal__content__body">
                                    </div>
                                  </div>`;
        this.modalClose();
        this.modalHeaderTitle = document.querySelector('.main__modal__content__header-title');
        if (param === languageData.galeryButton[this.indexLanguage]) {
          this.addGaleryToModal();
        } else if (param === languageData.logButton[this.indexLanguage]) {
          this.addConfirmForm();
        }
        this.audio.play();
        this.modal.style.bottom = '0px';
      };
    });
  }

  modalClose() {
    this.span = document.querySelector('.main__modal__content__close');
    this.span.onclick = () => {
      this.modal.style.bottom = '-100%';
      this.modal.innerHTML = '';
      this.audio.play();
      document.body.style.overflow = 'auto';
    };
    window.onclick = (event) => {
      if (event.target === this.modal) {
        this.modal.style.bottom = '-100%';
        this.modal.innerHTML = '';
        this.audio.play();
        document.body.style.overflow = 'auto';
      }
    };
  }

  addGaleryToModal() {
    this.modalHeaderTitle.innerHTML = `${languageData.modalTitle[0][this.indexLanguage]}`;
    this.galery = new SwiperGalery(this.indexLanguage);
  }

  addConfirmForm() {
    this.modalHeaderTitle.innerHTML = `${languageData.modalTitle[1][this.indexLanguage]}`;
    this.confirmForm = new ConfirmForm(this.indexLanguage);
  }
}
