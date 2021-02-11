import create from '../utils/create';
import {
    findNumberOpenTab,
    openTabAndChangeStep,
    checkButtonDisable,
    showTitleForPleaseRegister
} from '../utils/utils';
import Calendar from './CalendarTab';
import RadioButtonsForm from './RadioButtonsRoomsTab';
import ModalDialogTab from './ModalDialogTab';
import languageData from '../../../languageDate/languageDate.json';
import { writeHotelRoom, setRoomsDate } from '../../firebase/database';

export default class Tabs {
    indexLanguage: number;
    tabs: HTMLElement;
    numberCurrentTab: number;
    tab: HTMLElement;
    test: HTMLElement;
    tabcontent1: HTMLElement;
    tabcontent2: HTMLElement;
    tabcontent3: HTMLElement;
    radioButtonsForm: RadioButtonsForm;
    modalDialogTab: ModalDialogTab;
    buttonStepBlock: HTMLElement;
    calendar: Calendar;

    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        const parent = document.querySelector('.main__other-section');
        this.tabs = create('div', 'main__other-section__tabs d-flex flex-column', null, parent, ['id', 'booking']);
        this.numberCurrentTab = null;
        this.addTabContent();
    }

    addTabContent() {
        this.test = create('div', 'main__other-section__test', `<p class="main__other-section__blocker-text"></p>`, this.tabs);
        this.tab = create('div', 'main__other-section__tabs__tab d-flex', [
        create('div', 'main__other-section__tabs__tab progress', '', undefined),
            create('button', 'main__other-section__tabs__tab__button flex-grow-1 tab__button-active', `${languageData.tabHeader[this.indexLanguage]} 1`, undefined),
            create('button', 'main__other-section__tabs__tab__button flex-grow-1', `${languageData.tabHeader[this.indexLanguage]} 2`, undefined),
            create('button', 'main__other-section__tabs__tab__button flex-grow-1', `${languageData.tabHeader[this.indexLanguage]} 3`, undefined),
        ], this.tabs);
        this.tabcontent1 = create('div', 'main__other-section__tabs__tabcontent tab__open', [
            create('h3', 'main__other-section__tabs__tabcontent__title', `${languageData.tabcontent1Title[this.indexLanguage]}`, undefined),
        ], this.tabs, ['id', 'container__rooms']);
        this.tabcontent2 = create('div', 'main__other-section__tabs__tabcontent', [
            create('h3', 'main__other-section__tabs__tabcontent__title', `${languageData.tabcontent2Title[this.indexLanguage]}`, undefined),
        ], this.tabs, ['id', 'container__date']);
        this.tabcontent3 = create('div', 'main__other-section__tabs__tabcontent', [
            create('h3', 'main__other-section__tabs__tabcontent__title', `${languageData.tabcontent3Title[this.indexLanguage]}`, undefined),
        ], this.tabs, ['id', 'container__dialog']);
        this.radioButtonsForm = new RadioButtonsForm(this.indexLanguage);
        this.addBlockWithButtonsWhichChangeTabs();
        this.calendar = new Calendar(this.indexLanguage, '');
        this.modalDialogTab = new ModalDialogTab(this.indexLanguage);
        showTitleForPleaseRegister(false);
    }

    addBlockWithButtonsWhichChangeTabs() {
        this.buttonStepBlock = create('div', 'main__other-section__tabs__button-step-block d-flex justify-content-center',
            `<button class="main__other-section__tabs__button-step-block__button" id="button-prev-step" tabindex="0">${languageData.buttonPrevStep[this.indexLanguage]}</button>
       <button class="main__other-section__tabs__button-step-block__button" id="button-next-step" tabindex="0">${languageData.buttonNextStep[this.indexLanguage]}</button>`,
            this.tabs);
        this.numberCurrentTab = findNumberOpenTab();
        checkButtonDisable(this.numberCurrentTab);
        this.addListenerForButtonsWhichChangeTabs();
    }

    async addListenerForButtonsWhichChangeTabs() {
        const buttonsChangeTab = document.querySelectorAll('.main__other-section__tabs__button-step-block__button');
        let inputs = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.radio-buttons-form__radiobtn__input');
        let index = 0;
        inputs.forEach((input, i) => {
            input.addEventListener('click', async () => {
                if (input.checked) index = i;
                const roomType = inputs[index].value;
                const datesArr = await writeHotelRoom(roomType);
                document.querySelector('.container__date__content').remove();
                this.calendar = new Calendar(this.indexLanguage, datesArr);
            });
        });
        buttonsChangeTab.forEach((element) => {
            element.addEventListener('click', () => {
                switch (this.numberCurrentTab) {
                    case 1:
                        const dates = (<HTMLInputElement>document.querySelector('#litepicker')).value.split(' - ');
                        setRoomsDate(dates);
                        break;
                    default:
                        break;
                }
                if (element.getAttribute('id') === 'button-prev-step' && this.numberCurrentTab !== 0) {
                    this.numberCurrentTab -= 1;
                } else if (element.getAttribute('id') === 'button-next-step' && this.numberCurrentTab !== 2) {
                    this.numberCurrentTab += 1;
                }
                openTabAndChangeStep(this.numberCurrentTab);
                checkButtonDisable(this.numberCurrentTab);
            });
        });
    }
}
