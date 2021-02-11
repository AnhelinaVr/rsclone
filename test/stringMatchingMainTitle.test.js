/* eslint-disable no-undef */
import data from '../src/js/languageDate/languageDate.json';

const expected = [
  expect.stringMatching(/^PA/),
];
it('matches even if received contains additional elements', () => {
  expect(data.mainTitle).toEqual(
    expect.arrayContaining(expected),
  );
});
