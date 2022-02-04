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
        const str = data.toString('utf-8');
        const numbers = parse(str);
        const stats = calculate(numbers);

        const html = makeHTML(stats, numbers);
        const filename = file.split(".")[0];
        const template = dataTemplate(`Gagnasett ${filename}`, html, true);

        await writeFile(join(OUTPUT_DIR, `${filename}.html`), template, { flag: 'w+' });
        dataSets.push(filename);

    }
    const index = dataTemplate('Gagnavinnsla!', makeIndex(dataSets));
    await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
}

main().catch((err) => console.error(err));
