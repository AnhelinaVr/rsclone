import data from '../src/js/languageDate/languageDate.json';

test('this dataRoom has my desired features', () => {
  // Example Referencing
  expect(data.dataRooms[0][0]).toHaveProperty('srcImg');
});
