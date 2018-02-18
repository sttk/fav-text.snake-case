'use strict';

var split = require('@fav/text.camel-case').split;

function snakeCase(text) {
  return join(split(text));
}

function join(words) {
  if (!words.length) {
    return '';
  }

  var ret = String(words[0]).toLowerCase();

  for (var i = 1, n = words.length; i < n; i++) {
    ret += '_' + String(words[i]).toLowerCase();;
  }

  return ret;
}

Object.defineProperties(snakeCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = snakeCase;
