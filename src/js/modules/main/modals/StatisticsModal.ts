import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';
import { addListenerForCloseModal } from '../utils/utils';
import { AccountManager } from '../../firebase/accountManager';
import { showStatisticsData } from '../../firebase/database';

export default class StaticticModal {
    indexLanguage: number;
    accountManager: AccountManager;
    contentModal: any;
    dialogContent: any;
    languageData: string[][];

    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        this.accountManager = new AccountManager(this.indexLanguage);
        const parent = document.querySelector('.main__modal__content__body');
        this.languageData = languageData.dialogInfo[this.indexLanguage];
        this.contentModal = create('div', 'container__statictics', null, parent);
        addListenerForCloseModal();
        this.createStatistics()
    }

    async createStatistics() {
        const genderData = [await showStatisticsData('gender', this.languageData[2][0]),
        await showStatisticsData('gender', this.languageData[3][0]),
        await showStatisticsData('gender', this.languageData[4][0])
        ];
        const ageData = [await showStatisticsData('age', this.languageData[2][1]),
        await showStatisticsData('age', this.languageData[3][1]),
        await showStatisticsData('age', this.languageData[4][1])
        ];
        const incomeData = [await showStatisticsData('income', this.languageData[2][2]),
        await showStatisticsData('income', this.languageData[3][2]),
        await showStatisticsData('income', this.languageData[4][2])
        ];
        this.addStatisticTable('gender', this.getPercent(genderData));
        this.addStatisticTable('age', this.getPercent(ageData));
        this.addStatisticTable('income', this.getPercent(incomeData));
    }

    getPercent(array) {
        const sum = array.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);
        let percentArray = [];
        array.forEach(element => {
            percentArray.push((element * 100 / sum).toFixed(2));
        });

        return percentArray;
    }

    addStatisticTable(type: string, date: number[]) {
        let typeIndex = null;
        switch (type) {
            case 'gender':
                typeIndex = 0;
                break;
            case 'age':
                typeIndex = 1;
                break;
            case 'income':
                typeIndex = 2;
                break;
            default:
                break;
        }
        create('table', 'container__statictics__table',
            `<thead class="container__statictics__table__thead">
                <tr class="container__statictics__table__thead__tr">
                    <th class="container__statictics__table__thead__th">${this.languageData[0][typeIndex]}</th>
                    <th class="container__statictics__table__thead__th">%</th>
                </tr>
            </thead>
            <tbody class="container__statictics__table__tbody">
                <tr class="container__statictics__table__tbody__tr">
                    <td class="container__statictics__table__tbody__td">${this.languageData[2][typeIndex]}</td>
                    <td class="container__statictics__table__tbody__td">${date[0]}</td>
                </tr>
                <tr class="container__statictics__table__tbody__tr">
                    <td class="container__statictics__table__tbody__td">${this.languageData[3][typeIndex]}</td>
                    <td class="container__statictics__table__tbody__td">${date[1]}</td>
                </tr>
                <tr class="container__statictics__table__tbody__tr">
                    <td class="container__statictics__table__tbody__td">${this.languageData[4][typeIndex]}</td>
                    <td class="container__statictics__table__tbody__td">${date[2]}</td>
                </tr>
            </tbody>`,
            this.contentModal);
    }
}
