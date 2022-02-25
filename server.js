require('dotenv').config();

const express = require('express');
const connectdb = require('./db/connnection')
const cors = require('cors')

const app = express();




const router = require('./routes/Router');
const Userrouter = require('./routes/userRouter')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/api/users', Userrouter)
app.use('/api/pins', router)

app.get('/', (req, res, next) => {
    res.status(200).send(`<h1>Hey Travel_App_Backend</h1>`);

    next()
})
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`server is listening on port : ${PORT}😃`);
    connectdb()
})