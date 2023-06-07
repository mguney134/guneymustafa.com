const express = require('express');
const server = require("http").createServer();
const app = express();
const PORT = 3020;

app.get('/', function(req, res){
	res.sendFile('index.html', {root: __dirname});
});

server.on('request', app);
server.listen(PORT, function () { console.log(`Listening on ${PORT}`); });


/** Websocket */
const WebsocketServer = require('ws').Server;

const wss = new WebsocketServer({server: server});

wss.on('connection', function connection(ws) {
    const numClients = wss.clients.size;
    console.log('Clients connected', numClients);

    wss.broadcast(`Current visitors: ${numClients}`);

    if (ws.readyState === ws.OPEN) {
        ws.send('Welcome to my server');
    }

    ws.on('close', function close() {
        wss.broadcast(`Curent visitors: ${numClients}`);
        console.log('A client has disconnected');
    });

});

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
    });
}