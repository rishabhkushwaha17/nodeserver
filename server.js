const express = require('express')
const app = express()
const port = 3000
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rishabhkushwaha:NI8aPhaApTuidNSF@cluster0.a7ukjms.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
}).then((a)=>{  console.log(a);
});

app.get('/roomstate', (req, res) => {
  client.db("test").collection("devices").insertOne(req);
  res.send({ "ResultCode" : 0, "Message" : "OK" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})