const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let data = require('./data');
let dataBaseball = require('./dataBaseball');
let dataFootball = require('./dataFootball');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get("/api/basketball", (req, res) => {
    res.json(data);
 });

 app.get("/api/baseball", (req, res) => {
    res.json(dataBaseball);
 });

 app.get("/api/football", (req, res) => {
    res.json(dataFootball);
 });


app.listen(port, () => console.log(`Listening on port ${port}`));