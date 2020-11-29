const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw new err();

  client
    .db("pruebaw")
    .collection("facturacions")
    .deleteMany((err, res) => {
      if (err) throw err;
      client.close();
    });
});
