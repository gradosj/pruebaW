const request = require('supertest');


const app = require ('../src/index');

it('Consulta correcta', done => {
    request(app)
    .get('/facturacion/listarfacturacion')
    .set('Accept', 'application/json')
    .expect(200,done);
});

it('Consulta por numero de factura que existe', done => {
    request(app)
    .get('/facturacion/buscar/F00003')
    .set('Accept', 'application/json')
    .expect(200,done);
});


it('Crear nuevo registro', done => {
    const data = {
        factura: 'PRUEBA0X',
        nombreCliente: 'Nombre de pruebas',
        fecha : '2020-05-11',
        idFiscal: 'Fprueba',
        consumo: 547,
        importe: 541,
    }
    request(app)
    .post('/facturacion/crear')
    .send(data)
    .type('json')
    .set('Accept', 'application/json')
    .expect(200,done);
});


/* CAMBIAR ID POR ALGUNO EXISTENTE
it('Eliminar correcto', done => {
    request(app)
    .delete('/facturacion/eliminar/5fc4df6024aa3899731360ea') 
    .set('Accept', 'application/json')
    .expect(200,done);
});

*/
