const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/multiply/:a/:b', (req, res) => {

    // concat string
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var multiply = Number(a*b);
    res.send("The product is : "+Number(multiply));
});

app.get('/division/:a/:b', (req, res) => {

    // concat string
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var division = Number(a/b);
    res.send("The result is : "+Number(division));
});


app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app