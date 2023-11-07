
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://j1soo:8YINZOXMJHzXjfG8@cluster0.mhfdozd.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Mongo DB 접속 성공");

    const collection = client.db('test').collection('persons');
    
    await collection.insertOne({name: "tony", age: 30 });
    console.log("문서 추가 완료");

    const documents = await collection.find({name: "tony"}).toArray();
    console.log("찾은 문서: ", documents);

    await collection.updateOne( { name: "tony" }, { $set: { age: "40" }});
    console.log("문서 업데이트");
    const updateDocuments = await collection.find({ name: "tony" }).toArray();
    console.log("갱신된 문서: ", updateDocuments);

  } catch (err) {

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();
