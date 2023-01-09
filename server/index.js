const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Hello World');
});

app.use('/app',express.static(__dirname + '/../app'));

app.listen(3000);