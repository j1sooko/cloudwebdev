const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('app.use()');
    next();
});

app.use('/', (req, res, next) => {
    console.log('app.use(/)');
    next();
});

app.all('/', (req, res, next) => {
    console.log('app.all(/)');
    next();
});

app.use('/about', (req, res, next) => {
    console.log('app.use(/about)');
    next();
});

app.get('/', (req, res, next) => {
    console.log('app.get(/)');
    res.send('app.get OK')
});

app.get('/about', (req, res, next) => {
    console.log('app.get(/about)');
    res.send('app.get about OK')
});


app.post('/', (req, res, next) => {
    console.log('app.post(/)');
    res.send('app.post OK')
});

app.put('/', (req, res, next) => {
    console.log('app.put(/)');
    res.send('app.put OK')
});

app.delete('/', (req, res, next) => {
    console.log('app.delete(/)');
    res.send('app.delete OK')
});

app.listen(port, () => {
    console.log(`Server Listening at ${port}`);
})