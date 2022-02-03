
export function parse(input) {
    const array = input.toString('utf-8').split('\n').map(Number);
    const parsed = [];
    for(let i = 0; i < array.length; i++) {
      if(Number.isInteger(array[i])) {
        parsed.push(array[i]);
      }
    }

    return parsed;
}

