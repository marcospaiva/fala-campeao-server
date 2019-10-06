const express = require('express');
const app = express();

app.use('/api', require('./src/routes'))

let port = process.env.PORT || 8080;
app.listen(port);