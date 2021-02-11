import create from '../main/utils/create';

export default class FooterPart {
  footer: HTMLElement;
  textInfo: HTMLElement;
  logoInfo: HTMLElement;

  constructor() {
    const parent = document.querySelector('.container-xl');
    this.footer = create('footer', 'footer col-md-12 d-flex justify-content-around align-items-center', null, parent);
    this.addInfoFooter();
  }

  addInfoFooter() {
    this.textInfo = create('div', 'footer__text',
      `<a class="footer__text__link" href="https://github.com/AnhelinaVr">anhelinavr</a>
       <a class="footer__text__link" href="https://github.com/gandigap">gandigap</a>`,
      this.footer);
    this.logoInfo = create('div', 'footer__logo',
      `<a class="footer__logo__link" href="https://rs.school/">
        <img class="footer__logo__link__img" src="assets/images/rs_school_js.svg" alt="rs_school_js" tabindex="0">
      </a>
      <figcaption class="footer__logo__link__figcaption">2021</figcaption>`,
      this.footer);
  }
}
