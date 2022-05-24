const express = require('express');
const connectDB = require('./config/db');
const app = express();
const handlebars = require('express-handlebars');

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/',
    extname: 'hbs'
    }));
app.set('view engine', 'hbs');
app.use(express.static('public'));


const PORT = process.env.PORT || 5000;

//connect to database
connectDB();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Server is running');
})

app.use('/api/users', require('./routes/api/users'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/download', require('./routes/api/download'));
app.use('/api/myresume', require('./routes/api/myresume'));

app.listen(PORT, ()=>{
    console.log(`Server is running at port : ${PORT}`);
});