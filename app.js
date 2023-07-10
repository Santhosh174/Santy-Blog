const express = require('express');
const { result } = require('lodash');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const routes = require('./routes/blogRoutes')
const db = 'mongodb+srv://santhosh_18:santhosh1818@santhosh.q56f2et.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=> console.log('connected to db'))
    .catch((err)=> console.log(err));
const morgan = require('morgan');
app.set('view engine','ejs');
app.listen(3000);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));




app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.use(routes);



app.use((req,res)=>{
    res.status(404).render('404',{title:'error'});
});