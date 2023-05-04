const express = require('express')
const app = express()
const port = 5000

const chefs = require('./data/chef.json')




app.get('/chefs', (req, res) => {
  res.send(chefs)
})


app.get('/chefs/:id', (req, res) => {
  const Id = parseInt(req.params.id);
  console.log(Id);
  const selectedChef = chefs.find(n=>n.chefId===Id)
  res.send(selectedChef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})