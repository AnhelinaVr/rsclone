import create from './utils/create';
import MainModal from './modals/MainModal';
import DescriptionPart from './descriptionPart';
import Tabs from './tabs/Tabs';
import Audio from './audio';
import languageData from '../../languageDate/languageDate.json';

export default class MainPart {
    indexLanguage: number;
    main: HTMLElement;
    totalInfoSection: HTMLElement;
    otherInfoSection: HTMLElement;
    tabs: Tabs;
    subContentBlock: HTMLElement;
    someBlock: HTMLElement;
    containerForButtonOpenGalleryRooms: HTMLElement;
    descriptionHotel: DescriptionPart;
    audio: Audio;
    modal: MainModal;
    mainTitle: HTMLElement;
    figureMainImage: HTMLElement;
    buttonSearchGallery: HTMLButtonElement;

    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        const parent = document.querySelector('.container-xl');
        this.main = create('main', 'main d-flex', null, parent);
        this.totalInfoSection = null;
        this.otherInfoSection = null;
        this.addSections();
    }

    addSections() {
        this.totalInfoSection = create('section', 'main__total-section col-xl-5 d-flex flex-column align-items-center p-0', null, this.main);
        this.otherInfoSection = create('section', 'main__other-section col-xl-7 d-flex flex-column p-0', null, this.main);
        this.tabs = new Tabs(this.indexLanguage);
        this.addBlockWithMainImageAndTitle();
        this.addBlockWithSubContent();
    }

    addBlockWithSubContent() {
        this.subContentBlock = create('div', 'main__other-section__sub-content-block row m-0', null, this.otherInfoSection); //d-flex align-self-end
        this.someBlock = create('div', 'main__other-section__sub-content-block__description col-sm-12 col-md-9 p-0', null, this.subContentBlock);
        this.containerForButtonOpenGalleryRooms = create('div', 'main__other-section__sub-content-block__button-container col-sm-12 col-md-3 p-0', null, this.subContentBlock);
        this.descriptionHotel = new DescriptionPart(this.indexLanguage);
        this.addButtonOpenGalleryRooms();
        this.audio = new Audio();
        this.modal = new MainModal(this.indexLanguage);
    }

    addBlockWithMainImageAndTitle() {
        this.mainTitle = create('h2', 'main__total-section__title', `${languageData.mainTitle[this.indexLanguage]}`, this.totalInfoSection);
        this.figureMainImage = create('figure', 'main__total-section__image-container',
            `<img class="main__total-section__image-container__img" src="assets/images/apartments/hotel.svg" alt="${languageData.mainTitle[this.indexLanguage]}">`,
            this.totalInfoSection);
    }

    addButtonOpenGalleryRooms() {
        this.buttonSearchGallery = create('button', 'button-open-modal main__other-section__sub-content-block__button-container__button col-md-12 p-0',
            `${languageData.galleryButton[this.indexLanguage]}`,
            this.containerForButtonOpenGalleryRooms, ['id', 'button-open-gallery'], ['tabindex', '0']);
    }
}
