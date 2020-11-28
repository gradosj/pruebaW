const FacturacionCtrl={}
const Facturacion=require('../models/Facturacion.model');


FacturacionCtrl.createFacturacion=async(req,res) => {
    const {factura, nombreCliente, fecha, idFiscal, consumo, importe} = req.body;
    console.log(req.body);
    const NuevoFacturacion = new Facturacion({
        
        factura, nombreCliente, fecha, idFiscal, consumo, importe
    });

    const idFactura = await Facturacion.findOne({factura:factura});

    if (idFactura) {
        res.json({
            mensaje: 'El numero de factura ya existe'
        })
    } else {
        await NuevoFacturacion.save();
        res.json({
            mensaje: 'Registro agregado OK',
            //id: NuevoFacturacion._id,
            factura: NuevoFacturacion.factura,
            

        })
    }

}

FacturacionCtrl.listar = async (req, res) => {
    const respuesta = await Facturacion.find();
    res.json(respuesta)
}

FacturacionCtrl.listarid=async(req,res) => {
    const id=req.params.id;
    const respuesta = await Facturacion.findById({_id:id});
    res.json(respuesta);
}

FacturacionCtrl.eliminar = async (req,res) => {
    
    const id = req.params.id;
    //console.log('JOSEEEEEEEE--> ', id)
    await Facturacion.findByIdAndRemove({_id:id});
    res.json ({
        mensaje: 'Registro Eliminado'
    });
}

FacturacionCtrl.actualizar = async (req,res) => {
    const id = req.params.id;
    console.log('jose-----', req.body);
    await Facturacion.findByIdAndUpdate({_id:id}, req.body);
    res.json ({
        mensaje: 'Registro Actualizado'
    })
}

FacturacionCtrl.buscarfactura = async (req,res) => {
    const factura = req.params.factura;
    console.log(factura);
    const respuesta = await Facturacion.find({factura:factura});
    console.log(respuesta);
    //console.log(respuesta.data);
    res.json (respuesta);

    
}



module.exports = FacturacionCtrl