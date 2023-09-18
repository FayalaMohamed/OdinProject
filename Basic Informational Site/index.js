const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = './';

    if (req.url === '/') {
        filePath += 'index.html';
    } else if (req.url === '/about') {
        filePath += 'about.html';
    } else if (req.url === '/contact-me') {
        filePath += 'contact-me.html';
    } else {
        filePath += '404.html';
    }

    const contentType = getContentType(filePath);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Server Error');
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case '.html':
            return 'text/html';
        default:
            return 'text/plain';
    }
}
