const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/friends'){
        // res.writeHead(200, {
        //     'content-type': 'application/json'
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 1,
            name: 'Stefan Dimitrov'
        }));
    } else if (req.url === '/questions'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<p>Hi Gabby! Here are some questions for you:</p>');
        res.write('<ul>');
        res.write('<li>What do you <strong>like most</strong> about your working at Regiocom/Digimondo?</li>');
        res.write('<li>What do you think I need to learn in order to succeed at this job?</li>');
        res.write('<li>What growth opportunities do you see long term for a Junior JavaScript Developer in Regiocom/Digimondo</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... `)
}); //127.0.0.1 => localhost