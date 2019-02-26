const cheerio = require('cheerio');
const fs = require('fs');
const { latex2svg } = require('./latex2svg');
const { html, functions } = require('./samples');

async function main() {
  let $ = cheerio.load(html);
  let svgString = await latex2svg(functions);
  $('body').append(svgString);
  fs.writeFile('page.html', $.html(), function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('The file was saved!');
  });
}

main();
