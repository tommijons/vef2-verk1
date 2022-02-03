
export function makeHTML(stats, numbers) {
    const template = `
    <section>
      <p>Stærsta gildi: ${stats.max}</p>
      <p>Minnsta gildi: ${stats.min}</p>
      <p>Meðaltal: ${stats.mean}</p>
      <p>Miðgildi: ${stats.median}</p>
      <p>Summa: ${stats.sum}</p>
      <p>Frávik: ${stats.variance}</p>
      <p>Staðalfrávik: ${stats.std}</p>
      <p>Svið: ${stats.max - stats.min}</p>
    </section>
  `;
  const noData = `
  <section>
    <p>No data</p>
  </section>
`;
  if (numbers.length < 1) {
    return noData;
  }else return template;
}

export function dataTemplate(title, data, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title ?? ''}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${data ?? ''}
      ${back}
    </body>
  </html>`;
}

export function makeIndex(entries) {
  let list = '';
  for (const entry of entries) {
    //const { file, fileName } = entry;
    const link = `<li><a href="${`${entry}.html`}">${entry}</a></li>`;
    list += link;
  }

  return `<ul>${list}</ul>`;
}
/*
export function makeHTML(entry) {
    const html = entry.content;
    const { date } = entry.metadata;

    const template = `
      <section>
        ${html}
        <p>Skrifað: ${date}</p>
      </section>
    `;

    return template;
  }

  export function makeIndex(entries) {
    let list = '';
    for (const entry of entries) {
      const { slug, title } = entry;
      const link = `<li><a href="${`${slug}.html`}">${title}</a></li>`;
      list += link;
    }

    return `<ul>${list}</ul>`;
  }


  export function blogTemplate(title, blog, showBack = false) {
    const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
    return `
    <!doctype html>
    <html>
      <head>
        <title>${title ?? ''}</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        ${blog ?? ''}
        ${back}
      </body>
    </html>`;
  }
  */
