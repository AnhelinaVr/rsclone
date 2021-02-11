import data from '../src/js/languageDate/languageDate.json';

describe('check containing imgSrc in dataRooms', () => {
    const expected = { srcImg: 'assets/images/apartments/quad-room.svg' };

    it('matches if the actual object does not contain expected key: value pairs', () => {
        expect(data.dataRooms[1][0]).toEqual(expect.objectContaining(expected));
    });
});