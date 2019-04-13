const http = require('http');
const static = require('node-static');

const host = "localhost";
const port = 5000;

const staticServer = new static.Server('.');
const server = http.createServer();

server.on("request", (req, res) => {
    staticServer.serve(req, res)
});
server.listen(port, host, (err) => {
    if (err) throw err;
    else console.log(`Static server is running on ${host}:${port}`);
});