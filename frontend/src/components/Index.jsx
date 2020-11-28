import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Index() {
  const [facturacion, setFacturacion] = useState([]);
  const [factura, setFactura] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [idFiscal, setIdFiscal] = useState("");
  const [consumo, setConsumo] = useState("");
  const [importe, setImporte] = useState("");
  //const [contratoSelect, setContratoSelect] = useState("");

  useEffect(() => {
    obtenerFacturacion();
  }, []);

  const obtenerFacturacion = async () => {
    const respuesta = await Axios.get(
      "http://localhost:4001/facturacion/listarfacturacion"
    );
    setFacturacion(respuesta.data);
    console.log(respuesta.data);
  };

  const guardar = async (e) => {
    e.preventDefault();
    const nuevoRegFacturacion = {
      factura,
      nombreCliente,
      fecha,
      idFiscal,
      consumo,
      importe,
    };

    console.log(nuevoRegFacturacion);
    const respuesta = await Axios.post(
      "http://localhost:4001/facturacion/crear",
      nuevoRegFacturacion
    );
    const mensaje = respuesta.data.mensaje;

    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmationButton: false,
    });
    /*setTimeout(() => {
      window.location.href = "/";
    }, 2500);*/
  };

  return (
    <div>
      <header className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-pencil-alt"></i> Titulo{" "}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar py-4">
        <div className="container">
          <div className="col-md-3">
            <Link
              to="/"
              className="btn btn-primary btn-block"
              data-toggle="modal"
              data-target="#addRegistro"
            >
              {" "}
              <i className="fas fa-plus"> Add Registro</i>
            </Link>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="input-group">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              ></input>
            </div>
          </div>
        </div>
      </nav>

      {/*MOSTRAR REGISTROS*/}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4> Facturacion</h4>
                </div>
                <table className="table table-responsive-lg table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Factura</th>
                      <th>Nombre Cliente</th>
                      <th>Fecha</th>
                      <th>Id Fiscal</th>
                      <th>Consumo</th>
                      <th>Importe</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facturacion.map((facturacion, i) => (
                      <tr key={facturacion._id}>
                        <td>{i}</td>
                        <td>{facturacion.factura}</td>
                        <td>{facturacion.nombreCliente}</td>
                        <td>{facturacion.fecha}</td>
                        <td>{facturacion.idFiscal}</td>
                        <td>{facturacion.consumo}</td>
                        <td>{facturacion.importe}</td>
                        <td>
                          <button className="btn btn-danger mr-1">
                            {" "}
                            Eliminar
                          </button>
                          <button className="btn btn-warning mr-1">
                            {" "}
                            Actualizar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Agregar registro */}

      <div className="modal fade" id="addRegistro">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-tittle">Add registro </h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={guardar}>
                <div className="form-group">
                  <label> Factura </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setFactura(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Nombre Cliente </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setNombreCliente(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Fecha </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Id Fiscal </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setIdFiscal(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Consumo </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setConsumo(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Importe </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setImporte(e.target.value)}
                  />
                  <div className="form-group"></div>

                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                      {" "}
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
