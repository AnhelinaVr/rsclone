import create from './utils/create';

export default class Audio {
  parent: HTMLElement;
  audio: HTMLAudioElement;
  constructor() {
    this.parent = document.querySelector('.main');
    this.audio = create('audio', 'audio', null, this.parent, ['src', 'assets/sounds/whoosh.mp3']);
  }
}
