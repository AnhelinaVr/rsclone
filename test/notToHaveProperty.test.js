import data from '../src/js/languageDate/languageDate.json';

test('this dataRoom has my desired features', () => {
  // Example Referencing
  expect(data.dataRooms[0][2]).not.toHaveProperty('floor');
});
