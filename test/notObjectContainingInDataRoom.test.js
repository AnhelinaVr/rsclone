import data from '../src/js/languageDate/languageDate.json';

describe('check not containing some in dataRooms', () => {
  const expected = { some: 'information' };

  it('matches if the actual object does not contain expected key: value pairs', () => {
    expect(data.dataRooms[0][0]).toEqual(expect.not.objectContaining(expected));
  });
});