import data from '../src/js/languageDate/languageDate.json';

describe('check not stringContaining in dataRooms', () => {
  const expected = 'Queen Zimmer';

  it('matches if the received value does not contain the expected substring', () => {
    expect(data.dataRooms[2][2].name).toEqual(expect.stringContaining(expected));
  });
});
