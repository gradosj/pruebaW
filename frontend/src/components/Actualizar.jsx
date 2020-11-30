import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function Actualizar(props) {

  const [factura, setFactura] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [idFiscal, setIdFiscal] = useState("");
  const [consumo, setConsumo] = useState("");
  const [importe, setImporte] = useState("");
  const URL = "http://localhost:4001/facturacion/";

  useEffect(() => {
    console.log("entra en el useeffect");
    obtenerFacturacion();
    // eslint-disable-next-line
  }, []);

  const obtenerFacturacion = async () => {
    console.log("entra en obtener facturacion");

    const id = props.match.params.id;
    const respuesta = await Axios.get(URL + "listar/" + id);
    console.log("la respuesta es --> ", respuesta.data);
    setFactura(respuesta.data.factura);
    setNombreCliente(respuesta.data.nombreCliente);
    setFecha(respuesta.data.fecha);
    setIdFiscal(respuesta.data.idFiscal);
    setConsumo(respuesta.data.consumo);
    setImporte(respuesta.data.importe);
  };

  const actualizar = async (e) => {
    e.preventDefault();
    const id = props.match.params.id;

    const facturacion = {
      factura,
      nombreCliente,
      fecha,
      idFiscal,
      consumo,
      importe,
    };

    const respuesta = await Axios.put(URL + "actualizar/" + id, facturacion);
    const {mensaje, retorno} = respuesta.data;

    console.log('este es el retorno --> ', retorno)

    console.log('este es el mensaje ---> ', mensaje);

    if (retorno === "200") {
      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2500);

    } else {
      Swal.fire({
        icon: "error",
        title: mensaje,
        showConfirmButton: true,
      });
      /*setTimeout(() => {
        window.location.href = "/";
      }, 2500);*/

    }
    
  };

  return (
    <div className="container col-md-6 mt-4">
      <div className="card">
        <div className="card-header">
          <h3>Editar</h3>
          <div className="card-body">
            <form onSubmit={actualizar}>
              <div className="form-group">
                <label> Factura </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setFactura(e.target.value)}
                  value={factura}
                />
              </div>
              <div className="form-group">
                <label> Nombre Cliente </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setNombreCliente(e.target.value)}
                  value={nombreCliente}
                />
              </div>
              <div className="form-group">
                <label> Fecha </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setFecha(e.target.value)}
                  value={fecha}
                />
              </div>
              <div className="form-group">
                <label> Id Fiscal </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setIdFiscal(e.target.value)}
                  value={idFiscal}
                />
              </div>
              <div className="form-group">
                <label> Consumo </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setConsumo(e.target.value)}
                  value={consumo}
                />
              </div>
              <div className="form-group">
                <label> Importe </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setImporte(e.target.value)}
                  value={importe}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-warning" type="submit">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
