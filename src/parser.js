
export function parse(input) {
  const data = input.split('\n').map(Number);
  const parsed = [];
  for(const input of data) {
    if(Number.isInteger(input)) {
      parsed.push(input);
    }
  }
  console.log(parsed);
  return parsed;
}

function clean(string) {
  if (string === null || string === '' || string === undefined) return NaN;
  const trimmed = string.toString.trim(); if (trimmed === '') return NaN;
  const cleanStr = string.toString().replace(/[^a-zA-Z0-9]/g, '');
  //cleanStr.map(Number);
  console.log(cleanStr);
  return cleanStr

}
