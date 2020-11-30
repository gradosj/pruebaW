const FacturacionCtrl = {};
const Facturacion = require("../models/Facturacion.model");

FacturacionCtrl.createFacturacion = async (req, res) => {
  const {
    factura,
    nombreCliente,
    fecha,
    idFiscal,
    consumo,
    importe,
  } = req.body;
 
  const NuevoFacturacion = new Facturacion({
    factura,
    nombreCliente,
    fecha,
    idFiscal,
    consumo,
    importe,
  });

  if (!factura) {
    res.json({
      mensaje: "Campo Factura obligatorio",
      retorno: "400",
    });
    res.render('error', {error:err});
  } else {
    const idFactura = await Facturacion.findOne({ factura: factura });

    if (idFactura) {
      res.json({
        mensaje: "El numero de factura ya existe",
        retorno: "402",
      });
    } else {
      await NuevoFacturacion.save();
      res.json({
        mensaje: "Registro agregado OK",
        retorno: "201",

        factura: NuevoFacturacion.factura,
      });
    }
  }
};

FacturacionCtrl.listar = async (req, res) => {
  const respuesta = await Facturacion.find();
  res.json(respuesta);
};

FacturacionCtrl.listarid = async (req, res) => {
  const id = req.params.id;
  const respuesta = await Facturacion.findById({ _id: id });
  res.json(respuesta);
};

FacturacionCtrl.eliminar = async (req, res, next) => {
  try {
    const id = req.params.id;
    const facturacion = await Facturacion.findByIdAndRemove({ _id: id });

    if (facturacion) {
      res.json({
        mensaje: "Registro Eliminado",
        retorno: "200",
      });
    } else {
      res.json({
        mensaje: "Registro Inexistente",
        retorno: "402",
      });
    }
  } catch (err) {
    
    res.json({
      mensaje: "Error",
      retorno: "500",
    });
  }
};

FacturacionCtrl.actualizar = async (req, res, next) => {
  try {
    const id = req.params.id;
    const facturacion = await Facturacion.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (facturacion) {
      res.json({
        mensaje: "Registro Actualizado",
        retorno: "200",
      });
    } else {
      res.json({
        mensaje: "Registro Inexistente",
        retorno: "402",
      });
    }
  } catch (err) {
    console.log("codigo de error----->", err.code);
    if (err.code == 11000) {
      res.json({
        mensaje: "El numero de factura ya existe",
        retorno: "402",
      });
    } else {
      res.json({
        mensaje: "Error al actualizar",
        retorno: "500",
      });
    }
  }
};



FacturacionCtrl.buscarfactura = async (req, res) => {
  const factura = req.params.factura;
  const respuesta = await Facturacion.find({ factura: factura });

  if (respuesta) {
    res.json(respuesta);
  } else {
    res.json({
      mensaje: "Registro Inexistente",
      retorno: "304",
    });
  }
};

module.exports = FacturacionCtrl;
