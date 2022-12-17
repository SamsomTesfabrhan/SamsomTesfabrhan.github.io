const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

//middleware
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('form');
})

app.post('/result', (req, res) => {

    const { name, age } = req.body;

    res.render('outp', {name,age});
});

app.listen(4000, () => {
    console.log('App running on port 4000');
})