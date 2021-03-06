import { monoalphabetic } from '../../lib/monoalphabetic';
import { letters } from '../../lib/util';

test('successful monoalphabetic substitution (no spaces/punctuation)', () => {
  const shuffledLetters = 'zyxwlkjihgfedcbavutsrqponm'.toUpperCase();
  const mapping = letters.reduce((obj: { [letter: string]: string }, letter: string, idx: number) => {
    obj[letter] = shuffledLetters[idx];
    return obj;
  }, {});

  const input = 'ABCDXYZ';
  const expected = 'ZYXWONM';

  const result = monoalphabetic(input, mapping);

  expect(result).toBe(expected);
});

test('successful monoalphabetic substitution (spaces/punctuation)', () => {
  const shuffledLetters = 'zyxwlkjihgfedcbavutsrqponm'.toUpperCase();
  const mapping = letters.reduce((obj: { [letter: string]: string }, letter: string, idx: number) => {
    obj[letter] = shuffledLetters[idx];
    return obj;
  }, {});

  const input = `MOM'S SPAGHETTI`;
  const expected = `DBD'T TAZJILSSH`;

  const result = monoalphabetic(input, mapping);

  expect(result).toBe(expected);
});

test('crash if mapping is incorrect', () => {
  // mapping letters to themselves
  const mapping = letters.reduce((obj: { [letter: string]: string }, letter: string, idx: number) => {
    obj[letter] = letters[idx];
    return obj;
  }, {});

  const input = 'ABCDXYZ';

  expect(() => {
    monoalphabetic(input, mapping);
  }).toThrowError();
});
