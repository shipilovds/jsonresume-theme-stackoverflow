const { SafeString } = require('handlebars');
const { join } = require('path');

const headers = require(join(__dirname, '..', 'lang', 'headers.js'));

const i18n = (key, lang) => {
  if (!lang || !headers[lang] || !headers[lang][key]) {
    return '';
  }
  return new SafeString(headers[lang][key]);
};

module.exports = { i18n };
