nagios-status-parser
===================

Parse the nagios status.dat file format

Example
-------

``` js
var fs = require('fs');
var parse = require('nagios-status-parser');

var status = fs.readFileSync('/var/spool/nagios/status.dat', 'utf8');

console.log(parse(status));
```

yields

``` json
{
  "info": [
    {
      "created": 1432848176,
      "version": "3.5.1",
      "last_update_check": 1432785937,
      "update_available": 1,
      "last_version": "3.5.1",
      "new_version": "4.0.8"
    }
  ],
  "programstatus": [
    {
      "modified_host_attributes": 1,
      "modified_service_attributes": 1,
      "nagios_pid": 89366,
      "daemon_mode": 1,
      "program_start": 1432097506,
      "last_command_check": 1432848166,
      "last_log_rotation": 1432771200,
      "enable_notifications": 0,
      ...
    }
  ],
  "hoststatus": [
    {
      "host_name": "arbiter.rapture.com",
      "modified_attributes": 0,
      "check_command": "check-host-alive",
      "check_period": "24x7",
      "notification_period": "24x7",
      "plugin_output": "PING OK - Packet loss = 0%, RTA = 0.10 ms",
      ...
    },
    {
      "host_name": "cifs.rapture.com",
      "modified_attributes": 0,
      "check_command": "check-host-alive",
      ...
    }
  ],
  "servicestatus": [
    {
      "host_name": "arbiter.rapture.com",
      "service_description": "Disk Usage /",
      "modified_attributes": 0,
      "check_command": "check_nrpe!check_disk",
      "check_period": "24x7",
      "plugin_output": "DISK OK - free space: / 7 GB (78% inode=99%):",
      ...
    },
    {
      "host_name": "arbiter.rapture.com",
      "service_description": "Shellshock",
      "modified_attributes": 0,
      "check_command": "check_nrpe!check_shellshock",
      "plugin_output": "ok: bash is secure against shellshock",
      ...
    },
  ]
  "contactstatus": [
    {
      "contact_name": "nagios",
      "host_notification_period": "24x7",
      "service_notification_period": "24x7",
      "last_service_notification": 1432021493,
      "host_notifications_enabled": 1,
      "service_notifications_enabled": 1,
      ...
    }
  ]
}
```

Command Line Tool
-----------------

    $ nagios-status-parser /var/spool/nagios/status.dat
    {
        ...
    }

Installation
------------

For the module

    npm install nagios-status-parser

For the command line tool

    [sudo] npm install -g nagios-status-parser

License
-------

MIT License
