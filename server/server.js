const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/api', require('./src/routes'));

let port = process.env.PORT || 3001;
app.listen(port);