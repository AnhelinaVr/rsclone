import data from '../src/js/languageDate/languageDate.json';

describe('check not equal', () => {
  const expected = { information: 'information' };

  it('check not equal statistic modal information', () => {
    expect(data.staticticsModal[0]).not.toEqual(expected);
  });
});
