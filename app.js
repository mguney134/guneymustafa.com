const https = require("https");

const PORT = 3000;

const server = https.createServer(function (req, res) {
    res.write("Hello, My name Mustafa Guney. I am Full Stack Developer!");
    res.end();
});

server.listen(PORT);
console.log(`Server started on port ${PORT}`);
