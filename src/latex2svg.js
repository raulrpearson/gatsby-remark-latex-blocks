const cheerio = require('cheerio');
const fs = require('fs');
const { spawn } = require('child_process');
const { Readable, Duplex } = require('stream');
const { house, graph, functions, html } = require('./samples');

const latexInput = new Readable();
const svgOutput = new Duplex();
let $ = cheerio.load(html);
$('body').append('<p>Hey look a paragraph!</p>');

const latex = spawn('latex', {
  stdio: ['pipe', 'ignore', 'ignore']
});

latexInput.pipe(latex.stdin);

latex.on('close', code => {
  console.log(`latex child process exited with code ${code}`);
  const dvi2svg = spawn(
    'dvisvgm',
    ['--libgs=/usr/local/bin/gs', '--stdout', '--verbosity=0', 'texput.dvi'],
    {
      stdio: ['ignore', 'pipe', 'ignore']
    }
  );
  let svgString = '';
  dvi2svg.stdout.on('data', data => (svgString += data));
  dvi2svg.stdout.on('end', () => {
    $('body').append(svgString);
    fs.writeFile('page.html', $.html(), function(err) {
      if (err) {
        return console.error(err);
      }
      console.log('The file was saved!');
    });
    console.log('Finished!');
  });
});

// Push the datas in!
latexInput.push(graph);
latexInput.push(null);
