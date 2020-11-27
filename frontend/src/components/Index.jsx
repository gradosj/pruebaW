import React, {UseState, useEffect} from 'react';
import Axios from 'axios';

export default function Index() {
    const [facturacion, setFacturacion] = UseState([]);

  //  useEffect(() => {
        obtenerFacturacion();

        
 //   },[]);

    const obtenerFacturacion = async() => {
        const respuesta = Axios.get('http://localhost:4001/facturacion/listarfacturacion');
        console.log(respuesta.data);
        
    }
    return (
        <div>
            
        </div>
    );
};

