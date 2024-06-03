const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/redirect-uri', async (req, res) => {
    const code = req.query.code;
    res.send(code);
});

app.get('/', async (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('App is listening on port 3000');
});
