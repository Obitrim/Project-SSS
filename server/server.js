const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Developer');
});

app.listen(8000, () => {
	console.log('App listening on port ' + 8000);
})