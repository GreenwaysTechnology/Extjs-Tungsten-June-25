const express = require('express')
const path = require('node:path')
const app = express()

//map ext app 
const staticPath = path.join(__dirname, 'build', 'production', 'ProdApp');
//mapping ext app with express(node) server
app.use(express.static(staticPath))

//
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
})
const PORT = process.env.PORT || 8080
//start web server
app.listen(PORT, () => {
    console.log(`Ext Server is Running at http://localhost:${PORT}`)
})
