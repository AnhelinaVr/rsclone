import { changeModalContent } from '../firebase/authorization';
import create from '../create';

export default class Modal {
    constructor() {
        const parent = document.querySelector('.main');
        this.modal = create('div', 'main__modal', null, parent, ['id', 'main__modal']);
        this.addListenersForButtonsOpenModal();
    }

    addListenersForButtonsOpenModal() {
        const buttonsWhichOpenModal = document.querySelectorAll('.button-open-modal');
        console.log(buttonsWhichOpenModal);
        buttonsWhichOpenModal.forEach((button) => {
            button.onclick = () => {
                console.log(button.textContent);
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
                const modalHeaderTitle = document.querySelector('.main__modal__content__header-title');
                if (param === 'ROOMS') {
                    modalHeaderTitle.innerHTML = 'List rooms in our hotel';
                    changeModalContent('swiperGalery');
                } else if (param === 'Log in') {
                    modalHeaderTitle.innerHTML = 'Confirm form';
                    changeModalContent('confirmForm', false);
                }
                this.modal.style.bottom = '0px';
            };
        });
    }

    modalClose() {
        this.span = document.querySelector('.main__modal__content__close');
        this.span.onclick = () => {
            this.modal.style.bottom = '-100%';
            this.modal.innerHTML = '';
        };
        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.modal.style.bottom = '-100%';
                this.modal.innerHTML = '';
            }
        };
    }
}
