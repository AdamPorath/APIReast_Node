const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('./src/Routes/index')(app);


mongoose.connect(
    'mongodb+srv://adamapi:321@api-rest-node.9zve0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.listen(3333);


