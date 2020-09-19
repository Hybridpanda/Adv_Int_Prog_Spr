console.log('server is starting...');

var favorUser = require('./favorUser');
var express = require('express');
var cors = require('cors');

var app = express();
var users = [];
app.use(cors());
app.use(express.json());


app.get('/favicon.ico', function (req, res) {
    res.status(204);
    res.end();
});

app.get('/all', sendAll);

app.get('/user', function (req, res) {
    res.send(users.toString());
})

app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    });
});

function sendAll(req, res) {
    res.send(favors);
}

function isValidInput(favorForm) {
    return favorForm.name && favorForm.name.toString().trim() !== '' &&
        favorForm.recipient && favorForm.recipient.toString().trim() !== '' &&
        favorForm.favorSelect && favorForm.favorSelect.toString().trim() !== '';
}

app.post('/home', (req, res) => { // incoming get from front end live server
    //console.log(req.body);
    if (isValidInput(req.body)) {
        //insert into db...
        /*const favor = {
            name: req.body.name.toString(),
            recipient: req.body.recipient.toString(),
            favorSelect: req.body.favorSelect.toString()
        };*/
        var nUser = new favorUser();
        nUser.setName(req.body.name.toString());
        nUser.setrecipient(req.body.recipient.toString());
        nUser.setfavor(req.body.favorSelect.toString());
        console.log(nUser.toString());
        users.push(nUser);
    } else {
        res.status(422);
        res.json({
            message: 'names of the owed and recipient and selection are required'
        });
    }
});

var server = app.listen(3000, listening);

function listening() {
    console.log('listening on: https://localhost:3000');
};