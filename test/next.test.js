import data from '../src/js/languageDate/languageDate.json';

describe('check not to be instance of', () => {
  it('check to be instance of Array', () => {
    expect(data.modalTitle).toBeInstanceOf(Array);
  });
});
