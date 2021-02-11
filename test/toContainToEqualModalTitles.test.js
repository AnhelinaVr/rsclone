import data from '../src/js/languageDate/languageDate.json';

describe('to contain to equal', () => {
  test('to contain modal titles', () => {
    expect(data.modalTitle).toContainEqual([
      'List rooms in our hotel',
      'Список номеров в нашем отеле',
      'Liste zimmer in unserem hotel',
    ]);
  });
});
