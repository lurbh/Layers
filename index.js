const express = require("express");

let app = express();

let port = 7890;
app.listen(port,function()
{
    console.log('Server is running at port ' + port);
});