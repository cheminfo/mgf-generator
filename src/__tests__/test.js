import { readFileSync } from 'fs';
import { join } from 'path';

import { parse } from 'mgf-parser';

import generateMGF from '..';

let data = readFileSync(join(__dirname, './data/test.mgf'), 'utf8');
let parsedData = parse(data);

let longDataRaw = readFileSync(join(__dirname, './data/longData.mgf'), 'utf8');
let longData = parse(longDataRaw);

let twoEntriesRaw = readFileSync(
  join(__dirname, './data/twoEntries.mgf'),
  'utf8',
);
let twoEntries = parse(twoEntriesRaw);

describe('generateMGF', () => {
  it('should return simple data', () => {
    let result = generateMGF(parsedData);
    expect(data).toBe(result);
  });
  it('should return two entries data', () => {
    let result = generateMGF(twoEntries);
    expect(twoEntriesRaw).toBe(result);
  });
  it('should return long data', () => {
    let result = generateMGF(longData);
    expect(longDataRaw).toBe(result);
  });
});
