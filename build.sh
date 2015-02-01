#!/usr/bin/env sh

set -ev

rm -rf js-src js-test
mocha --harmony --colors --reporter spec test
mkdir -p static
browserify src/* > static/zendo.js
