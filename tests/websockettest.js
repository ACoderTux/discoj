var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
 
client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
 
client.on('connect', function(connection) {
    connection.on('message', (data) => {
        console.log(data)
    })
    connection.send(JSON.stringify({
        "op": 2,
        "d": {
            "token": "NjU1NzY4MTA5NjEyNzkzODU2.Xfj5Fw.wmd6EwSCw2S20UBR017CYVxqctA",
            "properties": {
                "$os": "linux",
                "$browser": "disco",
                "$device": "disco"
            }
        },
        "s": null,
        "t": null
    }))
});
 
client.connect('wss://gateway.discord.gg/');