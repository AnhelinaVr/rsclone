import data from '../src/js/languageDate/languageDate.json';

describe('check not to be undefined', () => {
  it('check not to be undefined dialog Info', () => {
    expect(data.confirmFormField).not.toBeUndefined();
  });
});
