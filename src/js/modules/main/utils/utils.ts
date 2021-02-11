import languageData from '../../../languageDate/languageDate.json';
import ConfirmFormModal from '../modals/ConfirmFormModal';
import HotKeysModal from '../modals/HotKeysModal';
import SettingUserModal from '../modals/SettingUserModal';
import GalleryRoomsModal from '../modals/GalleryRoomsModal';
import StatisticsModal from '../modals/StatisticsModal';

export const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

export const toggleTheme = () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
};

export function findNumberOpenTab() {
  let number = -1;
  const allTabs = document.querySelectorAll('.main__other-section__tabs__tabcontent');
  allTabs.forEach((element, index) => {
    if (element.classList.contains('tab__open')) {
      number = index;
    }
  });
  return number;
}

export function openTabAndChangeStep(numberTab) {
  const tabOpen = document.querySelector('.tab__open');
  const stepActive = document.querySelector('.tab__button-active');
  const allTabs = document.querySelectorAll('.main__other-section__tabs__tabcontent');
  const allSteps = document.querySelectorAll('.main__other-section__tabs__tab__button');
  tabOpen.classList.remove('tab__open');
  stepActive.classList.remove('tab__button-active');
  allTabs[numberTab].classList.add('tab__open');
  allSteps[numberTab].classList.add('tab__button-active');
}

export function checkButtonDisable(numberTab) {
  const buttonPrev = document.getElementById('button-prev-step');
  const buttonNext = document.getElementById('button-next-step');
  if (numberTab === 0) {
    buttonPrev.classList.add('button__disable');
  } else {
    buttonPrev.classList.remove('button__disable');
  }

  if (numberTab === 2) {
    buttonNext.classList.add('button__disable');
  } else {
    buttonNext.classList.remove('button__disable');
  }
}

export function changeLogButtonState(isLogged: boolean, buttonText: any) {
  if (isLogged) {
    const buttonLog = document.querySelector('.header__container-button-log__button');
    buttonLog.classList.add('header__container-button-log__setting');
    buttonLog.textContent = `${buttonText}`;
    buttonLog.classList.remove('header__container-button-log__button');
  } else {
    const buttonSet = document.querySelector('.header__container-button-log__setting');
    buttonSet.classList.add('header__container-button-log__button');
    buttonSet.classList.remove('header__container-button-log__setting');
    buttonSet.textContent = `${buttonText}`;
  }
  showTitleForPleaseRegister(isLogged);
}

export function addListenerForCloseModal() {
  const buttonModalClose = <HTMLButtonElement>document.querySelector('.main__modal__content__close');
  const modal = <HTMLElement>document.querySelector('.main__modal');
  buttonModalClose.addEventListener('click', () => {
    modalClose();
  });
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modalClose();
    }
  });
}

export function modalClose() {
  const modal = <HTMLElement>document.querySelector('.main__modal');
  const audio = <HTMLAudioElement>document.querySelector('.audio');
  modal.style.bottom = '-100%';
  modal.innerHTML = '';
  audio.play();
  document.body.style.overflow = 'auto';
}

export function showAndAddStructureModal() {
  const mainModal = <HTMLElement>document.querySelector('.main__modal');
  const audio = <HTMLAudioElement>document.querySelector('.audio');
  mainModal.innerHTML = `<div class="main__modal__content">
                                    <div class="main__modal__content__header d-flex justify-content-between">
                                      <button class="main__modal__content__close">
                                        <span>&times;</span>
			                                  <span>close</span>
                                      </button>
                                      <h2 class="main__modal__content__header-title"></h2>
                                    </div>
                                    <div class="main__modal__content__body">
                                    </div>
                                  </div>`;
  audio.play()
  mainModal.style.bottom = '0px';

}

export function changeModalContent(contentType: string, indexLanguage: number) {
  const modalHeaderTitle = document.querySelector('.main__modal__content__header-title');
  let modalContent = null;
  switch (contentType) {
    case 'gallery':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[0][indexLanguage]}`;
      modalContent = new GalleryRoomsModal(indexLanguage);
      break;
    case 'logIn':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[1][indexLanguage]}`;
      modalContent = new ConfirmFormModal('logIn', indexLanguage);
      break;
    case 'registration':
      modalContent = new ConfirmFormModal('registration', indexLanguage);
      break;
    case 'resetPassword':
      modalContent = new ConfirmFormModal('resetPassword', indexLanguage);
      break;
    case 'hotKeys':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[2][indexLanguage]}`;
      modalContent = new HotKeysModal(indexLanguage);
      break;
    case 'setting':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[3][indexLanguage]}`;
      modalContent = new SettingUserModal(indexLanguage);
      break;
    case 'stats':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[4][indexLanguage]}`;
      modalContent = new StatisticsModal(indexLanguage);
      break;
    default:
      break;
  }
}

export function showTitleForPleaseRegister(state) {
  const tab = <HTMLElement>document.querySelector('.main__other-section__tabs__tab');
  const tabOpen = <HTMLElement>document.querySelector('.tab__open');
  const stepButton = <HTMLElement>document.querySelector('.main__other-section__tabs__button-step-block');
  const logInBlocker = <HTMLElement>document.querySelector('.main__other-section__test');
  const blockerText = <HTMLElement>document.querySelector('.main__other-section__blocker-text');
  const indexLanguage = localStorage.getItem('indexLanguage') || 0;
  if (!state) {
    tab.classList.add('d-none');
    tabOpen.classList.add('d-none');
    stepButton.classList.add('d-none');
    logInBlocker.style.display = 'flex';
    blockerText.innerText = `${languageData.titleForLog[indexLanguage]}`;
  } else {
    tab.classList.remove('d-none');
    tabOpen.classList.remove('d-none');
    stepButton.classList.remove('d-none');
    logInBlocker.style.display = 'none';
  }

}
