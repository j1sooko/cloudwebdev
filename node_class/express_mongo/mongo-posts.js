const express = require('express');
const app = express();
const port = 3000;

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


let posts = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    console.log("Mongo DB 접속 성공");
    const collection = client.db('test').collection('persons');
    const documents = await collection.find().toArray();
    console.log("찾은 문서: ", documents);
    await client.close();

    res.json(documents);
});

app.post("/posts", async (req, res) => {
    const { title, name, text } = req.body;

    await client.connect();
    console.log("Mongo DB 접속 성공");
    const collection = client.db('test').collection('persons');
    await collection.insertOne({ id: posts.length + 1, title, name, text, createdDt: Date()});
    console.log("문서 추가 완료");
    res.json({ title, name, text });
    await client.close();
});

// app.delete("/posts/:id", async (req, res) => {
//     const id = req.params.id;
//     const filteredPosts = posts.filter((post) => post.id != +id);
//     const isLengthCganged = posts.length !== filteredPosts.length;
//     posts = filteredPosts;
//     if (isLengthCganged) {
//         res.json("OK");
//         return;
//     } 
//     res.json("NOT CHANGED");
// })

app.listen(port, () => {
    console.log(`server is Listening at localhost: ${port}`);
})