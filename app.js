const express = require('express');
const path = require('path'); // For path manipulation
const app = express();
const port = process.env.PORT || 4321;

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/redirect-uri', async (req, res) => {
    // const code = req.query.code;
    const code =
        'AQDYRAjRP9Z8RY3BA5ZR4lO0mRShVHncq8JqXOguZWbood66SUQMrocr9eNzTUNfja_2H46UpF8YI_ncsOmGFWQUkkFX2i2IXvLReAT_VWVINoBSzREH1f96g58RmeGNR1ONMSsJ0d3Qwjm8nDcJ-DT8XyR9gucAe7rFG4n4S6eFJE_mslRtWp9BLj0IFYDFSLc1BGfYaHu7D_nG9u0nQGV6gJaQXOhW4JTZtfCeIpAO_A';
    res.render('token', {
        code,
    });
});

app.get('/', async (req, res) => {
    const data = { title: 'My Dynamic Title' };
    res.render('index', data);
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
