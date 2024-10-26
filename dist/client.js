"use strict";

var _require = require('pg'),
  Client = _require.Client;
var pgclient = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: 'postgres',
  password: 'postgres',
  database: 'postgres'
});
pgclient.connect();
pgclient.query('SELECT NOW()', function (err, res) {
  if (err) throw err;
  console.log(res);
  pgclient.end();
});