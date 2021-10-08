const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//thre are two ports backend and front end to avoid it

const app = express();

//import routes
const postRoutes = require('./routes/customers');
//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);
const PORT = 8000;
// const DB_URL = 'mongodb+srv://User1:EDALcgZGYn6Cgt2a@cluster0.uqwyi.mongodb.net/MernCrud?retryWrites=true&w=majority';
const DB_URL = 'mongodb+srv://pesh:pesh123@mernappnew.xwtnc.mongodb.net/customer?retryWrites=true&w=majority';


mongoose.connect(DB_URL,{
       
})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));
app.listen(PORT,() =>{
    console.log(`App is running on ${PORT}`);
});

 