import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';
import { modalClose, showAndAddStructureModal, changeModalContent } from '../utils/utils';
import { AccountManager } from '../../firebase/accountManager';

export default class SettingUserModal {
    indexLanguage: number;
    accountManager: AccountManager;
    languageData: { buttonsContent: string[]; dialogButtons: string[]; dialogTitle: string; };
    contentModal: HTMLElement;
    dialog: HTMLDialogElement;
    buttonsSetting: NodeListOf<Element>;
    buttonsDialog: NodeListOf<Element>;
    dialogContent: HTMLElement;

    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        this.accountManager = new AccountManager(this.indexLanguage);
        const parent = document.querySelector('.main__modal__content__body');
        this.languageData = languageData.settingModal[this.indexLanguage];
        this.contentModal = create('div', 'container__setting',
            `<button class="container__setting__button button-change-pass" tabindex="0">${this.languageData.buttonsContent[0]}</button>
         <button class="container__setting__button button-delete-user" tabindex="0">${this.languageData.buttonsContent[1]}</button>
         <button class="container__setting__button button-log-out" tabindex="0">${this.languageData.buttonsContent[2]}</button>
         <dialog class="container__setting__dialog">
            <h3 class="container__setting__dialog__title">${this.languageData.dialogTitle}</h3>
            <div class="container__setting__dialog__buttons"></div>
         </dialog>`, parent);
        this.dialog = document.querySelector('.container__setting__dialog');
        this.addButtonStatsForAdmin();
        this.addListenersForButtonSetting();
    }

    addListenersForButtonSetting() {
        this.buttonsSetting = document.querySelectorAll('.container__setting__button');
        this.buttonsSetting.forEach((el) => {
            el.addEventListener('click', () => {
                if (el.classList.contains('button-get-stats')) {
                    modalClose();
                    showAndAddStructureModal();
                    changeModalContent('stats', this.indexLanguage);
                } else {
                    this.dialog.showModal();
                    if (el.classList.contains('button-delete-user')) {
                        this.addContentDialog('delete');
                    } else if (el.classList.contains('button-log-out')) {
                        this.addContentDialog('out');
                    } else if (el.classList.contains('button-change-pass')) {
                        this.addContentDialog('pass');
                    }
                }
            });
        });
    }

    addListenersForButtonSettingDialog() {
        this.buttonsDialog = document.querySelectorAll('.container__setting__dialog__buttons__button');
        this.buttonsDialog.forEach((el) => {
            el.addEventListener('click', () => {
                if (el.classList.contains('button-true-delete')) {
                    const inputPass = <HTMLInputElement>document.querySelector('.container__setting__dialog__buttons__input');
                    this.accountManager.deleteUser(inputPass);
                } else if (el.classList.contains('button-true-pass')) {
                    const inputPass = <HTMLInputElement>document.querySelector('.container__setting__dialog__buttons__input');
                    this.accountManager.changePassword(inputPass);
                } else if (el.classList.contains('button-true-out')) {
                    this.accountManager.signOut();
                }
                this.dialog.close();
                modalClose();
            });
        });
    }

    addContentDialog(type: string) {
        this.dialogContent = document.querySelector('.container__setting__dialog__buttons');
        this.dialogContent.remove();
        if (type === 'pass') {
            create('div', 'container__setting__dialog__buttons',
                `<input class="container__setting__dialog__buttons__input" type="password" tabindex="0" placeholder="${languageData.placeholderChangePassword[this.indexLanguage]}">
                <button class="container__setting__dialog__buttons__button button-false" tabindex="0">${this.languageData.dialogButtons[0]}</button>
                <button class="container__setting__dialog__buttons__button button-true-${type}" tabindex="0">${this.languageData.dialogButtons[1]}</button>`,
                this.dialog);
        } else if (type === 'delete') {
            create('div', 'container__setting__dialog__buttons',
                `<input class="container__setting__dialog__buttons__input" type="password" tabindex="0" placeholder="${languageData.placeholderConfirmPassword[this.indexLanguage]}">
                <button class="container__setting__dialog__buttons__button button-false" tabindex="0">${this.languageData.dialogButtons[0]}</button>
                <button class="container__setting__dialog__buttons__button button-true-${type}" tabindex="0">${this.languageData.dialogButtons[1]}</button>`,
                this.dialog);
        }
        else {
            create('div', 'container__setting__dialog__buttons',
                `<button class="container__setting__dialog__buttons__button button-false" tabindex="0">${this.languageData.dialogButtons[0]}</button>
                <button class="container__setting__dialog__buttons__button button-true-${type}" tabindex="0">${this.languageData.dialogButtons[1]}</button>`,
                this.dialog);
        }
        this.addListenersForButtonSettingDialog();
    }

    addButtonStatsForAdmin() {
        const name = document.querySelector('.header__container-button-log__setting').textContent;
        if (name === 'admin') {
            create('button', 'container__setting__button button-open-modal button-get-stats', 'Stats', this.contentModal, ['tabindex', '0']);
        }
    }
}
