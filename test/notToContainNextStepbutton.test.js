import data from '../src/js/languageDate/languageDate.json';

test('button next not contain title', () => {
  expect(data.buttonNextStep).not.toContain('Следующий');
});
