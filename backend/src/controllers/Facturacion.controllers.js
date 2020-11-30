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
  console.log(req.body);
  const NuevoFacturacion = new Facturacion({
    factura,
    nombreCliente,
    fecha,
    idFiscal,
    consumo,
    importe,
  });

  if (!factura) {
    res.status(400).json({
      mensaje: "Campo Factura obligatorio",
      retorno: "400",
    });
  } else {
    const idFactura = await Facturacion.findOne({ factura: factura });

    if (idFactura) {
      res.status(402).json({
        mensaje: "El numero de factura ya existe",
        retorno: "402",
      });
    } else {
      await NuevoFacturacion.save();
      res.status(201).json({
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
      res.status(200).json({
        mensaje: "Registro Eliminado",
        retorno: "200",
      });
    } else {
      res.status(402).json({
        mensaje: "Registro Inexistente",
        retorno: "402",
      });
    }
  } catch (err) {
    res.status(500).json({
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
      res.status(200).json({
        mensaje: "Registro Actualizado",
        retorno: "200",
      });
    } else {
      res.status(402).json({
        mensaje: "Registro Inexistente",
        retorno: "402",
      });
    }
  } catch (err) {
    console.log("codigo de error----->", err.code);
    if (err.code == 11000) {
      res.status(402).json({
        mensaje: "El numero de factura ya existe",
        retorno: "402",
      });
    } else {
      res.status(500).json({
        mensaje: "Error al actualizar",
        retorno: "500",
      });
    }
  }
};



FacturacionCtrl.buscarfactura = async (req, res) => {
  const factura = req.params.factura;
  const respuesta = await Facturacion.findOne({ factura: factura });

  if (respuesta) {
    res.status(200).json(respuesta);
  } else {
    res.status(304).json({
      mensaje: "Registro Inexistente",
      retorno: "304",
    });
  }
};

module.exports = FacturacionCtrl;
