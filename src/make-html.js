
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
    <section>
      <div class="data">
        <p>Gögn: ${numbers}</p>
      </div>
    </section>
  `;
  const noData = `
  <section>
    <p>Gagnasett hefur engin leyfileg gögn</p>
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
      <link rel="stylesheet" href="../src/styles.css">
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
    const link = `<li><a href="${`${entry}.html`}">Gagnasett ${entry}</a></li>`;
    list += link;
  }

  return `<ul>${list}</ul>`;
}
