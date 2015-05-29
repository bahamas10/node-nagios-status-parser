var autocast = require('autocast');

module.exports = nagiosstatusparser;
function nagiosstatusparser(s, opts) {
  opts = opts || {};
  if (opts.autocast !== false)
    opts.autocast = true;

  var lines = s.trim().split('\n');

  var out = {};
  var section;
  var data;
  lines.forEach(function(line) {
    if (!line || line.substr(0, 1) === '#')
      return;

    var m;
    if ((m = line.match(/^([^\s]+) {/))) {
      if (section && data)
        out[section].push(data);
      section = m[1];
      out[section] = out[section] || [];
      data = {};
      return;
    } else if (line.match(/\s*}/)) {
      return;
    }

    var index = line.indexOf('=');
    var key = line.substr(0, index).trim();
    var value = line.substr(index + 1);

    if (opts.autocast)
      value = autocast(value);

    if (key)
      data[key] = value;
  });
  out[section].push(data);

  return out;
}
