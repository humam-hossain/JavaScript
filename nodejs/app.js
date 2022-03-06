const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // hard exited event loop & shutting down the program
    res.setHeader('Content-Type', 'text/html');
    res.write('<head>');
    res.write('<head><title> my page </title></head>');
    res.write('<body><h1> Humam </h1></body>');
    res.write('</head>');
    res.end();
});

server.listen(3000);