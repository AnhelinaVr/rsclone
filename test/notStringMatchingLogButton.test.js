import data from '../src/js/languageDate/languageDate.json';

const expected = [
  expect.stringMatching(/^er/),
];
it('does not match if received does not contain expected elements', () => {
  expect(data.logButton).not.toEqual(
    expect.arrayContaining(expected),
  );
});
