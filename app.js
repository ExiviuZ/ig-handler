const express = require('express');
const app = express();

app.get('/redirect-uri', async (req, res) => {
    const code = req.query.code;
    res.send(code);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
