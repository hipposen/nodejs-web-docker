// express und http Module importieren. Sie sind dazu da, die HTML-Dateien
// aus dem Ordner "public" zu veröffentlichen.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 80;

// Mit diesem Kommando starten wir den Webserver.
server.listen(port, function () {
// Wir geben einen Hinweis aus, dass der Webserer läuft.
console.log('Webserver läuft und hört auf Port %d', port);
});
app.use(express.static(__dirname + '/public'));
