const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express()
const port = 5000
var cors = require('cors')

app.use(express.json()); 
app.use(cors())

// Available Routes 
app.use('/api/', require('./routes/contactdata'));

app.listen(port,()=>{
    console.log(`iNotebook Backend Listening at http://localhost:${port}`)
})