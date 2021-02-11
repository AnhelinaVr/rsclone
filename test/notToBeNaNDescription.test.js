import data from '../src/js/languageDate/languageDate.json';

describe('check not to be NaN', () => {
  it('check not to be NaN dialog Info', () => {
    expect(data.description).not.toBeNaN();
  });
});
