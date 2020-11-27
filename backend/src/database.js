const mongoose=require('mongoose');

URI=('mongodb://localhost/pruebaw')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(db=>console.log('la base de datos esta conectada'))
.catch(error=>console.log(error))


module.exports=mongoose;