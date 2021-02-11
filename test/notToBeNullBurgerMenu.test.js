import data from '../src/js/languageDate/languageDate.json';

describe('check not to be null', () => {
  it('check not to be Null Burger menu', () => {
    expect(data.burgerMenu).not.toBeNull();
  });
});
