import data from '../src/js/languageDate/languageDate.json';

describe('check not to be instance of', () => {
  it('check not to be instance of function', () => {
    expect(data.modalTitle).not.toBeInstanceOf(Function);
  });
});
