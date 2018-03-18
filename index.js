var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000);

var foo = {
    data: [1, 2, 3],
    bar: 'baz'
};
app.get('/api/stuff.json', function(req, res) {
    res.send(foo);
});