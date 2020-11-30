# PRUEBA WELLNESSTG


# Descripcion
El desarrollo consiste una api NODE / Express - MongoDB encargada de servir datos de facutracion electrica


# Instalacion

Para la instalacion de dependencias ejecutar tanto en el front como en el back
```
npm install

```


# Backend

La aplicacion correra en el puerto 4001.



```
npm run dev 

```
Creará la BBDD y levantará la API



Adicionalmente, se permite la subida de datos de prueba desde un csv ya validado en origen con las siguientes instrucciones:


```
npm run install-db

```

Para eliminar la BBDD ejecutamos: 



```
npm run delete-db

```

## Schema de mongoose

```

const FacturacionSchema = new Schema({
  factura: { type: String, required: true, unique: true }, /* Obligatorio y unico */
  nombreCliente: String,
  fecha: String,
  idFiscal: String,
  consumo: String,
  importe: String,
});


```


# Metodos
La V1 de la API permite hacer operaciones CRUD sobre los datos


# Post
Para añadir datos a la api, realizar una operacion post a la url: 

```
url/facturacion/crear

```

## Get
- La API muestra los anuncios en la ruta:

```
url/facturacion/listarfacturacion
```

devuelve consultas tipo: 

```

{"_id": "5fc4ae9e4635b6802c39ecd2",
"factura": "F00001",
"nombreCliente": "Empresa1",
"fecha": "2020-11-01",
"idFiscal": "A00000001",
"consumo": "524",
"importe": "250"
},
{
"_id": "5fc4ae9e4635b6802c39ecd3",
"factura": "F00002",
"nombreCliente": "Empresa2",
"fecha": "2020-11-01",
"idFiscal": "A00000002",
"consumo": "524",
"importe": "250"
},

```

Adicionalmente, se ha incluido una busqueda individual por numero de factura

    ```
url/facturacion/buscar/:factura



{
"_id": "5fc4ae9e4635b6802c39ecd2",
"factura": "F00001",
"nombreCliente": "Empresa1",
"fecha": "2020-11-01",
"idFiscal": "A00000001",
"consumo": "524",
"importe": "250"
}



    ```
## Put

Para realizar actualizaciones acceder a:

```
    url/facturacion/buscar/:factura
```


## Delete

Para eliminar registros acceder a: 

```
    url/facturacion/eliminar/:id
```























