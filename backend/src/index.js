const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyparser=require('body-parser');
const cors=require('cors');

require('./database');




app.set('Port', 4001);


app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors({origin:'*'}));


app.use('/facturacion', require('./routes/Facturacion.route'));


app.listen(app.get('Port'),() => {
    console.log('server listening', app.get('Port'));
})

module.exports = app;