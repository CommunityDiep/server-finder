const express = require('express');
const util = require('util');
const bodyParser = require('body-parser');
const serverFinder = express();
serverFinder.use(bodyParser.json());

const servers = require('./servers.json');

serverFinder.post('/findServers', (req, res) => {
	res.send(util.inspect(req.body) + JSON.stringify(filterize(servers, req.body), null, 2));
});

function filterize(data, filters) {
	return servers.filter(function(item) {
		return item.ip !== 'hello'
	});
}

serverFinder.listen(8081);
