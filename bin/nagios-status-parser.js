#!/usr/bin/env node
var fs = require('fs');

var parse = require('../');

var status = fs.readFileSync(process.argv[2] || '/dev/stdin', 'utf8');

console.log(JSON.stringify(parse(status), null, 2));
