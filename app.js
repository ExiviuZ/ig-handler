const express = require('express');
const path = require('path'); // For path manipulation
const app = express();
const port = process.env.PORT || 4321;

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/redirect-uri', async (req, res) => {
    const code = req.query.code;
    res.render('token', { code });
});

app.get('/', async (req, res) => {
    const data = { title: 'My Dynamic Title' };
    res.render('index', data);
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
