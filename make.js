/* global target cd mkdir cp rm */
require('shelljs/make');
const config = require('./package.json').config;

const OUTPUT_DIR = config.output;
const STATIC_DIR = config.static;

target.static = () => {
  cd(__dirname);
  mkdir('-p', OUTPUT_DIR);
  cp('-R', STATIC_DIR, OUTPUT_DIR);
};

target.clean = () => {
  cd(__dirname);
  rm('-R', OUTPUT_DIR);
};
