const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 8080

app.use(express.static(path.join(__dirname,'static')));


app.set('views', './views');
app.set('view engine', 'html');

router.get('', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
})

app.use('/',router);
app.listen(port, 'localhost');
