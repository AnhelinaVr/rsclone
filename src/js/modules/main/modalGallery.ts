import create from './utils/create';
export default class ModalGallery {
  button: HTMLElement;
  modal: HTMLElement;

  constructor() {
    const parent = document.querySelector('.main__other-section__sub-content-block__gallery-modal');
    this.button = create('button', 'main__other-section__sub-content-block__gallery-modal__button', 'ROOMS', parent, ['id', 'myBtn']);
    this.modal = create('div', 'main__other-section__sub-content-block__gallery-modal__modal',
      `<div class="main__other-section__sub-content-block__gallery-modal__modal__content">
        <div class="main__other-section__sub-content-block__gallery-modal__modal__content__header">
          <span class="main__other-section__sub-content-block__gallery-modal__modal__content__close">&times;</span>
          <h2>List rooms in our hotel</h2>
        </div>
        <div class="main__other-section__sub-content-block__gallery-modal__modal__content__body">
        </div>
      </div>`,
      parent, ['id', 'myModal']);
    this.modalOpenClose();
  }

  modalOpenClose() {
    const modal = document.getElementById('myModal');
    const span = <HTMLElement>document.getElementsByClassName('main__other-section__sub-content-block__gallery-modal__modal__content__close')[0];
    this.button.onclick = () => {
      modal.style.bottom = '0px';
      modal.style.opacity = '1';
    };
    span.onclick = () => {
      modal.style.bottom = '-100%';
      modal.style.opacity = '0';
    };
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.bottom = '-100%';
        modal.style.opacity = '0';
      }
    };
  }
}
