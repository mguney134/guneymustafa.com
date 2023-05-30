const http = require("http");

const PORT = 3020;

const server = http.createServer(function (req, res) {
    res.write("Hello, My name Mustafa Guney. I am Full Stack Developer! This is my blog page.");
    res.end();
});

server.listen(PORT);
console.log(`Server started on port ${PORT}`);
