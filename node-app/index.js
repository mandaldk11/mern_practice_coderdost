require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors')
const express = require('express');
const productRouter = require('./routes/product')
const server = express();


// database connection--
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected...")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Middleware-
server.use(express.static('dist'))
server.use(cors())
server.use(express.json())
server.use('/api', productRouter)
server.use('*', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
})

server.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT}`)
})