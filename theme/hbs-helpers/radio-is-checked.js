const { SafeString } = require('handlebars');

const isChecked = (lang, curr_lang) => {
  if (lang === curr_lang) {
    return new SafeString('checked');
  }
  return new SafeString('');
};

module.exports = { isChecked };
