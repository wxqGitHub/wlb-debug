#!/usr/bin/env node

var wsioTg = require('websocket.io');
var consoler = require('consoler');
var moment = require('moment');

module.exports = {
    setWsio : function(app){
        var ws = wsioTg.attach(app);

        ws.on('connection', function(socket){
            consoler.success('debug connection success!');

            socket.on('message', function (msg) {

                try{
                    var log = JSON.parse(msg);
                }catch(e){
                    return consoler('500', 'log error');
                }

                if(log.type == 'error'){

                    consoler.error(moment().format('h:mm:ss') +'\n'+ log.message );
                }else {
                    consoler.info(moment().format('h:mm:ss') +'\n'+ log.message);
                }
            });

            socket.on('close', function (msg) {
                console.error('debug close');
            });
        })

    }
}
