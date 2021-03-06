const express = require ('express')

const app = express()

app.get('/', (req, res, next) => {
  res.send('This is the response!')
})

app.get('/json', (req, res, next) => {
  const data = {name:'David', location:'Sydney'}
  res.json(data)
})

app.get('/html', (req, res, next) => {
  const html = '<html><h1 style="color:red">This is an HTML response!</h1></html>'
  res.send(html)
})

app.listen(5000)
console.log('Server running on localhost:5000')
