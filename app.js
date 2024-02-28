const express = require('express')
const app = express()

// app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.json([{name: 'jacob'}, {name : 'natalie'}])
})

app.listen(3000, () =>{
    console.log('server started on port 3000...')
})