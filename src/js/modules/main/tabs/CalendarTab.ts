import Litepicker from 'litepicker/dist/js/main';
import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class Calendar {
    lockDays: Array<Array<String>>;
    indexLanguage: number;
    calendar: HTMLElement;
    picker: Litepicker;
    today: string;
    
    constructor(indexLanguage, lockDays) {
        this.indexLanguage = indexLanguage;
        this.lockDays = lockDays;
        const parent = document.getElementById('container__date');
        this.calendar = create('div', 'container__date__content',
            '<input type="text" class="new-input d-flex" id="litepicker" placeholder="click" tabindex="0">',
            parent);
        this.getCurrentDate();
        this.initCalendar();
    }

    initCalendar() {
        this.picker = new Litepicker({
            singleMode: false,
            element: document.getElementById('litepicker'),
            lang: `${languageData.langCalendar[this.indexLanguage]}`,
        });
        this.setLockedDays();
    }
    setLockedDays() {
        if (this.lockDays) {
            const past = ['2020-01-01', `${this.today}`]
            this.lockDays.push(past)
            this.picker.setLockDays(this.lockDays)
        }
    }
    getCurrentDate() {
        const date = new Date();
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        this.today = `${yyyy}-${mm}-${dd}`;
    }
}
