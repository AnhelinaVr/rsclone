import data from '../src/js/languageDate/languageDate.json';

describe('to contain to equal', () => {
  test('not to contain tab content 1 title', () => {
    expect(data.tabcontent1Title).not.toContainEqual([
      'Please select a room',
      'абракадабра',
      'Bitte wählen Sie ein Zimmer',
    ]);
  });
});
