const mongoose=require('mongoose');
const {Schema} = mongoose;


const FacturacionSchema= new Schema({
    factura: String,
    nombreCliente: String,
    fecha: String,
    identificadorFiscal: String,
    consumoW: String,
    importe: String
});


module.exports = mongoose.model('facturacion',FacturacionSchema);


