/**
 * Created by niwantha on 9/27/17.
 */
// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middleware error handling
app.use((err, req, res, next) => {
    if (res.headersSent) {
    return next(err);
}
console.error(err.stack);
return res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000!');
});

const newsbot = require('./new');
newsbot.init(app);