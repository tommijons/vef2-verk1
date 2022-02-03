import { readFile, readdir, stat, mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { direxists } from './lib/file.js';
import { parse } from './parser.js';
import { calculate } from './dataProcessing.js';
import { makeHTML, dataTemplate, makeIndex } from './make-html.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';


async function main() {
    const files = await readdir(DATA_DIR);

    if (!(await direxists(OUTPUT_DIR))) {
      await mkdir(OUTPUT_DIR);
    }

    const dataSets = [];

    for (const file of files) {
        const path = join(DATA_DIR, file);
        const info = await stat(path);

        if (info.isDirectory()) {
          // eslint-disable-next-line no-continue
          continue;
        }
        const data = await readFile(path);

        const numbers = parse(data);
        const stats = calculate(numbers);

        //console.log('numbers :>> ', numbers);
        const results = {
          numbers,
          stats
        }
        const html = makeHTML(stats, numbers);
        const template = dataTemplate(`Gagnasett ${file}`, html, true);
        const filename = file.split(".")[0];

        await writeFile(join(OUTPUT_DIR, `${filename}.html`), template, { flag: 'w+' });
        dataSets.push(filename);

    }

    const index = dataTemplate('Gagnavinnsla!', makeIndex(dataSets));
    await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });

}

main().catch((err) => console.error(err));

/*
// les skrá af disk og skilar sem string
const content = await readDataFile(file);

// les string og skilar fylki af tölum
const numbers = parse(content);

// les fylki af tölum og skilar tölfræði upplýsingum í object
const stats = calculate(numbers);

// tekur saman upplýsingar sem template þarf
const result = {
  numbers,
  stats,
  // hér vantar fleira, t.d. skáarnafn á html skrá
};

// tekur við upplýsingum og skilar html
const template = statsTemplate(title, result);

await writeHtmlFile(template);
*/
