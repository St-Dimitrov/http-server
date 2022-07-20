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
        res.write('<li>What do you <strong>like the most</strong> about your working at Digimondo?</li>');
        res.write('<li>If you had a friend who is looking for a job with JavaScript would you advice them to apply at Digimondo? Do you mind sharing <strong>why?</strong></li>');
        res.write('<li>What do you think I need to learn in order to succeed at this job?</li>');
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