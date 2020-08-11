const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));
app.get('/*', function(req, res) {
    res.sendfile(path.join(__dirname + '/dist/angular-tour-of-heroes/index.html'));
});
app.listen(procress.env.PORT || 8080);