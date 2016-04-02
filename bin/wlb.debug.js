#!/usr/bin/env node

var express=require("express");
var wsio = require('../lib/socket.js');
var consoler = require('consoler');

var app = express.createServer()

app.use(express.static('public'));

wsio.setWsio(app)

app.listen(3000)

consoler.success('node server port: 3000');
