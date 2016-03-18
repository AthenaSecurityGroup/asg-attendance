require('shelljs/make');
/* global target cd mkdir cp */

const OUTPUT_DIR = process.env.npm_package_config_output;
const STATIC_DIR = process.env.npm_package_config_static;


target.static = () => {
    cd(__dirname);
    mkdir('-p', OUTPUT_DIR);
    cp('-R', STATIC_DIR, OUTPUT_DIR);
}