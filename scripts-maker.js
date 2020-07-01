#!/usr/bin/env node

// Requires
////////////////////////////////////////////////////////////////////

const fs = require("fs");
const emojis = require("./emojis.json");

// Working variables
////////////////////////////////////////////////////////////////////

const PREPROCESSOR_FILE = "preprocessor.sed";
const preprocessorData = [];

// Helper functions
////////////////////////////////////////////////////////////////////

function escape(str) {
  return str.replace(/\//g, "\\/");
}

function addDataToPreprocessor(emoji, url) {
  var src = escape(url);
  var string =
    "s/:" +
    emoji +
    ':/<img style="height:1em;vertical-align:middle;" src="' +
    src +
    '">/g;';
  preprocessorData.push(string);
}

// Execute script
////////////////////////////////////////////////////////////////////

for (var emoji in emojis) {
  var url = emojis[emoji];

  addDataToPreprocessor(emoji, url);
}

fs.writeFileSync(PREPROCESSOR_FILE, preprocessorData.join("\n"));
