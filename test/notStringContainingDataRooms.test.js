import data from '../src/js/languageDate/languageDate.json';

describe('check not stringContaining in dataRooms', () => {
  const expected = 'Super zimmer';

  it('matches if the received value does not contain the expected substring', () => {
    expect(data.dataRooms[2][1].name).toEqual(expect.not.stringContaining(expected));
  });
});
