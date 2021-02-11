import {
  toggleTheme,
  findNumberOpenTab,
  openTabAndChangeStep,
  checkButtonDisable,
} from './utils';

export default class HotKeysListener {
  html: HTMLHtmlElement;
  switcher: HTMLInputElement;
  coef: number;
  number: number;
  
  constructor() {
    this.html = document.querySelector('html');
    this.switcher = document.querySelector('.color__switcher');
    this.coef = 1;
    this.keyButtonListeners();
  }

  keyButtonListeners() {
    this.enlargeFont();
    this.reduceFont();
    this.changeLightTheme();
    this.changeDarkTheme();
    this.openTabs();
  }

  enlargeFont() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyZ' && (event.altKey || event.metaKey) && this.coef < 10) {
        this.coef += 1;
        this.html.style.fontSize = `1${this.coef}px`;
      }
    });
  }

  reduceFont() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyX' && (event.altKey || event.metaKey) && this.coef > 1) {
        this.coef -= 1;
        this.html.style.fontSize = `1${this.coef}px`;
      }
    });
  }

  changeLightTheme() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyC' && (event.altKey || event.metaKey)) {
        if (!this.switcher.checked) {
          this.switcher.checked = true;
          toggleTheme();
        }
      }
    });
  }

  changeDarkTheme() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyV' && (event.altKey || event.metaKey)) {
        if (this.switcher.checked) {
          this.switcher.checked = false;
          toggleTheme();
        }
      }
    });
  }

  openTabs() {
    document.addEventListener('keydown', (event) => {
      this.number = findNumberOpenTab();
      if (event.code === 'KeyS' && (event.altKey || event.metaKey) && this.number !== 2) {
        this.number += 1;
      } else if (event.code === 'KeyA' && (event.altKey || event.metaKey) && this.number !== 0) {
        this.number -= 1;
      }
      openTabAndChangeStep(this.number);
      checkButtonDisable(this.number);
    });
  }
}
