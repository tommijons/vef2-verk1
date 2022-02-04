export function parse(input) {
  const data = input.split('\n');
  const parsed = [];
  for(const input of data) {
    cleanData(input);
    if(!isNaN(input)) {
      parsed.push(input);
    }
  }
  return parsed.filter(Number);
}

function cleanData(input) {
  if (input === null || input === '' || input === undefined) return NaN;
  input.replaceAll('.', '');
  input.replace(',', '.');
  input.trim();
  return input;
}
