require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) =>{
   res.json('get Usuario');
});

app.post('/usuario', (req, res) =>{

     let body = req.body;
    res.json({
        body
    });
 });
//actualizacion de datos y se utiliza un parametro
 app.put('/usuario/:id', (req, res) =>{
    let id = req.params.id;
    res.json(
        {
            id
            //tambien seria id : id pero ya no es necesario 
        }
    )
 });

 app.delete('/usuario', (req, res) =>{
    res.json('Delete Usuario');
 });


app.listen(process.env.PORT ,() =>{
    console.log('server ok!');
} )