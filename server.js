const http = require('http'); //import du package http natif de node

const server = http.createServer((req, res)=> {
    res.end("voici mon premier server node");
});

server.listen(process.env.PORT || 3000);