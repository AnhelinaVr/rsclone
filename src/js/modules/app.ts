import changeLanguage from './main/utils/changeLanguage';
import HeaderPart from './header/HeaderPart';
import MainPart from './main/MainPart';
import FooterPart from './footer/FooterPart';
import BurgerMenu from './header/BurgerMenu';
import HotKeysListener from './main/utils/hotKeysListener';
import create from './main/utils/create';
import SwitcherColor from './header/SwitcherColorTheme';

export default class App {
  indexLanguage: number;
  header: HeaderPart;
  container: HTMLElement;
  body: HTMLBodyElement;
  main: MainPart;
  footer: FooterPart;
  burgerMenu: BurgerMenu;
  switcherColor: SwitcherColor;
  hotKeysListeners: HotKeysListener;

  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.body = document.querySelector('body');
    this.header = null;
  }

  createWrapper() {
    this.container = create('div', 'container-xl p-0', null, this.body);
  }

  createAppStructure() {
    this.header = new HeaderPart(this.indexLanguage);
    this.main = new MainPart(this.indexLanguage);
    this.footer = new FooterPart();
    this.burgerMenu = new BurgerMenu(this.indexLanguage);
    this.switcherColor = new SwitcherColor();
    this.hotKeysListeners = new HotKeysListener();
  }
}

const indexLanguage = +localStorage.getItem('indexLanguage') || 0;
const app = new App(indexLanguage);
app.createWrapper();
app.createAppStructure();
changeLanguage();


