import data from '../src/js/languageDate/languageDate.json';

test('button prev contain title', () => {
  expect(data.buttonPrevStep).toContain('Zurück');
});
