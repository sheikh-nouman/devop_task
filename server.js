const express = require('express');
const bodyParser = require('body-parser');
const { colorize } = require('./colorization-client/colorizationClient');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Success! ');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.post('/colorize', (req, res) => {
    console.log(req.body);
    var result = colorize(req.body.op, req.body.image);
    if(result) {
        res.send(result);
    } else {
        res.send('Error');
    }
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'));