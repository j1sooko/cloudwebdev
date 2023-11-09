const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./person-model');
const port = 3000;

// mongoose.set('strictQuery', false);

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello');
})

app.get('/person', async (req, res) => {
    const person = await Person.find({});
    res.send(person);
});

app.get('/person/:email', async (req, res) => {
    const person = await Person.find({ email: req.params.email });
    res.send(person);
});

app.post('/person', async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.send(person);
});

app.put('/person/:email', async (req, res) => {
    const person = await Person.findOneAndUpdate(
        { email: req.params.email }, 
        { $set: req.body },
        { new: true } );
    console.log(person);
    res.send(person);
});

app.delete('/person/:email', async (req, res) => {
    const person = await Person.deleteMany(
        { email: req.params.email } );
    res.send({ success: true });
});

app.listen(port, async () => {
    console.log(`server is Listening at localhost: ${port}`);
    const uri = "mongodb+srv://j1soo:8YINZOXMJHzXjfG8@cluster0.mhfdozd.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri, {}).then(console.log('Connected to MongoDB'));
});
