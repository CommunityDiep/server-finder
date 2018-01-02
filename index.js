const express = require('express');
const bodyParser = require('body-parser');
const serverFinder = express();
serverFinder.use(bodyParser.json());

const servers = require('./servers.json');

serverFinder.post('/findServers', (req, res) => {
	res.send(req.body + filterize(servers, req.body));
});

function filterize(data, filters) {
	return servers.filter(function(item) {
		return item.ip !== 'hello'
	});
}

serverFinder.listen(8081);
