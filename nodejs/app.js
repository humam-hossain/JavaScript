const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit(); // hard exited event loop & shutting down the program
});

server.listen(3000);