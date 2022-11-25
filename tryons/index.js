const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3005  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/FTNW')

const givingFood = require('./routes/givingfood')
app.use('/api',givingFood)
const gettingFood = require('./routes/getsomefood')
app.use('/api',gettingFood)
app.use(express.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))