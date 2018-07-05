'use strict';

var express = require('express');
var kraken = require('kraken-js');
// var db = require('./lib/database');
// var mysql = require('mysql');

// var mysqlConn = mysql.createConnection({
//     "host": "localhost",
//     "database": "sirai_suvai",
//     "password":"password",
//     "user":"root"
//   });

var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
app.listen(1111, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, 1111);
});

// app.get('/', function(req, res) {
//     // res.send("Hello");
//     console.log(mysqlConn);
//     mysqlConn.query("SELECT 1", function(err, result) {
//         res.send({
//             error: err,
//             result: result
//         });
//     })
// });