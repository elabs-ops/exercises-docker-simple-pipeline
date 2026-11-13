const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World v2.0!</h1>')
})

app.get('/status', (req, res) => {
  res.json({ 
    status: "up", 
    message: "The application is running!",
    deployedVia: "GitHub Actions & Watchtower",    
    timestamp: new Date()
  })
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})