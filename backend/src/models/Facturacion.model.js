const mongoose = require("mongoose");
const { Schema } = mongoose;

const FacturacionSchema = new Schema({
  factura: { type: String, required: true, unique: true },
  nombreCliente: String,
  fecha: String,
  idFiscal: String,
  consumo: String,
  importe: String,
});

module.exports = mongoose.model("facturacion", FacturacionSchema);
