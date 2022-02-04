import { describe, expect, it } from '@jest/globals';
import { parse } from '../parser';

describe('parser', () => {
  it('parses a text file', () => {
    const input = '1233';

    const parsed = parse(input);

    expect(parsed.content).toBe(1233);
  });

});
