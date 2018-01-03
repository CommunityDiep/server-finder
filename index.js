const express = require('express');
const bodyParser = require('body-parser');
const serverFinder = express();
serverFinder.use(bodyParser.json());

const servers = require('./servers.json');

serverFinder.post('/findServers', (req, res) => {
	try {
		res.send(JSON.stringify(filterize(servers, req.body), null, 2));
	} catch (error) {
		// do nothing!
		// don't reveal info to the public!
	}
});

function filterize(data, filters) {
	if (typeof data !== "object" || data === {}) {
		// an incompatible type or empty object is no filters, by default
		// plus performance
		return data;
	}

	return servers.filter(function(item) {
		return item.ip !== 'hello'
	});
}

serverFinder.listen(8081);
