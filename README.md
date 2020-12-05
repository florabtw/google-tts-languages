# Google TTS Languages

> :warning: This repo is deprecated and replaced by [google-translate-tts](https://github.com/ncpierson/google-translate-tts)

This repository is for keeping track of the current languages supported
by the "secret" Google Translate TTS API. They are not documented anywhere, so
I have to keep track of them manually, and sometimes they change.

I made this little repository because I use these language codes frequently in
my website "Sound of Text" (soundoftext.com).

I thought that maybe someone else would find them useful, as well, and might
be able to help me keep these languages up to date.

You can find a list of these languages at https://soundoftext.com/docs#voices.

# Install

```
yarn add google-tts-languages
```

# Usage

```js
const languages = require('google-tts-languages');

console.log(languages);

/*
[ { code: 'af-ZA', name: 'Afrikaans' },
  { code: 'sq', name: 'Albanian' },
  { code: 'ar-AE', name: 'Arabic' },
  ...
  ]
 */

const name = languages.findByCode('es-MX').name;            // Spanish (Mexico)
const code = languages.findByName('Spanish (Mexico)').code; // es-MX
```

I highly recommend just looking at `index.js`. It is very easy to understand.
