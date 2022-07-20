const express = require('express');
const path = require('path');

const port = 8080;
const app = express();
app.listen(port, ()=>{console.log(`server started on port ${port}`)});

app.get('/', (req, res, next) => { res.sendFile(path.join(__dirname, '/index.html')) } );
app.get('/about', (req, res, next) => { res.sendFile(path.join(__dirname,'./about.html') )} );
app.get('/contact-me', (req, res, next) => { res.sendFile(path.join(__dirname,'./contact-me.html'))} );
app.use((req, res, next) => { res.sendFile(path.join(__dirname,'./404.html'))} );