console.log('server is starting...');

var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());


app.get('/favicon.ico', function (req, res) {
    res.status(204);
    res.end();
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    });
});

function isValidInput(favorForm) {
    return favorForm.name && favorForm.name.toString().trim() !== '' &&
        favorForm.recipient && favorForm.recipient.toString().trim() !== '' &&
        favorForm.favorSelect && favorForm.favorSelect.toString().trim() !== '';
}

app.post('/home', (req, res) => { // incoming get from front end live server
    //console.log(req.body);
    if (isValidInput(req.body)) {
        //insert into db...
        const favor = {
            name: req.body.name.toString(),
            recipient: req.body.recipient.toString(),
            favorSelect: req.body.favorSelect.toString()
        };

        console.log(favor);
    } else {
        res.status(422);
        res.json({
            message: 'names of the owed and recipient and selection are required'
        });
    }
});

//app.use(express.static('/Client/html')); tried to link the html though api but then realised I dont need to

var server = app.listen(3000, listening);

function listening() {
    console.log('listening on: https://localhost:3000');
};