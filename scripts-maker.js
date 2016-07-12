#!/usr/bin/env node

var fs = require('fs');
var emojis = require('./emojis.json');

var PREPROCESSOR_FILE = 'preprocessor.sh';
var DOWNLOADER_FILE = 'downloader.sh';

var preprocessorData = ['#!/bin/bash', 'sed \''];
var downloaderData = ['#!/bin/bash', 'rm -rf emojis', 'mkdir emojis'];

for (var emoji in emojis) {
  var url = emojis[emoji];
  var filename = getFilenameFromUrl(url);

  addDataToPreprocessor(emoji, filename);
  addDataToDownloader(url, filename);
}

preprocessorData.push('    \'');

fs.writeFileSync(PREPROCESSOR_FILE, preprocessorData.join('\n'));
fs.writeFileSync(DOWNLOADER_FILE, downloaderData.join('\n'));

function escape(str) {
  return str.replace(/\//g, '\\/');
}

function getFilenameFromUrl(url) {
  return url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?'));
}

function addDataToPreprocessor(emoji, filename) {
  var src = escape(__dirname + '/emojis/' + filename);
  var string = '     s/:' + emoji +
      ':/<img style="height:20px;vertical-align:middle;" src="' + src + '">/g;';
  preprocessorData.push(string);
}

function addDataToDownloader(url, filename) {
  var string = 'curl ' + url + ' > emojis/' + filename;
  downloaderData.push(string);
}
