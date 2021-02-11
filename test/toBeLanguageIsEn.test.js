import data from '../src/js/languageDate/languageDate.json';

describe('check language is EN', () => {
  const lan = data.languages[0];

  test('check', () => {
    expect(lan).toBe('EN');
  });
});