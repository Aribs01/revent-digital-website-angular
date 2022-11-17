const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/dist/revent-digital')));

app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname + '/dist/revent-digital/index.html'));
});
app.listen(process.env.PORT || 8080, function(){
   console.log("STARTED");
});