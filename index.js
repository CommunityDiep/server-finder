const express = require('express');
const bodyParser = require('body-parser');
const serverFinder = express();

const servers = require('./servers.json');

serverFinder.get('/findServers', (req, res) => {

});

serverFinder.listen(8081);
