import {max, min, mean, median, variance,std,sum} from 'mathjs';

export function calculate(numbers) {
  if (numbers.length < 1) return [];

  const results = {
    "max" : max(numbers),
    "min": min(numbers),
    "mean": mean(numbers),
    "median": median(numbers),
    "variance": variance(numbers),
    "std": std(numbers),
    "sum": sum(numbers),
  };
  return results;
}
