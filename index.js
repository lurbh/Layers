const express = require("express");

require('dotenv').config();

let app = express();

let connection;

const customersRoutes = require("./controller-layer/customer");


async function main(){
    app.use("/customers" , customersRoutes);
}

main();
let port = 7890;
app.listen(port,function()
{
    console.log('Server is running at port ' + port);
});

module.exports = { connection,app };