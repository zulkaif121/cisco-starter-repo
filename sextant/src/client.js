var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        let data =new Date;
        if (message.type === 'utf8') {
            console.log("ping is '" +data.getTime + "subtract"+ message.utf8Data  +"'");
        }
    });
    
    function sendPing() {
        if (connection.connected) {
            const datecur = new Date;

            connection.sendUTF(datecur.getTime);
            setTimeout(sendPing, 1000);
        }
    }
    sendPing();
});

client.connect('ws://localhost:8080/', 'echo-protocol');