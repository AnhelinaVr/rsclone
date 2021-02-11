import create from './utils/create';
import languageData from '../../languageDate/languageDate.json';

export default class DescriptionPart {
  indexLanguage: number;
  parent: HTMLElement;
  description: HTMLElement;
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.parent = document.querySelector('.main__other-section__sub-content-block__description');
    this.initDescription();
  }

  initDescription() {
    this.description = create('div', 'main__other-section__sub-content-block__description__content',
      `<div class="description__content__text">
        <p class="description__content__text__info">${languageData.description[this.indexLanguage]}</p>
       </div>
       <div class="description__content__facilities d-flex justify-content-around flex-wrap">
        <div class="description__content__facilities__facility" data-name-en="Free WiFi Internet Access Included">
          <svg class="svg__facilities" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
            focusable="false">
            <circle cx="64" cy="100" r="12" />
            <path
              d="M118.3 32.7A94.9 94.9 0 0 0 64 16 94.9 94.9 0 0 0 9.7 32.7a4 4 0 1 0 4.6 6.6A87 87 0 0 1 64 24a87 87 0 0 1 49.7 15.3 4 4 0 1 0 4.6-6.6zM87.7 68.4a54.9 54.9 0 0 0-47.4 0 4 4 0 0 0 3.4 7.2 47 47 0 0 1 40.6 0 4 4 0 0 0 3.4-7.2z" />
            <path d="M104 50.5a81.2 81.2 0 0 0-80 0 4 4 0 0 0 4 7 73.2 73.2 0 0 1 72 0 4 4 0 0 0 4-7z" />
          </svg>

        </div>
        <div class="description__content__facilities__facility" data-name-en="Parking (fee required)">
          <svg class="svg__facilities" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
            focusable="false">
            <path d="M70.8 44H58v16h12.8a8 8 0 0 0 0-16z" />
            <path
              d="M108 8H20A12 12 0 0 0 8 20v88a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12V20a12 12 0 0 0-12-12zM70 76H58v24H42V28h28a24 24 0 0 1 0 48z" />
          </svg>

        </div>
        <div class="description__content__facilities__facility" data-name-en="Family Rooms">
          <svg class="svg__facilities" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
            focusable="false">
            <path
              d="M18 18a10 10 0 1 1 10 10 10 10 0 0 1-10-10zm26 16s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.5-4L40 77.6a4.3 4.3 0 0 1 1.3-2.7l1.9-1.8a4.3 4.3 0 0 0 1.2-2.6L48 40c.3-2.6.1-5-3.9-6zm20 23a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm11.2 2.4A73.6 73.6 0 0 0 64 58a73.6 73.6 0 0 0-11.2 1.4c-2.8.7-3 2.3-2.7 4.1l2.3 21a3 3 0 0 0 1 1.9l1.2 1.2a3 3 0 0 1 1 2l2.4 27.7a3.1 3.1 0 0 0 3.1 2.7H67a3.1 3.1 0 0 0 3.1-2.8l2.5-27.7a3 3 0 0 1 1-1.9l1.2-1.2a3 3 0 0 0 .9-1.8l2.4-21c.2-1.9 0-3.5-2.8-4.2zM100 28a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm16 6s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.4-4l3.6-38.4a4.3 4.3 0 0 1 1.3-2.7l1.8-1.8a4.3 4.3 0 0 0 1.3-2.6L120 40c.3-2.6.1-5-3.9-6z" />
          </svg>

        </div>
        <div class="description__content__facilities__facility" data-name-en="Non Smoking Rooms">
          <svg class="svg__facilities" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
            focusable="false">
            <path
              d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 0 1-36.6-79l31 31H28v8h38.3L95 100.6A47.8 47.8 0 0 1 64 112zm36.6-17l-23-23H84v-8H69.7L33 27.4A48 48 0 0 1 100.6 95zM92 64h8v8h-8zm0-10c0-7.7-5.9-14-13.2-14H78a2 2 0 0 1-2-2 10 10 0 0 0-10-10h-8a2 2 0 0 1 0-4h8a14 14 0 0 1 13.8 12c9 .6 16.2 8.4 16.2 18a2 2 0 0 1-4 0zm-8 0a2 2 0 0 1-4 0 2 2 0 0 0-2-2h-3a15 15 0 0 1-15-15 2 2 0 0 1 4 0 11 11 0 0 0 11 11h3a6 6 0 0 1 6 6z" />
          </svg>

        </div>
        <div class="description__content__facilities__facility" data-name-en="Restaurant">
          <svg class="svg__facilities" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
            focusable="false">
            <path
              d="M44.1 8.9L48 44a12 12 0 0 1-12 12h-3.6l3.4 59.8a4 4 0 0 1-4 4.2h-7.6a4 4 0 0 1-4-4.2L23.6 56H20A12 12 0 0 1 8 44l3.9-35.1a1 1 0 0 1 1-.9H15a1 1 0 0 1 1 1v19a4 4 0 0 0 4 4h4.8L26 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1l1.2 23H36a4 4 0 0 0 4-4V9a1 1 0 0 1 1-1h2.1a1 1 0 0 1 1 .9zM60 24v48h8l-3.8 43.8a4 4 0 0 0 4 4.2h7.6a4 4 0 0 0 4-4.2L80 8h-4a16 16 0 0 0-16 16zm60 8c0-13.3-7.2-24-16-24S88 18.8 88 32c0 11 5 20.2 11.6 23l-3.4 60.8a4 4 0 0 0 4 4.2h7.6a4 4 0 0 0 4-4.2L108.4 55c6.7-2.8 11.6-12 11.6-23z" />
          </svg>

        </div>
        <div class="description__content__facilities__facility" data-name-en="Rooms&#47;Facilities for Disabled">
          <svg class="svg__facilities" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
            focusable="false">
            <path d="M83 93.5a24 24 0 1 1-43.1-20.8L36 58a36 36 0 1 0 53 48.7z" />
            <circle cx="56" cy="20" r="12" />
            <path
              d="M107 111.6a4 4 0 0 1-4.8-2.2L90.5 83.2 61 84a8 8 0 0 1-8.2-7q-3.3-15.4-7.7-30.7c-1.3-4.3 1.6-8.5 6.6-9.2l9-1.4c5.1-.8 9.9 2.1 10.4 6.5l1 8.6L93 52a4 4 0 0 1 0 8l-19.7 1.1.6 7.2 19.1.5c4 .2 5.9 2.2 6.6 4.2l10.2 33.6a4 4 0 0 1-2.8 5z" />
          </svg>

        </div>
        <div class="description__content__facilities__facility" data-name-en="Bar">
          <svg class="svg__facilities" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
            focusable="false">
            <rect x="60" y="74" width="8" height="44" />
            <rect x="60" y="94" width="8" height="40" rx="4" ry="4" transform="rotate(-90 64 114)" />
            <path
              d="M100 34H28a4 4 0 0 0-3.2 6.4l36 48a4 4 0 0 0 6.4 0l36-48A4 4 0 0 0 100 34zM78.7 61.7H49.3l-16-21.2h61.4z" />
            <rect x="75.5" y="-1.4" width="6" height="81.9" rx="3" ry="3" transform="rotate(36.31 78.487 39.584)" />
            <circle cx="90.6" cy="21.9" r="8" />
          </svg>

        </div>
      </div>`, this.parent, ['id', 'about']);
  }
}
