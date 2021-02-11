import create from '../main/utils/create';
import { setTheme, toggleTheme } from '../main/utils/utils';

export default class SwitcherColor {
  containerSwitcher: HTMLElement;
  switcher: HTMLInputElement;
  
  constructor() {
    const parent = document.querySelector('.header');
    this.containerSwitcher = create('div', 'switcher-theme-container',
      `<label id="switch" class="switch">
          <input class="color__switcher" type="checkbox" id="slider">
          <span class="slider round"></span>
       </label>`, parent);
    this.switcher = document.querySelector('.color__switcher');
    this.switcher.addEventListener('change', () => {
      toggleTheme();
    });

    (() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        (<HTMLInputElement>document.getElementById('slider')).checked = false;
      } else {
        setTheme('theme-light');
        (<HTMLInputElement>document.getElementById('slider')).checked = true;
      }
    })();
  }
}
