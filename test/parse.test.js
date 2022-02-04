import { describe, expect, it } from '@jest/globals';
import { parse } from '../parser';

describe('parser', () => {
  it('parses a String to Number', () => {
    const input = '1233';
    const parsed = parse(input);

    expect(parsed).toBe(1233);
  });
});
