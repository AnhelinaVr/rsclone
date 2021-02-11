import data from '../src/js/languageDate/languageDate.json';

describe('check title galery button', () => {
  const title = data.galleryButton[2];

  test('check', () => {
    expect(title).not.toBe('ROOMS');
  });
});
