const http = require('http');
const fs = require('fs');

let imgSuffixes = ["png", "gif", "jpeg", "jpg"]

http.createServer((req, res) => {
    console.log(req.headers.host + req.url);

    let path = '..' + decodeURI(req.url)

    let content_type = 'image/png';
    let cmps = path.split(".");
    if (cmps.length > 1 && imgSuffixes.indexOf(cmps[cmps.length-1]) == -1) {
        content_type = "application/octet-stream";
    }

    fs.readFile(path, 'binary', (err, file) => {
        if (err) {
            throw err;
        } else {
            res.writeHead(200, {
                'Content-Type': content_type
            });
            res.write(file, 'binary');
            res.end();
            return;
        }
    })
}).listen(3002);
console.log('port = 3002');