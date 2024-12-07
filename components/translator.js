const americanToBritishSpelling = require('./american-to-british-spelling.js');

class Translator {
  wrap(translation) {
    return '<span class="highlight">' + translation + '</span>';
  }

  replace(text, object) {
    Object.entries(object).forEach(([key, value]) => {
      text = text.replace(new RegExp(`\\b${key}\\b`, 'g'), this.wrap(value));
    });
    return text;
  }

  americanToBritish(text) {
    text = text.replace(/(\d{1,2}):(\d{2})/, this.wrap('$1.$2'));
    text = this.replace(text, americanToBritishSpelling);
    text = text.replace(/(Mr|Mrs|Ms|Mx|Dr|Prof)\./g, this.wrap('$1'));
    return text;
  }
  
  britishToAmerican(text) {
    text = text.replace(/(\d{1,2})\.(\d{2})/, this.wrap('$1:$2'));
    text = this.replace(
      text,
      Object.entries(americanToBritishSpelling).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {})
    );
    text = text.replace(/(Mr|Mrs|Ms|Mx|Dr|Prof)\b/g, this.wrap('$1.'));
    return text;
  }
}

module.exports = Translator;