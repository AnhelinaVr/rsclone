import Swiper from 'swiper';
import create from '../utils/create';
import CardRoom from './CardRoom';
import languageData from '../../../languageDate/languageDate.json';

export default class SwiperGallery {
    indexLanguage: number;
    swiperContainer: HTMLElement;
    swiperContainer2: HTMLElement;
    countCard: number;
    galleryThumbs: Swiper;
    galleryTop: Swiper;
    currentCard: CardRoom;
    roomsData: Array<object>;

    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        const parent = document.querySelector('.main__modal__content__body');
        this.swiperContainer = create('div', 'swiper-container gallery-top',
            `<div class="swiper-wrapper"></div>
       <div class="swiper-button-next swiper-button-white"></div>
       <div class="swiper-button-prev swiper-button-white"></div>`,
            parent);
        this.swiperContainer2 = create('div', 'swiper-container gallery-thumbs',
            '<div class="swiper-wrapper"></div>', parent);
        this.roomsData = languageData.dataRooms[this.indexLanguage];
        this.countCard = 0;
        this.addCardsWithRooms();
        this.initSwiper();
    }

    initSwiper() {
        this.galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        this.galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: this.galleryThumbs,
            },
        });
    }

    addCardsWithRooms() {
        this.roomsData.forEach((element) => {
            this.currentCard = new CardRoom(element, this.countCard, this.indexLanguage);
            this.countCard += 1;
        });
    }
}
