const test = require('ava'),
  languages = require('./index.js'),
  tts = require('google-tts-api'),
  http = require('https'),
  URL = require('url').URL;

function attemptRequest(url) {
  const { host, pathname, search } = new URL(url);

  const options = {
    host: host,
    path: pathname + search,
    timeout: 10000
  };

  return new Promise((resolve, reject) => {
    http
      .get(options, res => {
        if (res.statusCode >= 300) reject(url);
        resolve();
      })
      .on('error', reject);
  });
}

test('All language codes are valid', async t => {
  const urlPromises = languages.map(language => tts('test', language.code));
  const urls = await Promise.all(urlPromises);
  const responses = urls.map(attemptRequest);

  await Promise.all(responses);
  t.pass();
});
