const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");

let url = "mongodb://localhost:27017/";
let stream = fs.createReadStream("bbddPruebas.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push({
        factura : data[0],
        nombreCliente : data[1],
        fecha: data[2],
        idFiscal: data[3],
        consumo: data[4],
        importe: data[5]
      
    });
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    console.log(csvData);

    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("pruebaw")
          .collection("facturacions")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });

stream.pipe(csvStream);