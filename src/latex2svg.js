const { spawn } = require('child_process');

exports.latex2svg = async function(latexString) {
  const latex = spawn('latex', {
    stdio: ['pipe', 'ignore', 'ignore']
  });
  streamWrite(latex.stdin, latexString);
  latex.stdin.end();
  await onExit(latex);

  const dvisvgm = spawn(
    'dvisvgm',
    ['--libgs=/usr/local/bin/gs', '--stdout', '--verbosity=0', 'texput.dvi'],
    {
      stdio: ['ignore', 'pipe', 'ignore']
    }
  );

  let svgString = '';
  for await (const chunk of dvisvgm.stdout) {
    svgString += chunk;
  }

  return svgString;
};

// http://2ality.com/2018/05/child-process-streams.html#wait-for-a-child-process-to-exit-via-a-promise
function onExit(childProcess) {
  return new Promise((resolve, reject) => {
    childProcess.once('exit', (code, signal) => {
      if (code === 0) {
        resolve(undefined);
      } else {
        reject(new Error('Exit with error code: ' + code));
      }
    });
    childProcess.once('error', err => {
      reject(err);
    });
  });
}

// http://2ality.com/2018/05/child-process-streams.html#promisified-writing-to-streams
function streamWrite(stream, chunk, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    const errListener = err => {
      stream.removeListener('error', errListener);
      reject(err);
    };
    stream.addListener('error', errListener);
    const callback = () => {
      stream.removeListener('error', errListener);
      resolve(undefined);
    };
    stream.write(chunk, encoding, callback);
  });
}
