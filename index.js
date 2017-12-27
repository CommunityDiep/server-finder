const express = require('express');

const servers = JSON.parse(fs.readFileSync('./servers.json'));
const serverFinder = express();

serverFinder.get('/findServers', (req, res) => {
	
});

serverFinder.listen(8081);
