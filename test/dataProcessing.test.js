import { describe, expect, it } from '@jest/globals';
import { calculate } from '../dataProcessing';

describe('calculate', () => {
  it('statistical analysis of an array of numbers', () => {
    const input = [12,2,30,5];
    const result = {
      "max":30,
      "min":2,
      "mean":12.25,
      "median":8.5,
      "variance":157.58,
      "std":12.55,
      "sum":49
    }
    const dataProcess = calculate(input);

    expect(dataProcess).toBe(result);
  });

});
