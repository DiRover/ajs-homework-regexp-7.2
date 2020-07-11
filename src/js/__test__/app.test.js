import getTelNumber from '../app';

test('check telephone number 1', () => {
  const tel = '8 (927) 000-00-00';
  const expected = '+79270000000';
  const received = getTelNumber(tel);
  expect(received).toBe(expected);
});

test('check telephone number 2', () => {
  const tel = '+7 960 000 00 00';
  const expected = '+79600000000';
  const received = getTelNumber(tel);
  expect(received).toBe(expected);
});

test('check telephone number 3', () => {
  const tel = '+86 000 000 0000';
  const expected = '+860000000000';
  const received = getTelNumber(tel);
  expect(received).toBe(expected);
});

test('check telephone number 4', () => {
  const tel = '+86 00d0 000 0000';
  const expected = 'Number is not valid';
  const received = getTelNumber(tel);
  expect(received).toBe(expected);
});
