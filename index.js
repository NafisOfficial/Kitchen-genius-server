const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

const chefs = require('./data/chef.json');


app.use(cors());


app.get('/chefs', (req, res) => {
  res.send(chefs)
});


app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefs.find(n=>n.chefId===id)
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});