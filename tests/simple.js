#!/usr/bin/env node

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var parse = require('../');

var data = parse(fs.readFileSync(path.join(__dirname, '../status.dat'), 'utf8'));

[
  'info',
  'programstatus',
  'hoststatus',
  'servicestatus',
  'contactstatus',
].forEach(function(key) {
  assert(data.hasOwnProperty(key));
  assert(Array.isArray(data[key]));
});

assert.equal(data.info[0].created, 1432848176);
assert.equal(data.info[0].version, '3.5.1');
assert.equal(data.programstatus[0].nagios_pid, 89366);
